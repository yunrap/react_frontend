import React, { useEffect, useState } from "react";
import axios from "axios";

const DocumentPage = () => {
  const [inboxList, setInboxList] = useState([]);

  const getInboxList = async () => {
    const params = { userId: "ghost01", take: 10, skip: 0 };

    const resp = await (
      await axios.get(`/api/document/archive`, { params })
    ).data;
    setInboxList(resp.data);
  };

  useEffect(() => {
    getInboxList();
  }, []);

  return (
    <>
      <div class="title">나의 문서 목록</div>
      <div class="container">
        <div class="container">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th colspan="5">INBOX - 내가 결제해야할 문서</th>
                </tr>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>사용자</th>
                  <th>승인여부</th>
                </tr>
              </thead>
              <tbody>
                {inboxList.map((data) => (
                  <>
                    <tr key={data.idx}>
                      <td>{data.documentNumber}</td>
                      <td>{data.title}</td>
                      <td>{data.content}</td>
                      <td>{data.userId}</td>
                      <td>{data.completeYn}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th colspan="5">OUTBOX - 내가 생성한 문서(결제진행중)</th>
                </tr>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>사용자</th>
                  <th>승인여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 2A</td>
                  <td>Item 2B</td>
                  <td>Item 2C</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th colspan="5">ARCHIVE - 내가 관여한문서(완료)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 3A</td>
                  <td>Item 3B</td>
                  <td>Item 3C</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default DocumentPage;
