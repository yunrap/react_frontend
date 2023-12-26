import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/test")
      .then((res) => res.text())
      .then((m) => setMessage(m));
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
    <div className="App">
      <header className="App- header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {message} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
