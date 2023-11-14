import Blog from "./components/Blog/Blog.jsx"
import Catalog from "./components/Catalog/Catalog.jsx"
import Footer from "./components/Header/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"



function App() {
  return (
    <>
      <Header />

      <div id="main-wrapper">
        <div className="5grid-layout">
          <Catalog />

          <Blog />
        </div>
      </div>

      <Footer />

    </>



  )
}

export default App
