import React from "react";

import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Azeem Aslam</span>
          <span>
            {" "}
          Innovative web Developer | 

Welcome to the my portfolio, a passionate web developer who thrives on turning complex problems into elegant, functional solutions through the power of code. With a solid foundation in multiple programming languages and a knack for creative problem-solving, Emily's portfolio is a testament to her dedication to building impactful applications and pushing the boundaries of what technology can achieve.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
  <a href="https://github.com/Azeemaslam-321">
    <img src={require('../../img/github.png')} alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/azeem-aslam-a92967207">
    <img src={require('../../img/linkedin.png')} alt="LinkedIn" />
  </a>
  <a href="https://instagram.com/official_azeem2001?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
    <img src={require('../../img/instagram.png')} alt="Instagram" />
  </a>
</div>

      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Devloper" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/*blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
