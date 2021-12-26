import React, { FC } from "react";
import * as S from "./styles";

const RegisterArr = [
  { link: "/", title: "홈" },
  { link: "/atchecking", title: "출석체크" },
  { link: "/atchange", title: "출결변경" },
  { link: "/schedule", title: "일정관리" },
  { link: "/atcheck", title: "출석조회" },
  { link: "/template", title: "템플릿" },
];
const Header: FC = (): JSX.Element => {
  const checkLink = (index: number) => {
    const newURL = window.location.href;
    if (newURL.substr(21) === RegisterArr[index].link) {
      return <S.RegisterBotLine />;
    }
  };
  return (
    <S.Container>
      <S.RegisterContainer>
        {RegisterArr.map((header, i) => (
          <S.RegisterBox key={i}>
            <S.Register to={header.link}>{header.title}</S.Register>
            {checkLink(i)}
          </S.RegisterBox>
        ))}
      </S.RegisterContainer>
      <S.LogoutBtn>로그아웃</S.LogoutBtn>
    </S.Container>
  );
};

export default Header;
