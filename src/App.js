import "./App.css";
import Home from "./home.js";
import Test from "./pages/test.js";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "./pages/LoginPage";

function App() {
  useEffect(() => {
    fetch("/test").then((res) => res.text());
  }, []);

  // useEffect(() => {
  //   fetch("/login", {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userName: "홍길동",
  //       pwd: "1234",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((token) => {
  //       localStorage.setItem("jwt", token.accessToken);
  //       alert("로그인 되었습니다");
  //     });
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
