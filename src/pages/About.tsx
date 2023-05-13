import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import data from "../components/about_data";
import BubbleEffect from "../components/bubbleEffect";

interface aboutProps {
  id?: number;
  items?: string;
  imgSrc?: string | undefined;
  desc?: string;
  src?: string;
}

const About: React.FC<aboutProps> = () => {
  const [imageId, setImageId] = useState(0);

  const prev = () => {
    setImageId(imageId > 0 ? imageId - 1 : data.items.length - 1);
  };
  const next = () => {
    setImageId(data.items.length - 1 > imageId ? imageId + 1 : 0);
  };
  const selectShow = (id: React.SetStateAction<number>) => {
    setImageId(id);
  };

  return (
    <div className="about_container">
      <BubbleEffect />
      <div className="about_mainBox">
        {data.items.map((item, index) => (
          <>
            <div className="about_photoBox">
              <img
                className={`about_imageBox ${
                  imageId === index ? "about_imageBox-active" : ""
                }`} //利用改變className 來操作圖片的opacity，將目前輪到圖片的id 若等於按鍵點到的imageId的話，就讓該圖片opcaity = 1 其他沒被點到的 opcaity = 0
                src={item.imgSrc}
                alt={item.desc}
              />
              <div className="about_borderBox"></div>
            </div>
            <div className="about_descBox">
              <div
                className={`about_desc ${
                  imageId === index ? "about_desc-active" : ""
                }`}
              >
                <div className="about_desc_title">{item.title}</div>
                <div className="about_desc_content">{item.desc}</div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="about_arrowBox">
        <FontAwesomeIcon
          onClick={prev}
          icon={faCircleArrowLeft}
          className="arrowIcon"
        />
        <div className="about_dots">
          {data.items.map((item, index) => (
            <div
              className={`about_dot ${
                imageId === index ? "about_dot-active" : ""
              }`}
              onClick={() => {
                selectShow(index);
              }}
            ></div>
          ))}
        </div>
        <FontAwesomeIcon
          onClick={next}
          icon={faCircleArrowRight}
          className="arrowIcon"
        />
      </div>
    </div>
  );
};

export default About;
