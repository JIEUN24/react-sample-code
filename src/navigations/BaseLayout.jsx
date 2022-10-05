import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/main'
import Table from '../pages/table'
import NotFound from '../pages/notFound'
import Javascript from '../pages/javascript'
import ScrollToTop from '../components/ScrollToTop'

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/table" exact element={<Table />} />
        <Route path="/js" exact element={<Javascript />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseLayout