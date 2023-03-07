// 리다이렉트 화면
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../assets/Spinner1.gif";

const RedirectURI = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드로 코드값을 넘겨주는 로직
    // 요청 성공 코드값
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    // 요청이 성공하면 navigate('/main')
  });

  return (
    <Wrap>
      {/* 로그인중이라는 것을 표시할 수 있는 로딩중 화면 */}
      <img src={Spinner} alt="로딩" width="10%" />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

export default RedirectURI;
