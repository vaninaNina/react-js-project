import Main from "./components/main/Main.jsx"

import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Header />

      {/* <Routes>
        <Route path='/blog' element={} ></Route>
      </Routes> */}

      <div id="main-wrapper">
        <div className="5grid-layout">
    
          <Main />
        </div>
      </div>

      <Footer />

    </>



  )
}

export default App
