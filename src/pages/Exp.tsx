import React from "react";
import data from "../components/exp_data";
import BubbleEffect from "../components/bubbleEffect";

interface expProps {
  imgSrc: string | undefined;
  desc: string;
  src: string;
  jobTitle: string;
  company: string;
  hide?: boolean;
}

const Exp: React.FC<expProps> = () => {
  return (
    <div className="exp_container">
      <BubbleEffect />
      {data.card.map((item, index) => (
        <div className="exp_cardBox">
          <div className="exp_imgBox">
            <img src={item.imgSrc} className="exp_img" alt="" />
          </div>
          <div className="exp_textBox">
            <div className="exp_subTitleBox">
              <div className="exp_jobTitle">{item.jobTitle}</div>
              <div className="exp_company">{item.company}</div>
              <div className="exp_time">{item.time}</div>
            </div>
            <div className="exp_desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exp;
