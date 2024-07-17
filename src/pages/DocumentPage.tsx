import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import DataTable from "components/table/DataTable";
import { InboxProps } from "types/TableDataType";
import { ApprovalDetailProps } from "types/ResultDataType";
import { useNavigate } from "react-router-dom";

const DocumentPage = () => {
  const navigate = useNavigate();
  const [inboxList, setInboxList] = useState<InboxProps[]>();
  const [outboxList, setOutBoxList] = useState([]);
  const [approvalDt, setApprovalDt] = useState<ApprovalDetailProps[]>();
  const [id, setId] = useState(0);

  useEffect(() => {
    getInboxList();
  }, []);

  // 내가 결제를 해야할 Document조회
  const getInboxList = async () => {
    const params = { userId: "ghost01", take: 10, skip: 0 };

    const resp = await (
      await axios.get(`/api/document/archive`, { params })
    ).data;
    setInboxList(resp.data);
  };

  // 문서상세조회
  const handleDetail = useCallback(
    async (id: string) => {
      const params = { documentNumber: id };
      const resp = await (
        await axios.get(`/api/approval/detail`, { params })
      ).data;

      navigate(`${id}`, { state: { resp } });
    },
    [id]
  );

  const headers = [
    {
      text: "번호",
      value: "documentNumber",
    },
    {
      text: "제목",
      value: "title",
    },
    {
      text: "내용",
      value: "content",
    },
    {
      text: "사용자",
      value: "userId",
    },
    {
      text: "승인여부",
      value: "completeYn",
    },
  ];

  return (
    <>
      <div className="title">나의 문서 목록</div>
      <div className="container">
        <div className="table-container">
          INBOX - 내가 결제해야할 문서
          <DataTable
            headers={headers}
            items={inboxList}
            handleDetail={handleDetail}
          ></DataTable>
        </div>
        <div className="table-container">
          ARCHIVE - 내가 관여한문서(완료)
          <DataTable headers={headers} items={inboxList}></DataTable>
        </div>
        <div className="table-container">
          OUTBOX - 내가 생성한 문서(결제진행중)
          <DataTable headers={headers} items={inboxList}></DataTable>
        </div>
      </div>
    </>
  );
};
export default DocumentPage;
