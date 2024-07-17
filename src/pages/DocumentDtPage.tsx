import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DocumentDtPage = () => {
  const { state } = useLocation(); // 2번 라인
  const { data } = state.resp;

  console.log(data);
  return (
    <div className="title">
      문서 상세 보기
      <div className="container">
        <div className="header">
          <h1>{data[0].title}</h1>
          <div className="meta">
            작성자: {data[0].userId} | 작성일: 2024년 7월 17일
          </div>
        </div>
        <div className="content">{data[0].content}</div>
      </div>
    </div>
  );
};

export default DocumentDtPage;
