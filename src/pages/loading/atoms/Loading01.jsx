import React from "react";
import Spinner from "../../../assets/Spinner1.gif";

// gif 파일 사용
const Loading01 = () => {
  return (
    <div>
      <h3>잠시만 기다려주세요.</h3>
      <img src={Spinner} alt="로딩" width="10%" />
    </div>
  );
};

export default Loading01;
