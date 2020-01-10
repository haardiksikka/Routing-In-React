import "./RoadTax.css";
import React from "react";
import UtilCls from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-info">
     {
       UtilCls.calcRoadTax(this.props.q)
     }
    </div>
  );
};

export default template;
