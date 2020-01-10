import "./Cube.css";
import React from "react";
import {UtilCls} from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-info">
      {UtilCls.MyCube(this.props.c)}
    </div>
  );
};

export default template;
