import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const floatingElement: React.FC = () => {
  return (
    <div className="floating">
      <div className="floatIcon js ">
        <SiJavascript />
      </div>
      <div className="floatIcon ts">
        <SiTypescript />
      </div>
      <div className="floatIcon react">
        <SiReact />
      </div>
      <div className="floatIcon node">
        <FaNode />
      </div>
      <div className="floatIcon sql">
        <SiMysql />
      </div>
      <div className="floatIcon mongo">
        <SiMongodb />
      </div>
    </div>
  );
};

export default floatingElement;
