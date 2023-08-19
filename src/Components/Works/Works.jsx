import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
        I take pride in my proven track record of consistently delivering exceptional work for a diverse range of brands and clients,
       
          <br /> including prominent names like Sidzifi and ESD. My adaptability and creative expertise  
          <br />allow me to seamlessly tailor my services to meet the unique needs of each client,
          <br />
          regardless of their industry or scale. From collaborating with established brands to assisting emerging clients
          <br />
          I bring the same level of dedication, professionalism, and outstanding results to every project I undertake.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-maincircle"
        >
          <div className="w-secircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
    </div>
  );
};

export default Works;
