import React, { Component } from "react";
import { useEffect } from "react";
import axios from "axios";

const DocumentPage = () => {
  const params = { userId: "ghost01", take: 10, skip: 0 };

  useEffect(() => {
    axios
      .get(`/api/document/archive`, { params })

      .then((response) => console.log(response.data));
  }, []);

  return (
    <main>
      <section class="document-section">
        <h2>나의 문서 목록</h2>
        <ul class="document-list">
          <li class="document-item">
            <a href="document1.pdf" target="_blank">
              INBOX
            </a>
          </li>
          <li class="document-item">
            <a href="document2.pdf" target="_blank">
              OUTBOX
            </a>
          </li>
          <li class="document-item">
            <a href="document3.pdf" target="_blank">
              ARCHIVE
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default DocumentPage;
