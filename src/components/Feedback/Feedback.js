import React, { useEffect } from "react";
import * as classes from "./Feedback.module.css";

import PropTypes from "prop-types";

const Feedback = (props) => {
  useEffect(() => {
    const unmountTimeout = setTimeout(() => {
      props.unmountMe();
    }, 2000);

    return () => clearTimeout(unmountTimeout);
  }, []);

  let styleClasses;

  if (props.show) {
    styleClasses = [classes.Feedback, classes.Visible];
  } else {
    styleClasses = [classes.Feedback];
  }

  if (props.type === "success") {
    styleClasses.push(classes.Success);
  } else if (props.type === "danger") {
    styleClasses.push(classes.Danger);
  }

  return (
    <div className={styleClasses.join(" ")}>
      <p>{props.message}</p>
    </div>
  );
};
export default Feedback;

Feedback.propTypes = {
  unmountMe: PropTypes.func,
  show: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string,
};
