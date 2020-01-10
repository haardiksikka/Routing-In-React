import "./Dropdown.css";
import React from "react";

function template() {
  return (
    <div className="dropdown">
      <h1>Dropdown</h1>
      <select onChange = {this.onChg} className="list list-simple">
        {
          this.state.arr.map(a=> <MyOpt key={a} p ={a} />)
        }
      </select>
      <br/>
      <br/>
          <button className="btn btn-info"> you selected: {this.state.selVal} </button>
    </div>
  );
};
class MyOpt extends React.Component{
  render(){
    return (
      <option value={this.props.p}> {this.props.p} </option>
    )
  }
}
export default template;
