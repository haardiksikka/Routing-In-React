import "./Sqaure.css";
import React from "react";
import UtilsCls from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-warning">
      <p>{UtilsCls.MyPow(this.props.b)}</p>
    </div>
  );
};

export default template;
