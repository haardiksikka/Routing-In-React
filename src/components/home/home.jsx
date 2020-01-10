import "./home.css";
import React from "react";
import Sqaure from '../Sqaure/Sqaure';
import SqauareRoot from '../SqaureRoot/SqaureRoot';
import Cube from '../Cube/Cube';
import BasePrice from '../BasePrice/BasePrice';
import RoadTax from '../RoadTax/RoadTax';
import ServiceTax from '../ServiceTax/ServiceTax';
import CityCharge from '../CityCharge/CityCharge'
import CarCost from '../CarCost/CarCost'

function template() {
  return (
    <div className="home">
      <h1>Calculate</h1>
      <table className="table table-striped">
        <tr> 
            <td> Enter Number </td>
            <td> <input type="text" name="t11" onChange={this.onChange}/> </td>
        </tr>

        <tr> 
            <td> Sqaure Root </td>
            <td> <SqauareRoot a={this.state.num}/></td>           
        </tr>
        <tr> 
            <td> Sqaure </td>
            <td> <Sqaure b={this.state.num}/></td>           
        </tr>
        <tr> 
            <td> Cube </td>
            <td> <Cube c={this.state.num}/></td>           
        </tr>
        </table>
        <br/>
        <br/>
       <table className="table table-stripped">
       <tr> 
            <td> Enter Car Price </td>
            <td> <input type="text" className="alert alert-warning" name="t112" onChange={this.onPriceChange}/> </td>
        </tr>
        <tr> 
            <td> Base Price </td>
            <td> <BasePrice p={this.state.carprice}/></td>           
        </tr>
        <tr> 
            <td> Road tax </td>
            <td> <RoadTax q={this.state.carprice}/></td>           
        </tr>
        <tr> 
            <td> Service tax </td>
            <td> <ServiceTax r={this.state.carprice}/></td>           
        </tr>
        <tr> 
            <td> City Charge </td>
            <td> <CityCharge s={this.state.carprice}/></td>           
        </tr>
        <tr> 
            <td> City Charge </td>
            <td> <CarCost t={this.state.carprice}/></td>           
        </tr>
        </table>  
    </div>
  );
};

export default template;
