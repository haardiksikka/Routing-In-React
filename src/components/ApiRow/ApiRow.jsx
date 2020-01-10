import "./ApiRow.css";
import React from "react";

function template() {
  return (
  
      <tr>
            <td> {this.props.a.id} </td>
            <td> {this.props.a.title} </td>
            <td> {this.props.a.userId} </td>
            <td> {String(this.props.a.completed)} </td>
        </tr>
    
  );
};

export default template;
