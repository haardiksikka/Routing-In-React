import React    from "react";
import template from "./BasePrice.jsx";

class BasePrice extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BasePrice;
