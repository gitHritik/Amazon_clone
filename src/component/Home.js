// import { PersonAddAlt1 } from "@mui/icons-material";
import React from "react";
import bgImage from "../Images/bg2.jpg";
import "./Home.css";
import Product from "./Product";
import P1 from "../Images/P1.jpg";
import P2 from "../Images/P2.jpg";
import P3 from "../Images/P3.jpg";
import P4 from "../Images/P4.jpg";
import P5 from "../Images/P5.jpg";
import P6 from "../Images/P6.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_Image" src={bgImage} alt="" />

        <div className="home_raw">
          <Product
            id="12324"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={521}
            rating={5}
            image={P1}
          />
          <Product
            id="234234"
            title="kenwood kmixKenwood KMX750BK/ KMix Stand Mixer 1000W (Black)"
            price={44995}
            rating={4}
            image={P2}
          />
        </div>
        <div className="home_raw">
          <Product
            id="738847374"
            title="Samsung Gear Fit2 Pro Smart Fitness Band (Small), Liquid Black, SM-R365NZKNXAR"
            price={3000}
            rating={4}
            image={P3}
          />
          <Product
            id="12324"
            title="Amazon EchoEcho Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={3499}
            rating={5}
            image={P4}
          />
          <Product
            id="123343224"
            title="2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 256GB) - Space Grey (9th Generation)"
            price={44900}
            rating={4}
            image={P5}
          />
        </div>
        <div className="home_raw">
          <Product
            id="45748587323433"
            title="Samsung 125 cm (50 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA50AUE70AKLXL (Black) (2021 Model)"
            price={52990}
            rating={5}
            image={P6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
