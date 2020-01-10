import "./ServiceTax.css";
import React from "react";
import UtilCls from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-info">
      {
        UtilCls.calcServiceTax(this.props.r)
      }
    </div>
  );
};

export default template;
