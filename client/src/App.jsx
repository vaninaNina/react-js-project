import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";

import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/Login.jsx";
import MainPage from "./components/main-page/MainPage.jsx";
import Register from "./components/register/Register.jsx";
import Post from "./components/post/Post.jsx";
import EditBlogPost from "./components/editBlogPost/EditBlogPost.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import AuthGuard from "./components/guards/AuthGuard.jsx";
import MyProfile from "./components/myProfile/MyProfile.jsx";
import FullBlogPost from "./components/blog/subcomponents/fullBlogPost.jsx";
import Blog from "./components/blog/Blog.jsx";
import CreateBlogPost from "./components/createBlogPost/Create.jsx";

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
              <Route path="/blogPost" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post/:postId" element={<Post />} />
              <Route path="/blogPost/:blogPostId" element={<FullBlogPost />} />

              <Route element={<AuthGuard />}>
                <Route path="/profile" element={<MyProfile />} />
                <Route path="/create" element={<CreateBlogPost />} />
                <Route
                  path="/blogPost/:blogPostId/edit"
                  element={<EditBlogPost />}
                />
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
