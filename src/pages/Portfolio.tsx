import React, { useState } from "react";
import data from "../components/portfolioData";
import Modal from "../components/port_Modal";
const Portfolio: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState<Array<string | undefined>>([]);
  const getData = (
    imgSrc: string | undefined,
    projectTitle: string,
    date: string,
    desc: string
  ) => {
    let tempData = [imgSrc, projectTitle, date, desc];
    setTempData(tempData);
    return setModal(true);
  };
  return (
    <div className={`port_container ${modal ? "true" : "false"}`}>
      {data.card.map((item, _index) => (
        <div className="port_cardBox">
          <div className="port_imgBox">
            <img src={item.imgSrc} className="port_img" alt="" />
          </div>

          <div className="port_Title">{item.projectTitle}</div>
          <div className="port_desc">{item.desc}</div>

          <button
            className="port_btn"
            onClick={() =>
              getData(item.imgSrc, item.projectTitle, item.date, item.desc)
            }
          >
            view detail
          </button>
        </div>
      ))}
      {modal === true ? (
        <Modal
          imgSrc={tempData[0]}
          projectTitle={tempData[1]}
          date={tempData[2]}
          desc={tempData[3]}
          hide={() => setModal(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Portfolio;
