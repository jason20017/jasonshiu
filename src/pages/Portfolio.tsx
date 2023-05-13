import React, { useState } from "react";
import data from "../components/exp_data";
import Modal from "../components/port_Modal";
const Portfolio: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState<Array<string | undefined>>([]);
  const getData = (
    imgSrc: string | undefined,
    jobTitle: string,
    company: string,
    time: string,
    desc: string
  ) => {
    let tempData = [imgSrc, jobTitle, company, time, desc];
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

          <div className="port_Title">{item.jobTitle}</div>
          <div className="port_desc">{item.desc}</div>

          <button
            className="port_btn"
            onClick={() =>
              getData(
                item.imgSrc,
                item.jobTitle,
                item.company,
                item.time,
                item.desc
              )
            }
          >
            view detail
          </button>
        </div>
      ))}
      {modal === true ? (
        <Modal
          imgSrc={tempData[0]}
          jobTitle={tempData[1]}
          company={tempData[2]}
          time={tempData[3]}
          desc={tempData[4]}
          hide={() => setModal(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Portfolio;
