import React from 'react';
import Logo from '../images/logo.png';
import * as Constants from '../constants';

function Header1(props) {
  return (<div className="header navbar"  style={{width: '100%'}} >
  <div className="header-container  col-md-12">
    <ul className="nav-left">
      <li><img src={Logo} alt="B1-Desk" /></li>
    </ul>
   
    <ul className="nav-right">
      <li style={{ color: "#333", fontSize: "14px", marginRight: "15px", paddingTop: "20px" }}></li>
      <li style={{ color: "#333", fontWeight: "normal", fontSize: "14px", marginRight: "25px", paddingTop: "20px" }}> <button type="button" onClick={props.navigate} style={{ border: "none" }} className="btn-outline-primary">Logout</button> </li>
    </ul>
  </div>
</div>);
}
export default Header1;