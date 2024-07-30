import { useLocation } from "react-router-dom";
import { ApprovalDetailProps } from "types/ResultDataType";

const DocumentDtPage = () => {
  const { state } = useLocation(); // 2번 라인
  const { data } = state.resp;

  return (
    <>
    <div className="title">문서 상세 보기</div>
    <div className="container">
      <div className="table-container">
        <div className="table-title">결제라인</div>
        <div className="payment-process">
          {data.map((dt : ApprovalDetailProps, index : number) => (
            <>
             <div className="step">
             <div className="box">승인자 : {dt.approvalUserId} <br/> 승인상태 : {dt.approvalYn}</div>
         </div>
              {data.length-1 !== index ? <div className="arrow"></div> : null} 
            </>
          ))}
        </div>
      </div>
      <div className="table-container">
        <div className="table-title">문서내용</div>
        <div className="header">
          <h1>제목 : {data[0].title}</h1>
          <div className="meta">
            작성자 : {data[0].userId} | 작성일: 2024년 7월 17일
          </div>
        </div>
        <div className="content">내용 : {data[0].content}</div>
      </div>
    </div>
    </>
  );
};

export default DocumentDtPage;
