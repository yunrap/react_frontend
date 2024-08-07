import React from "react";
import styled from "styled-components";

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트이다.

const AuthTemplateBlock = styled.div``;

const AuthTemplate = ({ children }: any) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
