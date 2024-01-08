import "./App.css";
import Home from './home.js';
import Test from './test.js';
import { BrowserRouter, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("/test")
      .then((res) => res.text())
  }, []);

  useEffect(() => {
    fetch("/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userName: "홍길동",
        pwd: "1234",
      }),
    })
      .then((res) => res.json())
      .then((token) => {
        localStorage.setItem("jwt", token.accessToken);
        // alert("로그인 되었습니다");
      });
  }, []);

  return (
      <div className='App'>
        <BrowserRouter>
          <Routes path="/" component={Home} />
          <Routes path="/test" component={Test} />
        </BrowserRouter>
      </div>
  );
}

export default App;
