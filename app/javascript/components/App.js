import React from "react"
import Header from "./components/Header"
const App = (props) => {
  return (
    <>
      <h1>Welcome to Aunty Says</h1>
      <Header {...props} />
    </>
  )
}

export default App