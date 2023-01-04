import { useEffect, useState } from "react";
import { PlayFunction } from "use-sound/dist/types";

import {
  MainContentWrapper,
  PageTitleText,
  SelectOptionContainer,
  SeletButtonsWrapper,
  SeletOption,
  StyledGachaHomeTemplate,
  TopContent
} from "./myGomemListTemplate.style";

import { BackButton, SelectButton } from "components/atoms";
import { GomemCard } from "components/molecules";
import { gomemClassList, gomemNameList, GomemNames } from "constant/gomem";

export const MyGomemListTemplate = ({
  userHaveGomemList,
  clickButton
}: {
  userHaveGomemList: {
    name: string;
    class: string;
    src: string;
    starCount: number;
    realName: string;
  }[];

  clickButton?: PlayFunction;
}) => {
  const [gomemList, setGomemList] = useState(userHaveGomemList);
  const [selectGomemName, setSelectGomemName] = useState("고멤");
  const [selectGomemClass, setSelectGomemClass] = useState("등급");
  const [showSelectNameOptions, setShowSelectNameOptions] = useState(false);
  const [showSelectClassOptions, setShowSelectClassOptions] = useState(false);

  useEffect(() => {
    if (selectGomemName !== "고멤" && selectGomemClass !== "등급") {
      setGomemList(
        userHaveGomemList.filter(
          (gomem) =>
            GomemNames[gomem.realName] === selectGomemName &&
            gomem.class === selectGomemClass
        )
      );
    } else {
      if (selectGomemName !== "고멤") {
        setGomemList(
          userHaveGomemList.filter((gomem) => {
            return GomemNames[gomem.realName] === selectGomemName;
          })
        );
        return;
      }
      if (selectGomemClass !== "등급") {
        setGomemList(
          userHaveGomemList.filter((gomem) => gomem.class === selectGomemClass)
        );
        return;
      }
      setGomemList(userHaveGomemList);
    }
  }, [selectGomemName, selectGomemClass, userHaveGomemList]);

  return (
    <StyledGachaHomeTemplate>
      <TopContent>
        <BackButton />
        <div style={{ width: 32 }} />
        <PageTitleText>내가 뽑은 고멤</PageTitleText>
      </TopContent>
      <SeletButtonsWrapper>
        <SelectButton
          title={selectGomemName}
          showChildren={showSelectNameOptions}
          onClickButton={() => {
            setShowSelectNameOptions((show) => !show);
            setShowSelectClassOptions(false);
            clickButton();
          }}
        >
          <SelectOptionContainer style={{ width: 515, height: 460 }}>
            {gomemNameList.map((name, idx) => (
              <SeletOption
                key={idx}
                onClick={() => {
                  setSelectGomemName(name);
                  setShowSelectNameOptions(false);
                  clickButton();
                }}
              >
                {name}
              </SeletOption>
            ))}
          </SelectOptionContainer>
        </SelectButton>
        <SelectButton
          title={selectGomemClass}
          showChildren={showSelectClassOptions}
          onClickButton={() => {
            setShowSelectClassOptions((show) => !show);
            setShowSelectNameOptions(false);
          }}
        >
          <SelectOptionContainer
            style={{ transform: "translateX(-50%)", left: "50%" }}
          >
            {gomemClassList.map((className, idx) => (
              <SeletOption
                key={idx}
                onClick={() => {
                  if (className === "?") {
                    setSelectGomemClass("hidden");
                  } else {
                    setSelectGomemClass(className);
                  }

                  setShowSelectClassOptions(false);
                }}
              >
                {className}
              </SeletOption>
            ))}
          </SelectOptionContainer>
        </SelectButton>
        <SelectButton
          title={"검색 초기화"}
          onClickButton={() => {
            setSelectGomemName("고멤");
            setSelectGomemClass("등급");
          }}
          showArrowButton={false}
        />
      </SeletButtonsWrapper>
      <MainContentWrapper>
        {userHaveGomemList &&
          gomemList
            .sort((a, b) => a.starCount - b.starCount)
            .map((gomem, idx) => (
              <GomemCard
                key={idx}
                name={gomem.name.replaceAll("_", " ")}
                gomemClass={gomem.class}
                imageSrc={gomem.src}
                starCount={gomem.starCount}
              />
            ))}
      </MainContentWrapper>
    </StyledGachaHomeTemplate>
  );
};
