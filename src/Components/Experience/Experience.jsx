import React, { useContext, useEffect, useState } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(20);
  const [work, setWork] = useState(5);

  useEffect(() => {
    const interval = setInterval(updateValues, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateValues = () => {
    setYears(Math.floor(Math.random() * 0) + 1);
    setProjects(Math.floor(Math.random() * 10) + 1);
    setWork(Math.floor(Math.random() * 0) + 1);
  };

  return (
    <div className={`experience ${darkMode ? "dark" : ""}`} id="Experience">
      <div className="achievement">
        <div className="circle" id="yearsCircle">
          {years}+
        </div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" id="projectsCircle">
          {projects}+
        </div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" id="workCircle">
          {work}+
        </div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
