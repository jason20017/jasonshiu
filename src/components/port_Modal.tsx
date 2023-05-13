import React, { MouseEventHandler } from "react";
import { GrClose } from "react-icons/gr";
interface portProps {
  hide: MouseEventHandler<HTMLButtonElement> | undefined; //mouseEventHandler 待會去查
  id?: number;
  items?: string;
  imgSrc?: string | undefined;
  desc?: string;
  src?: string;
  jobTitle?: string;
  company?: string;
  time?: string;
}

const port_Modal: React.FC<portProps> = (props) => {
  return (
    <div className="modal_container">
      <div className="modal">
        <div className="modal_left">
          <img src={props.imgSrc} className="modal_img" alt="" />
        </div>
        <div className="modal_right">
          <div className="modal_company">{props.company}</div>
          <div className="modal_jobTitle">{props.jobTitle}</div>
          <div className="modal_desc">{props.desc}</div>
        </div>

        <button type="button" className="modal_close" onClick={props.hide}>
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default port_Modal;
