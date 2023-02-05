import React from "react";
import * as classes from "./AuthorInfo.module.css";

const AuthorInfo = () => {
  return (
    <div className={classes.AuthorInfo}>
      <p className={classes.AuthorText}>
        Built by{" "}
        <a
          className={classes.AuthorLink}
          rel="noreferrer"
          target="_blank"
          href="https://tiskae.tech"
        >
          Ibrahim Adedokun
        </a>
      </p>
    </div>
  );
};
export default AuthorInfo;
