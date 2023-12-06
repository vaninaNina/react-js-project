import NftCard from "../main-page/subcomponents/ntf_card.jsx";
import "../../components/catalog/catalog-style.css";
import { useState, useEffect } from "react";
import * as nftService from "../../services/nftService.js";

const Catalog = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await nftService.getAll();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      <div className="12u">
        <section>
          <div className="5grid">
            <div className="row">
              <div>
                {/* /*className="8u mobileUI-main-content" */}
                <section className="catalog">
                  <header className="major">
                    <h2>Catalog</h2>
                  </header>
                  <div className="5grid">
                    <div className="new-row" style={{ height: "600px" }}>
                      {data.map((item) => (
                        <NftCard
                          key={item._id}
                          _id={item._id}
                          title={item.title}
                          description={`${item.description.slice(0, 100)}...`}
                          img={item.imageUrl}
                          author_name={item.author_name}
                          floor_price={item.floor_price}
                          _ownerId={item._ownerId}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalog;
