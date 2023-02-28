import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AuntyEdit from "./pages/AuntyEdit"
import AuntyIndex from "./pages/AuntyIndex"
import AuntyNew from "./pages/AuntyNew"
import AuntyShow from "./pages/AuntyShow"

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <h1>Welcome to Aunty Says</h1>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<AboutMe />} />
          <Route path="/edit" element={<AuntyEdit />} />
          <Route path="/index" element={<AuntyIndex />} />
          <Route path="/new" element={<AuntyNew />} />
          <Route path="/show" element={<AuntyShow />} />
          <Route path="/not" element={<NotFound />} />
        </Routes>
        <Footer {...props} />
      </BrowserRouter>
    </>
  )
}

export default App