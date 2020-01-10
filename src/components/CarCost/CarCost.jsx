import "./CarCost.css";
import React from "react";
import {UtilCls} from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-success">
      {
        UtilCls.calcCarCost(this.props.t)
      }
    </div>
  );
};

export default template;
