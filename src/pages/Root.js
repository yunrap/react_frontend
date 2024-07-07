import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

class Root extends Component {
  render() {
    return (
      <div>
        {/* 앞으로 App는 Router라는 것을 설정 */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
