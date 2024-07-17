import React, { Component } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import DocumentPage from "./pages/DocumentPage";
import DocumentDtPage from "./pages/DocumentDtPage";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/documentPage" element={<DocumentPage />} />
          <Route path="/documentPage/:id" element={<DocumentDtPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
