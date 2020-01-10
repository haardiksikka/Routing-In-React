import "./projects.css";
import React from "react";

function template() {
  return (
    <div className="projects">
      <h1>Login</h1>
      <form onSubmit={this.onSub}>
        <table className="table" >
          <tr>
            <td>Username</td>
            <td><input type="text" name="uname" onChange={this.onCh1} /> </td>
           
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name="pwd" onChange={this.onCh2} />
            </td>
          </tr>

          <tr className="text-center">
            <td><input class="btn btn-danger" type="submit" value="Login" /> &nbsp;
                            <input class="btn btn-info" type="reset" value="Cancel" /></td>
          </tr>

        </table>
      </form>
    </div>
  );
};

export default template;
