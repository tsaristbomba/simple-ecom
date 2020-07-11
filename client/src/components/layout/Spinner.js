import React, { Fragment } from "react";
import spinner from "../../img/spinner.gif";

export default function () {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "50px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
}