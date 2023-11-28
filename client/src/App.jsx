import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";

import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Blog from "./components/Blog/Blog.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/Login.jsx";
import MainPage from "./components/main-page/MainPage.jsx";
import Register from "./components/register/Register.jsx";
import Create from "./components/createNft/Create.jsx";
import Post from "./components/post/Post.jsx";
import EditPost from "./components/editNft/EditPost.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import AuthGuard from "./components/guards/AuthGuard.jsx";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Header />
        <div id="main-wrapper">
          <div className="5grid-layout">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/nfts" element={<Catalog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post/:postId" element={<Post />} />

              <Route element={<AuthGuard />}>
                <Route path="/create" element={<Create />} />
                <Route path="/post/:postId/edit" element={<EditPost />} />
              </Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
