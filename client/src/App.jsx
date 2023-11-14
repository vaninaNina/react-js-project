import Main from "./components/main/Main.jsx"
import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import { Routes, Route } from "react-router-dom"
import Catalog from "./components/Catalog/Catalog.jsx"
import Blog from "./components/Blog/Blog.jsx"
import About from "./components/about/About.jsx"
import Login from "./components/login/Login.jsx"
import Signin from "./components/register/Signin.jsx"


function App() {
  return (
    <>
      <Header />
      <div id="main-wrapper">
        <div className="5grid-layout">
        <Routes>
          <Route path='/' element={ <Main />} ></Route>
          <Route path='/catalog' element={ <Catalog />}></Route>
          <Route path='/blog' element={ <Blog />}></Route>
          <Route path='/about' element={ <About />}></Route>
          <Route path='/login' element={ <Login />}></Route>
          <Route path='/register' element={ <Signin />}></Route>
        </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
