import { MyGomemListTemplate } from "components/templates";

export const MyGomemPage = () => {
  // 객체 배열이므로 두번 parse 해 주어야 배열안에 객체들이 string 에서 객체로 잘 변환되어 나옴
  const userHaveGomemList = JSON.parse(
    `[${JSON.parse(window.localStorage.getItem("userHaveGomemList")) || ``}]`
  );

  return <MyGomemListTemplate userHaveGomemList={userHaveGomemList} />;
};
