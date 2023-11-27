import "../../components/blog/blogstyle.css";

const Blog = () => {
  return (
    <div className="row">
      <div className="12u">
        <section>
          <div className="5grid">
            <div className="row">
              <div className="8u mobileUI-main-content">
                <article className="box is-post">
                  <a href="#" className="image image-full">
                    <img src="images/pic02.jpg" alt="" />
                  </a>
                  <header>
                    <h2>Article 1</h2>
                    <span className="byline">
                      Lorem ipsum dolor sit amet feugiat
                    </span>
                  </header>
                  <p>
                    Vestibulum scelerisque ultricies libero id hendrerit.
                    Vivamus malesuada quam faucibus ante dignissim auctor
                    hendrerit libero placerat. Nulla facilisi. Proin aliquam
                    felis non arcu molestie at accumsan turpis commodo. Proin
                    elementum, nibh non egestas sodales, augue quam aliquet est,
                    id egestas diam justo adipiscing ante. Pellentesque tempus
                    nulla non urna eleifend ut ultrices nisi faucibus.
                  </p>
                  <span>
                    <a href="#" className="button button-alt">
                      Comment
                    </a>
                  </span>
                  {/* <span>
                    <a href="#" className="button button-like">
                      Like
                    </a>
                  </span> */}
                </article>
              </div>
              <div className="8u mobileUI-main-content">
                <article className="box is-post">
                  <a href="#" className="image image-full">
                    <img src="images/pic03.jpg" alt="" />
                  </a>
                  <header>
                    <h2>Article 2</h2>
                    <span className="byline">
                      Lorem ipsum dolor sit amet feugiat
                    </span>
                  </header>
                  <p>
                    Vestibulum scelerisque ultricies libero id hendrerit.
                    Vivamus malesuada quam faucibus ante dignissim auctor
                    hendrerit libero placerat. Nulla facilisi. Proin aliquam
                    felis non arcu molestie at accumsan turpis commodo. Proin
                    elementum, nibh non egestas sodales, augue quam aliquet est,
                    id egestas diam justo adipiscing ante. Pellentesque tempus
                    nulla non urna eleifend ut ultrices nisi faucibus.
                  </p>

                  <span>
                    <a href="#" className="button button-alt">
                      Comment
                    </a>
                  </span>
                  {/* <span>
                    <a href="#" className="button button-like">
                      Like
                    </a>
                  </span> */}
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
