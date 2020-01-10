import "./SqaureRoot.css";
import React from "react";
import UtilCls from '../../Utils/UtilCls.ts'

function template() {
  return (
    <div className="alert alert-danger">
      <p> {UtilCls.MyRoot(this.props.a)}</p>
    </div>
  );
};

export default template;
