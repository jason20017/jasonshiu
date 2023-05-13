import React from "react";
import data from "../components/home_data";
import { FaGithubSquare, FaMedium, FaLinkedin } from "react-icons/fa";
import BubbleEffect from "../components/bubbleEffect";
import FloatingElement from "../components/floatingElement";

interface homeProps {
  bubble?: string;
}

const Home: React.FC<homeProps> = () => {
  return (
    <div className="home_container">
      <BubbleEffect />
      {data.info.map((item, index) => (
        <>
          <div className="home_left">
            <img src={item.imgSrc} alt="head shot" />
            <div className="home_socialIcon">
              <a href={item.github} target="blank">
                <FaGithubSquare className="home_Icon git_icon" />
              </a>
              <a href={item.medium} target="blank">
                <FaMedium className="home_Icon med_icon" />
              </a>
              <a href={item.linkedin} target="blank">
                <FaLinkedin className="home_Icon lin_icon" />
              </a>
            </div>
            <div className="home_email">{item.email}</div>
          </div>
          <div className="home_right">
            <div className="info_box">
              <div className="info home_name">{item.name}</div>
              <div className="info home_title">{item.Title}</div>
              <div className="info home_desc_box">
                <div className="info home_desc">{item.desc1}</div>
                <div className="info home_desc">{item.desc2}</div>
                <div className="info home_desc">{item.desc3}</div>
              </div>
            </div>
            <FloatingElement />
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
