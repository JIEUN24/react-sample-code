import React from "react";
import { SyncLoader } from "react-spinners";

// react spinners 사용

const Loading02 = () => {
  return (
    <div>
      <h3 style={{ marginBottom: "40px" }}>잠시만 기다려주세요.</h3>
      <SyncLoader />
    </div>
  );
};

export default Loading02;
