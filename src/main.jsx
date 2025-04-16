import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./Components/Home/Home";
import ShareStory from "./Components/Sharestory/ShareStory";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/share-story" element={<ShareStory></ShareStory>}></Route>
    </Routes>
  </BrowserRouter>
);