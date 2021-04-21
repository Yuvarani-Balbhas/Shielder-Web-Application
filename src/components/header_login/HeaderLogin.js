import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';

import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import "./Header.scss";
import Logo from "../../images/logo.png";

import * as Constants from "../../constants";

import { Redirect } from 'react-router'
        
import { clearTokensCustomer } from './action';
      
  
    
class HeaderLogin extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    isReadyToRedirect: false,
    submitted: false,
    doClearTokens: '',

 
  }
}

navigate = (url) => {
  this.props.history.push(url);
};
  
logout = () => {

  if( window.sessionStorage.getItem(Constants.ACCESS_EMAIL) !== undefined && window.sessionStorage.getItem(Constants.ACCESS_EMAIL) != null) {
    console.log('login mail id1 checking...' + window.sessionStorage.getItem(Constants.ACCESS_EMAIL));
    this.props.clearTokensCustomer();
}
  window.sessionStorage.clear();

   console.log('login mail id2 ------>' + window.sessionStorage.getItem(Constants.ACCESS_EMAIL));
 
}
  
  componentDidMount() {
  
     console.log('session storage email id------>' + window.sessionStorage.getItem(Constants.ACCESS_EMAIL));
 
    
   
 
 
 
 }

componentDidUpdate(prevProps, prevState, snapshot) {
  if (this.props.doClearTokens !== prevProps.doClearTokens) {
    console.log('success success --->' + this.props.doClearTokens.success);
    if(this.props.doClearTokens !== undefined && this.props.doClearTokens !== null){

      if (this.props.doClearTokens.success==true) {
     

        Swal.fire({
          title: "Success",
          text: " Logged Out Successfully",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
      })
     this.setState({isReadyToRedirect : true});
    }
    }
   
      
          if(this.props.doClearTokens.success==false) {
          Swal.fire({
            title: "",
            text: this.props.doClearTokens.message,
            icon: 'info',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((res) => {
            if(res.value){
                window.location.href = "/";
            }})
          this.setState({isReadyToRedirect : false});
      }
      //this.setState({submitted : false});
  }


}
 
render(){

  if (this.state.isReadyToRedirect) return <Redirect to="/" />

  return (
    <header id="header">
      <Container>
        <Row className="row align-items-center justify-content-between d-flex">
          <Col>
            <a href="/">
              <img src={Logo} alt="B1 - Desk" />
            </a>
          </Col>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="Know Us" id="nav-dropdown-knowus">
                  <NavDropdown.Item eventKey="4.1" href="/aboutb1desk">
                      About B1desk
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" href="/whatisb1desk">
                      What is B1Desk
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" href="/whyb1desk">
                      Why B1Desk
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" href="/faq">
                     FAQ
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown 
                    title="Service Offerings"
                    id="nav-dropdown-service"
                  >
                     <NavDropdown.Item eventKey="4.1" href="/b1desklite">
                      B1Desk Lite
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" href="/b1deskenterprise">
                      B1Desk Enterprise
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" href="/b1deskpremium">
                      B1Desk Premium
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4" href="/b1deskultimate">
                      B1Desk Ultimate
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="Pricing Plans" id="nav-dropdown-pricing">
                  <NavDropdown.Item eventKey="4.1"  href="./B1deskpayperuse">
                      B1Desk Pay Per Use
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" href="./B1deskshared">
                      B1Desk Shared
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" href="./B1deskdedicated">
                      B1Desk Dedicate{" "}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contactus">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/editProfile">My Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Button className="genric-btn primary radius text-uppercase"  onClick={this.logout}  >
              Logout
                  </Button> 
                </Nav.Item> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}
}

HeaderLogin.propTypes = {
    clearTokensCustomer: PropTypes.func,
    doClearTokens: PropTypes.func,

};
const mapStateToProps = state => {
    return {
 doClearTokens: state.logoutReducer.doClearTokens
    };
};

const mapDispatchToProps = dispatch => ({
    clearTokensCustomer: () => dispatch(clearTokensCustomer())
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin);