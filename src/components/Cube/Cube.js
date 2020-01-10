import React    from "react";
import template from "./Cube.jsx";
import {UtilCls} from '../../Utils/UtilCls.ts'

class Cube extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Cube;
