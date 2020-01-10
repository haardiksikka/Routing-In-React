import React    from "react";
import template from "./Dropdown.jsx";


class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selVal : "None",
      arr : ["a","b","c","d"]
    };
    this.onChg = this.onChg.bind(this);
  }
  onChg(e){
    this.setState({selVal : e.target.value})
  }
  render() {
    return template.call(this);
  }
}

export default Dropdown;
