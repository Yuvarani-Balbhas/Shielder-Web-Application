import React, { useState } from "react";
import {
  
  Container,
  Row,
  Col,
  
} from "react-bootstrap";
import "./Header.scss";
import Logo from "../../images/logo.png";

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          email: '',
          password: '',
        
      };
  
  }





  
render(){
 

  

  return (
    <header id="header">
      <Container class="container">
        <Row className="row align-items-center justify-content-between d-flex">
          <Col>
            <a href="/">
              <img src={Logo} alt="B1 - Desk" />
            </a>
          </Col>
          
          
        </Row>
      </Container>

      
    
    </header>
  );
}
}



export default Header;