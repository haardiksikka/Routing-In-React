import "./ApiCall.css";
import React from "react";
import ApiRow from '../ApiRow/ApiRow'

function template() {
  return (
    <div className="api-call">
      <h1>Get Api Call Demo</h1>
      <br/>
      <hr/>
        <table className="table">
          <tr>
              <th> Id </th>
              <th> Title </th>
              <th> User Id </th>
              <th> Status </th>
            </tr>
            {this.state.data.map(b => <ApiRow key={b.id} a={b}/>)}
        </table>
    </div>
  );
};

export default template;
