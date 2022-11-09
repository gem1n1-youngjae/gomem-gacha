/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import path from "path";

import { app, BrowserWindow, ipcMain } from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

let mainWindow: BrowserWindow;
const devMode = !app.isPackaged;

interface MainEventsInterface {
  [key: string]: (
    event: Electron.Event,
    options: Electron.BrowserWindowConstructorOptions,
    url: string
  ) => unknown;
}

const parseRoute = (route?: string): string => {
  return devMode
    ? route
      ? `http://localhost:3000/${route}`
      : `http://localhost:3000/`
    : route
    ? `file://${__dirname}/../index.html#/${route}`
    : `file://${__dirname}/../index.html`;
};

const mainEvents: MainEventsInterface = {
  openWindow: (
    event: Electron.Event,
    options: Electron.BrowserWindowConstructorOptions,
    route: string
  ) => {
    const windowURL = devMode
      ? `http://localhost:3000/#/${route}`
      : `file://${__dirname}/../index.html#/${route}`;
    const window = createWindow(options, windowURL);
    return window;
  },
  example: () => {
    console.log("Hi from React");
    mainWindow.webContents.send("exampleElectron");
  },
  minimizeMainWindow: () => {
    mainWindow.minimize();
  },
  closeMainWindow: () => {
    mainWindow.close();
  },
};

// eslint-disable-next-line array-callback-return
Object.keys(mainEvents).map((event) => {
  const func = mainEvents[event];
  ipcMain.on(event, func);
});

const createWindow = (
  options: Electron.BrowserWindowConstructorOptions,
  route: string
) => {
  const browserOptions = {
    webPreferences: {
      // contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
    show: false,
    ...options,
  };
  const window = new BrowserWindow(browserOptions);
  window
    .loadURL(route)
    .then(() => {
      window.show();
    })
    .catch(() => {
      window.show();
    });
  return window;
};

function createMainWindow() {
  const mainURL = parseRoute();

  const options: Electron.BrowserWindowConstructorOptions = {
    width: 1440,
    height: 932,
    frame: false,
    resizable: false,
    fullscreen: false,
  };

  mainWindow = createWindow(options, mainURL);
  mainWindow.on("close", () => {
    app.quit();
  });
  if (devMode) {
    mainWindow.webContents.openDevTools();
    // Hot Reloading on 'node_modules/.bin/electronPath'
    require("electron-reload")(__dirname, {
      electron: path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        ".bin",
        "electron" + (process.platform === "win32" ? ".cmd" : "")
      ),
      forceHardReset: true,
      hardResetMethod: "exit",
    });
  }
}

app.whenReady().then(async () => {
  // DevTools
  if (devMode) {
    await installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log("An error occurred: ", err));
  }

  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});

if (devMode) {
  ipcMain.on("toggle-debug", () => {
    mainWindow.webContents.toggleDevTools();
  });

  ipcMain.on("refresh", (event, arg) => {
    mainWindow.reload();
  });
}
