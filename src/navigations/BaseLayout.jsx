import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import Table from "../pages/table";
import NotFound from "../pages/notFound";
import Javascript from "../pages/javascript";
import Chart from "../pages/chart";
import ScrollToTop from "../components/ScrollToTop";
import Local from "../pages/localStorage";
import Loading from "../pages/loading";

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/table" exact element={<Table />} />
        <Route path="/js" exact element={<Javascript />} />
        <Route path="/local" exact element={<Local />} />
        <Route path="/chart" exact element={<Chart />} />
        <Route path="/chart/:kind" exact element={<Chart />} />
        <Route path="/loading" exact element={<Loading />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
