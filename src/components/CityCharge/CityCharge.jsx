import "./CityCharge.css";
import React from "react";
import UtilCls from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-info">
      {
        UtilCls.calcCityCharge(this.props.s)
      }
    </div>
  );
};

export default template;
