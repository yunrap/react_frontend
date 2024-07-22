import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import DataTable from "components/table/DataTable";
import { InboxProps } from "types/TableDataType";
import { ApprovalDetailProps } from "types/ResultDataType";
import { useNavigate } from "react-router-dom";

const DocumentPage = () => {
  const navigate = useNavigate();
  const [boxList, setBoxList] = useState({
    inboxList: [],
    archiveList: [],
    outboxList: [],
  });

  useEffect(() => {
    axios.all([getInboxList(), getArchiveList(), getOutboxList()]).then(
      axios.spread((res1, res2, res3) => {
        setBoxList({
          inboxList: res1.data.data,
          archiveList: res2.data.data,
          outboxList: res3.data.data,
        });
      })
    );
  }, []);

  const getInboxList = () => {
    return axios.get("/api/document/inbox", {
      params: { userId: "ghost01", take: 10, skip: 0 },
    });
  };

  const getOutboxList = () => {
    return axios.get("/api/document/outbox", {
      params: { userId: "ghost01", take: 10, skip: 0 },
    });
  };
  const getArchiveList = () => {
    return axios.get("/api/document/archive", {
      params: { userId: "ghost01", take: 10, skip: 0 },
    });
  };

  // 문서상세조회
  const handleDetail = async (id: string) => {
    console.log(id);
    const params = { documentNumber: id };
    const resp = await (
      await axios.get(`/api/approval/detail`, { params })
    ).data;

    navigate(`${id}`, { state: { resp } });
  };

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
            items={boxList.inboxList}
            handleDetail={handleDetail}
          ></DataTable>
        </div>
        <div className="table-container">
          ARCHIVE - 내가 관여한문서(완료)
          <DataTable
            headers={headers}
            items={boxList.archiveList}
            handleDetail={handleDetail}
          ></DataTable>
        </div>
        <div className="table-container">
          OUTBOX - 내가 생성한 문서(결제진행중)
          <DataTable
            headers={headers}
            items={boxList.outboxList}
            handleDetail={handleDetail}
          ></DataTable>
        </div>
      </div>
    </>
  );
};
export default DocumentPage;
