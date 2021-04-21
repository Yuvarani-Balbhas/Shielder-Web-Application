import React, { Component ,useState} from 'react';
import { Container, Row, Col, Form, Button,InputGroup,FormControl,Modal,Nav,NavDropdown,Card,Table, Dropdown,ButtonToolbar } from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';
import { FastField } from 'formik';
import 'react-phone-number-input/style.css'
import { FiMenu } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { timers } from 'jquery';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Label } from 'reactstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { ImCross,ImCheckmark } from "react-icons/im";
import { IoIosAddCircle ,IoIosAddCircleOutline} from "react-icons/io";
import { BsX } from "react-icons/bs";
import { IoMenu ,IoClose } from "react-icons/io5";



// import OTPInput, { ResendOTP } from "otp-input-react";
class MenuBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         mobile:'',
         otp:'',
         submitted:false,
         mobileCountryCode:'',
         mobileError:'',
         mobileCountryCodeError:'',
         showotpModal1:false,
         DropdownButton:'',
         Dropdown:'',
         mobile:'',
         size: 'xs',
         show: false,
         showmenu:false,
         menucontrol:false,


     };
    //  const [value, setValue] = useState();
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.MenuControl  = this.MenuControl.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer() {
    this.setState({
     
      showmenu:!this.state.showmenu,
    });
  }
  handleChangeSize(size) {
    this.setState({ size });
  }
  
  MenuControl(){
    console.log("----------working-----------");
    this.setState({  menucontrol:!this.state.menucontrol,});
  }
   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
     console.log("testting")
    this.setState({
      showmenu:!this.state.showmenu,
    })
  }



  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     console.log(this.state.mobileCountryCode); 
  }

    render() {
     const{mobile,otp,lastName,accessid,employeeid,firstName,facilityid,mask,declaration,Temperature,mobileError,mobileCountryCode,DropdownButton,visited,returndate,relationship,lastcontact,signature,travel,infected,submitted}=this.state;
     const { size, placement, show } = this.state;
      
     return(
       
            <div >

            { this.state.showmenu ?<Row>
                <Col md="4" > 
              {/* <ProSidebar  > */}
              <ProSidebar style={{position:'fixed'}} ><IoClose size="40px" onClick={this.closeNav} style={{marginLeft:'80%'}}></IoClose>
  <Menu iconShape="square">  
    <MenuItem active={false}><a  href="/profile"> Welcome to Safe Access </a><Avatar name="Dark" size="40"  round={true} src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" /> </MenuItem>
    <MenuItem><Nav><Nav.Link eventKey="1"  href="/dailyentry">
        <text > Daily Entry</text>
        </Nav.Link></Nav> </MenuItem>

    <MenuItem><Nav><Nav.Link eventKey="1"  href="/certification">

        <text > Certification</text> 
        </Nav.Link></Nav> </MenuItem>
    <SubMenu title="Add Option"  eventKey="disabled" disabled href="#">
   
        <MenuItem> <Nav> <Nav.Link eventKey="1"  href="/addEmployee">
          Add Employee
        </Nav.Link></Nav></MenuItem>
        <MenuItem> <Nav> <Nav.Link eventKey="1" href="/addVehicle">
         Add Vehicle
        </Nav.Link></Nav></MenuItem>
        <MenuItem> <Nav> <Nav.Link eventKey="1" href="/addFacility">
          Add Facility
        </Nav.Link></Nav></MenuItem>
    </SubMenu>
   <MenuItem><Nav.Link eventKey="1" href="/assignrole">
          Assign Role
        </Nav.Link></MenuItem>
        <MenuItem> <Nav.Link eventKey="1" href="/cleaning">
         Cleaning
        </Nav.Link></MenuItem>
        <MenuItem><Nav.Link eventKey="1" href="/createrole">
         Create Role
        </Nav.Link></MenuItem>
        <MenuItem><Nav.Link eventKey="1" href="/reportIncident">
         Report Incident 
        </Nav.Link></MenuItem>
        <MenuItem>  <Nav.Link eventKey="1" href="/visitormanagement">
        Visitor Management
        </Nav.Link></MenuItem>
  </Menu>
</ProSidebar>
 



  </Col>   
  
  
  
  
    
      </Row>:null}
      <IoMenu size="50px" onClick={this.closeNav}   style={{position:'fixed'}}></IoMenu>  
            </div>
        )
    }
}

export default MenuBar;
