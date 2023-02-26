import React from "react";
import { Carousel } from "antd";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
//import Iphone14Pro from "../../iPhone14/iPhone14Pro";

const video = require("./Videos/videoplayback.mp4");
const pic1 = require("../images/hero_iphone_14.jpg");
const pic2 = require("../images/hero_iphone_14_plus.jpg");

function HomeBody() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/iphone14pro");
  };
  
  return (
    <>
      <Navbar />
      <div id="homepage_container">
        <div id="home_start">
          <h1>iPhone 14 Pro</h1>
          <h4>Pro.Beyond.</h4>
          <button
            style={{
              border: "1px solid grey",
              color: "white",
              backgroundColor: "grey",
              borderRadius: "5px",
              paddingLeft: "1%",
              paddingRight: "1%",
              marginBottom: "1%",
            }}
          >
            With superfast 5G+
          </button>
          <div>
            <button onClick={handleclick}>Learn more &#62; </button>
            <button>Buy &#62;</button>
          </div>
          <img id="iphone_img"
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_medium.jpg"
            alt="Apple Phone"
          />
        </div>
        <div>
          <h1>iPhone 14 Pro</h1>
          <h4>Pro.Beyond.</h4>
          <button
            style={{
              border: "1px solid grey",
              color: "white",
              backgroundColor: "grey",
              borderRadius: "5px",
              paddingLeft: "1%",
              paddingRight: "1%",
              marginBottom: "1%",
            }}
          >
            With superfast 5G+
          </button>
          <div>
            <button>Learn more &#62; </button>
            <button>Buy &#62;</button>
          </div>
          <div>
            <img src={pic1} alt="error" />
            <img src={pic2} alt="error" />
          </div>
        </div>
        <video width="100%" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div id="mid_body_divs">
          <div style={{ backgroundColor: "black", color: "white" }}>
            <h2>MacBook Pro</h2>
            <h4>Supercharged by M2 Pro and M2 Max</h4>
            <div>
              <button>Learn more &#62; </button>
              <button>Buy &#62;</button>
            </div>
            <img
              src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_medium.jpg"
              alt="error"
            />
          </div>
          <div>
            <h2>WATCH ULTRA</h2>
            <h4>Adevnture awaits</h4>
            <div>
              <button>Learn more &#62; </button>
              <button>Buy &#62;</button>
            </div>
            <img
              src="https://www.apple.com/in/apple-watch-ultra/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_medium.jpg"
              alt="error"
            />
          </div>
          <div style={{ backgroundColor: "black", color: "white" }}>
            <h2>HomePod</h2>
            <h4>Profound Sound</h4>
            <div>
              <button>Learn more &#62; </button>
              <button>Buy &#62;</button>
            </div>
            <img
              src="https://www.apple.com/v/homepod-2nd-generation/a/images/overview/hero_homepod__f002zouobzyy_medium.jpg"
              alt="error"
            />
          </div>
          <div style={{ backgroundColor: "black", color: "white" }}>
            <h2>iPad Pro</h2>
            <h4>Supercharged by M2</h4>
            <div>
              <button>Learn more &#62; </button>
              <button>Buy &#62;</button>
            </div>
            <img
              src="https://www.apple.com/v/ipad-pro/al/images/overview/chip/performance_hero__cxya4f2p5euu_medium.jpg"
              alt="error"
            />
          </div>
          <div>
            <h2>WATCH Series 6</h2>
            <h4>A healthy leap ahead.</h4>
            <div>
              <button>Learn more &#62; </button>
              <button>Buy &#62;</button>
            </div>
            <img
              src="https://www.apple.com/in/apple-watch-series-8/images/overview/health/health_hero__dvilvmsurp26_medium.jpg"
              alt="error"
            />
          </div>
          <div>
            <h2>iPad</h2>
            <h4>Lovable. Drawable. Magical.</h4>
            <div>
              <button>Learn more &#62; </button>
              <button>Buy &#62;</button>
            </div>
            <img
              src="https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_medium.jpg"
              alt="error"
            />
          </div>
        </div>
        <div id="home_carousal_images">
          <Carousel autoplay>
            <div>
              <img
                src="https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2021/10/04/213854_1351804.jpg.1500x843_q95_crop-smart_upscale.jpg"
                alt="error"
              />
            </div>
            <div>
              <img
                src="https://i.ytimg.com/vi/Y7H6EtsaJW8/maxresdefault.jpg"
                alt="error"
              />
            </div>
            <div>
              <img
                src="https://i.ytimg.com/vi/XQfeoRLvfqU/maxresdefault.jpg"
                alt="error"
              />
            </div>
            <div>
              <img
                src="https://media.wired.com/photos/62a134a965b340420449b4ac/master/w_2560%2Cc_limit/For-All-Mankind-Best-Sci-Fi-of-Era-Culture.jpg"
                alt="error"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeBody;
