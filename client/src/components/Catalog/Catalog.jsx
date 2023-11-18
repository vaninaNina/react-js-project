import NftCard from "../main-page/subcomponents/ntf_card.jsx";
import "../../components/catalog/catalog-style.css";
const Catalog = () => {
  return (
    <div className="row">
      <div className="12u">
        <section>
          <div className="5grid">
            <div className="row">
              <div className="8u mobileUI-main-content">
                <section className="catalog">
                  <header className="major">
                    <h2>Catalog</h2>
                  </header>
                  <div className="5grid">
                    <div className="new-row">
                      {[
                        {
                          title: "Sed etiam lorem nulla",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic03.jpg",
                        },
                        {
                          title: "Consequat et tempus",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic04.jpg",
                        },
                        {
                          title: "Dolore nisl feugiat",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic07.jpg",
                        },
                        {
                          title: "Tatata",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic01.jpg",
                        },
                        {
                          title: "ghhghgh",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic02.jpg",
                        },
                        {
                          title: "art",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic05.jpg",
                        },
                        {
                          title: "gasha",
                          description:
                            "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                          image: "images/pic06.jpg",
                        },
                      ].map((item) => (
                        <NftCard
                          key={item.title}
                          title={item.title}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </div>
                </section>
                {/*<article className="box is-post">
                  <a href="#" className="image image-full">
                    <img src="images/pic01.jpg" alt="" />
                  </a>
                   <header>
                    <h2>Right sidebar</h2>
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
                  <p>
                    Praesent a dolor leo. Duis in felis in tortor lobortis
                    volutpat et pretium tellus. Vestibulum ac ante nisl, a
                    elementum odio. Duis semper risus et lectus commodo
                    fringilla. Maecenas sagittis convallis justo vel mattis.
                    placerat, nunc diam iaculis massa, et aliquet nibh leo non
                    nisl vitae porta lobortis, enim neque fringilla nunc, eget
                    faucibus lacus sem quis nunc suspendisse nec lectus sit amet
                    augue rutrum vulputate ut ut mi. Aenean elementum, mi sit
                    amet porttitor lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet nullam consequat
                    feugiat dolore tempus.
                  </p>
                  <section>
                    <header>
                      <h3>Something else</h3>
                    </header>
                    <p>
                      Elementum odio duis semper risus et lectus commodo
                      fringilla. Maecenas sagittis convallis justo vel mattis.
                      placerat, nunc diam iaculis massa, et aliquet nibh leo non
                      nisl vitae porta lobortis, enim neque fringilla nunc, eget
                      faucibus lacus sem quis nunc suspendisse nec lectus sit
                      amet augue rutrum vulputate ut ut mi. Aenean elementum, mi
                      sit amet porttitor lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Lorem ipsum dolor sit amet nullam
                      consequat feugiat dolore tempus.
                    </p>
                    <p>
                      Nunc diam iaculis massa, et aliquet nibh leo non nisl
                      vitae porta lobortis, enim neque fringilla nunc, eget
                      faucibus lacus sem quis nunc suspendisse nec lectus sit
                      amet augue rutrum vulputate ut ut mi. Aenean elementum, mi
                      sit amet porttitor lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Lorem ipsum dolor sit amet nullam
                      consequat feugiat dolore tempus.
                    </p>
                  </section>
                  <section>
                    <header>
                      <h3>So in conclusion ...</h3>
                    </header>
                    <p>
                      Nunc diam iaculis massa, et aliquet nibh leo non nisl
                      vitae porta lobortis, enim neque fringilla nunc, eget
                      faucibus lacus sem quis nunc suspendisse nec lectus sit
                      amet augue rutrum vulputate ut ut mi. Aenean elementum, mi
                      sit amet porttitor lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Lorem ipsum dolor sit amet nullam
                      consequat feugiat dolore tempus. Elementum odio duis
                      semper risus et lectus commodo fringilla. Maecenas
                      sagittis convallis justo vel mattis.
                    </p>
  </section> 
                </article>
             
              </div>
              <div className="4u">
                <section className="box">
                  <a href="#" className="image image-full">
                    <img src="images/pic09.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Sed etiam lorem nulla</h3>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                    consequat veroeros lorem blandit adipiscing et feugiat
                    phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <footer>
                    <a href="#" className="button button-alt">
                      Magna sed taciti
                    </a>
                  </footer>
                </section>
                <section className="box">
                  <header>
                    <h3>Feugiat consequat</h3>
                  </header>
                  <p>
                    Veroeros sed amet blandit consequat veroeros lorem blandit
                    adipiscing et feugiat sed lorem consequat feugiat lorem
                    dolore.
                  </p>
                </section> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalog;
