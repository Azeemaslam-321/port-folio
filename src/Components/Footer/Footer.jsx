import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Envelope from "@iconscout/react-unicons/icons/uil-envelope";

import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>azeemaslam136@gmail.com</span> */}
        
        <div className="f-icons">
          <a href="https://instagram.com/official_azeem2001?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/azeem.aslam.754570?mibextid=ZbWKwL">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/Azeemaslam-321">
            <Github color="white" size="3rem" />
          </a>
          <a href="mailto:azeemaslam136@gmail.com">
            <Envelope color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

