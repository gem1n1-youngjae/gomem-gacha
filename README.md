# gomem-gacha

이 프로젝트는 CRA(Create React App), Electron, Electron Builder 로 만들어진 프로젝트입니다.

### 추가된 스크립트

개발시 `yarn electron:dev` 로 리액트가 포함된 일렉트론을 실행시킬 수 있습니다.

```
yarn electron:dev
```

배포시 `yarn electron:build` 로 배포를 시킬 수 있습니다

```
yarn electron:build
```

배포를 하게 된다면 `/dist` 폴더에 `exe` 파일이 하나 생성됩니다.

그걸 바탕화면에서 설치하면 바로가기가 생성 되는데
배포된 일렉트론 프로그램이 생성된 위치는 `C:\Users\{사용자}\AppData\Local\Programs`입니다.

ps. 이 프로젝트는 윈도우 기반입니다.
