import DescriptionCard from "./subcomponents/description_card.jsx";
import NftCard from "./subcomponents/ntf_card.jsx";
import { useState, useEffect } from "react";
import * as nftService from "../../services/nftService.js";
import * as dataService from "../../services/dataService.js";
import "../main-page/mainp.css";
import BlogPost from "./subcomponents/main_blog_post.jsx";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [blogPost, setBlogPost] = useState([]);
  const [fronText, setFrontText] = useState([]);

  const getData = async () => {
    try {
      const response = await nftService.getAll();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // let firstThree = Array.from({ length: 3 }, (_, i) => data[i]);
  const firstElemensts = data.filter((item, index) => index < 3);

  const getBlogPosts = async () => {
    try {
      const response = await dataService.getAllBlogPosts();
      setBlogPost(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getBlogPosts();
  }, []);

  const getFrontText = async () => {
    try {
      const response = await dataService.getFrontText();
      setFrontText(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getFrontText();
  }, []);

  return (
    <div className="row">
      <div className="12u">
        <section id="banner">
          <a href="#">
            <span className="image image-full">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <header>
              <h2>Howdy. This is Dopetrope.</h2>
              <span className="byline">
                Welcome to the Dopetrope NFT world!
              </span>
            </header>
          </a>
        </section>
        <section id="intro">
          <div className="5grid">
            <div className="row">
              {
                /* {[
                {
                  title: "Purpose",
                  description:
                    "The aim of the DopeTrope NTF world is to share the newest NFT pieces. You can find the information about the price and the release date so you can prepare to deep-dive into this NTF world and invest in unique art pieces.",
                  iconClass: "icon64 icon64-1",
                  badgeClass: "pennant",
                },
                {
                  title: "Find your piece(s)",
                  description:
                    "We have a large collection of art NTF pieces from which you can choose the one that is most aligned to your personality.",
                  iconClass: "icon64 icon64-2",
                  badgeClass: "pennant pennant-alt",
                },
                {
                  title: "Share your art",
                  description:
                    "You have the opportunity to share your art - you need only to log into your account and create a new post which will be added to our catalog.",
                  iconClass: "icon64 icon64-3",
                  badgeClass: "pennant pennant-alt2",
                },] */
                fronText.map((item) => (
                  <DescriptionCard
                    key={item._id}
                    title={item.title}
                    badgeClass={item.badgeClass}
                    iconClass={item.iconClass}
                    description={item.description}
                  />
                ))
              }
            </div>
            <div className="actions">
              <a href="/nfts" className="button button-big">
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section>
          <header className="major">
            <h2>Catalog</h2>
          </header>
          <div className="5grid">
            <div className="row">
              {firstElemensts.map((item) => (
                <NftCard
                  key={item._id}
                  title={item.title}
                  description={`${item.description.slice(0, 100)}...`}
                  img={item.img}
                  _id={item._id}
                />
              ))}
            </div>
          </div>
        </section>
        <section>
          <header className="major">
            <h2>The Blog</h2>
          </header>
          <div className="5grid">
            <div className="row">
              {blogPost.map((post) => (
                <BlogPost
                  key={post._id}
                  img={post.img}
                  title={post.title}
                  text={`${post.text.slice(0, 100)}...`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
