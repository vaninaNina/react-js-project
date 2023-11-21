import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/auth-context.jsx";

import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Blog from "./components/Blog/Blog.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/Login.jsx";
import MainPage from "./components/main-page/MainPage.jsx";
import Register from "./components/register/Register.jsx";
import Create from "./components/createNft/Create.jsx";
import { useState } from "react";

function App() {
  //this should be removed from here
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };
  //

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <Header />
      <div id="main-wrapper">
        <div className="5grid-layout">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
