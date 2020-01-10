import React    from "react";
import template from "./projects.jsx";

class projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uname : '',
      pwd : ''
    }
    this.onCh1 = this.onCh1.bind(this);
    this.onCh2 = this.onCh2.bind(this);
    this.sendData = this.sendData.bind(this);
  }
  onCh1(e){
    this.setState({uname : e.target.value})
  }
  onCh2(e){
    this.setState({pwd: e.target.value})
  }
  sendData(){
    console.log("enetringggkllkklkloikgikglkhihihlhio")
    fetch('https://localhost:8080/ins'+
      this.state.uname + '/' +this.state.pwd).then((a)=>a.json()).then(b => console.log(b))
      this.preventDeafult()   
  }
  render() {
    return template.call(this);
  }
}

export default projects;
