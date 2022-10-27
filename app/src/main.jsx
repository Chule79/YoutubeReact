import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import NewMeme from "./pages/NewMeme";
import Video from "./pages/Video";
import Videos from "./pages/Videos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<Video />} />
          <Route path="newmeme" element={<NewMeme/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
