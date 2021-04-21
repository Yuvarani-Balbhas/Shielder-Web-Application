import React from 'react';

function Sidemenu(props) {
  const classval = "list-group-item list-group-item-action";
  return (<div className="col-md-2">
  <div className="list-group">
      <li onClick={() => props.navigate("/user")} className={`${classval} ${props.selected === "user" ? " active" : ""}`}><span className="icon-holder"><i className="c-blue-900 ti-user"></i> </span> Users</li>
      <li onClick={() => props.navigate("/report")} className={`${classval} ${props.selected === "report" ? " active" : ""}`}><span className="icon-holder"><i className="c-blue-900 ti-receipt"></i> </span> Reports</li>
      <li onClick={() => props.navigate("/serviceTax")} className={`${classval} ${props.selected === "serviceTax" ? " active" : ""}`}><span className="icon-holder"><i className="c-blue-900 ti-file"></i> </span>Service Tax</li>

  </div>
</div>)
}
export default Sidemenu;