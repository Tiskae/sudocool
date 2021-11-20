import React from "react";
import * as classes from "./Layout.module.css";
import bgVideoMp4 from "../../assets/video.mp4";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <div className={classes.BgVideo}>
        <video autoPlay={true} loop muted src={bgVideoMp4}></video>
      </div>
      {props.children}
    </div>
  );
};
export default Layout;
