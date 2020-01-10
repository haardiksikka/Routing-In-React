import React    from "react";
import template from "./home.jsx";


class home extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {
      num : 0,
      carprice: 0,
    }
    this.onChange = this.onChange.bind(this); 
    this.onPriceChange = this.onPriceChange.bind(this)
  }
  onChange(e){
    this.setState({num : parseInt(e.target.value)})
  }
  onPriceChange(e){
    this.setState({carprice : parseInt(e.target.value)})
  }

  render() {
    return template.call(this);
  }
}

export default home;
