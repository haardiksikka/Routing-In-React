import React    from "react";
import template from "./ApiCall.jsx";

class ApiCall extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then((a)=>a.json()).then((b)=> {
      this.setState({data : b})
    });
  }
  
  render() {
    return template.call(this);
  }
}

export default ApiCall;
