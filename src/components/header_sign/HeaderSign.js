import React, { useState } from "react";
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
//import { verifyCredentialCustomer,clearTokensCustomer, verifyEmailCustomer} from './action';
import * as Constants from "../../constants";

import { Redirect } from 'react-router'


import "./Header.scss";
import Logo from "../../images/logo.png";

class HeaderSign extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          email: '',
          password: '',
          passwordError:'',
          captcha:'',
          text:'',
          submitted: false,
          isLoginSuccess: false,
          isReadyToRedirect: false,
          emailError:'',
          captchaError:'',
          showloginModal: false,
          mode: 'LOGIN',
          isVerifySuccess: false,
          isReadyToRedirect1: false,
          getmail:'',
          getmailError:'',
          page1:'',
          showmailModal:false,
          otp:'',
          resendOtpSuccess:false,
          isValidatdOtpSuccess: false,
          showotpModal:false,
          newpassword:'',
          newpasswordError:'',
          confirmpassword:'',
          confirmpasswordError:'',
          isnewPasswordSuccess: false,
          showpasswordModal:false,
          submitted2: false,
          submitted3: false,
          submitted4: false,
          doClearTokens: '',
          local:'',




      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.captcha = this.captcha.bind(this);
      this.handleChangeNew = this.handleChangeNew.bind(this);
      this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
      this.handleChanges = this.handleChanges.bind(this);


  }

  handleChanges = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value 
    });
    const re = /\S+@[A-Za-z]+\.com/;
    const ks = /\S+@[A-Za-z]+\.co.in/;
    if (!re.test(value) && !ks.test(value)) {
        this.setState({

            emailError:"Invalid email" 
        })    
        }else{
   
        this.setState({

            emailError:"" 
        }) 

    }
};

  handlePasswordChange = (event) => {
      const {name, value} = event.target;
      this.setState({
          [name]: value
      });

      const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,13}$/;

      if (!re.test(value)) {
         
      this.setState({
        passwordError : "Password should be atleast (8-12) digits with atleast one alphabet, one number and one symbol",
      });}
     else{
      this.setState({
        passwordError : "",
      });
     }
  };

  handleChangeNew = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,13}$/;

    if (!re.test(value)) {
       
    this.setState({
      newpasswordError : "Password should be atleast (8-12) digits with atleast one alphabet, one number and one symbol",
    });}
   else{
    this.setState({
      newpasswordError : "",
    });
   }
   console.log(this.state.newpasswordError)

};

handleChangeConfirm = (event) => {
  const {name, value} = event.target;
  this.setState({
      [name]: value
  });
  const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,13}$/;

  if (!re.test(value)) {
     
  this.setState({
      confirmpasswordError : "Password should be atleast (8-12) digits with  alphabets,  numbers and one special character",
  });}
 else{
  this.setState({
      confirmpasswordError : "",
  });
 }
 console.log(this.state.confirmpasswordError)

};

handleChange = (event) => {
  const {name, value} = event.target;
  this.setState({
      [name]: value 
  });
  const re = /\S+@[A-Za-z]+\.com/;
  const ks = /\S+@[A-Za-z]+\.co.in/;
  if (!re.test(value) && !ks.test(value)) {
      this.setState({

          emailError:"Invalid email" 
      })    
      }else{
 
      this.setState({
          emailError:"" 
      }) 

  }
};

handleChangeOTP = (event) => {
  const {name, value} = event.target;
  this.setState({
      [name]: value
  });
};



  handleChangeCaptcha = (event) => {
    const {name, value} = event.target;
    // this.setState({
    //    [name]: value
    // });
  //   var difference = function (num1, num2){
  //     return Math.abs(num1 - num2);
  //  }
  console.log(Math.abs(value.length - this.state.captcha.length))
console.log("name \n"+name+" \n value \n"+value)
console.log((Math.abs(value.length - this.state.captcha.length)) ===1);
    if((Math.abs(value.length - this.state.captcha.length)) === 1){  
      this.setState({
        captcha: value
       
    });

    }
    const pasteBox = document.getElementById("captcha");
  pasteBox.onpaste = e => {
    e.preventDefault();
    return false;
  };
    if(this.state.text !== value ){
      this.setState({
        captchaError:"Captcha is mismatching",
      })
    }else{
      this.setState({
        captchaError:"",
      })
    }
}

  handleEmailChange = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value 
    });
    const re = /\S+@[A-Za-z]+\.com/;
    const ks = /\S+@[A-Za-z]+\.co.in/;
    if (!re.test(value) && !ks.test(value)) {
        this.setState({

            emailError:"Invalid email" 
        })    
        }else{
   
        this.setState({

            emailError:"" 
        }) 

    }
};

captcha () {
 
  
  var no ="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
  var x = no[Math.floor(Math.random() * no.length)];
  for(var i =0;i <4;i++){
    x = x +  no[Math.floor(Math.random() * no.length)]; 
  }
  this.setState({
      text: x,
  })
  console.log(this.state.text);
}


final=(type) => {
  this.setState({submitted4: true});
  const { newpassword,confirmpassword,newpasswordError,confirmpasswordError} = this.state;
  if ((newpassword !=="" && confirmpassword !=="" && newpassword === confirmpassword && newpasswordError === "" && confirmpasswordError === "")) {
      console.log("enter")
      this.setState({  showloginModal: true, mode: type});
      this.setState({  showpasswordModal: false, mode: type});

    }else   if ((newpassword !=="" && confirmpassword !=="" )){
    Swal.fire({
      title: "",
      text: "New password and Confirm Password Is Mismatching",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
  })
  }
  
}


handleSubmit(e) {
  e.preventDefault();
  this.setState({submitted: true});
  const {email, password,captcha,emailError,passwordError,captchaError} = this.state;
  if (email && password && captcha && emailError == "" && passwordError == ""&&captchaError=="") {
     this.props.verifyCredentialCustomer(email, password);
  }
  //this.props.history.push('/RegisterPage');

}

  handleSubmit2= (type) => {
    this.setState({submitted2: true});

    if(this.state.getmail!=="" && this.state.getmailError === "")
    {
      this.setState({  showotpModal: true, mode: type});
      this.setState({  showgetmailModal: false, mode: type});
          }
     const yu = /\S+@[A-Za-z]+\.com/;
     const va = /\S+@[A-Za-z]+\.co.in/;
 if (!yu.test(this.state.getmail) && !va.test(this.state.getmail)) {
         this.setState({

             getmailError:"Invalid email" 
         })    
         }else{
             this.setState({
                 getmailError:""    
             }) 
             const {getmail,getmailError} = this.state; 
           
             if (getmail) {
              this.props.verifyEmailCustomer(getmail);
             }

         }
  }


  

  handleSubmit3= (type) => {
    this.setState({submitted3: true});
  //   const {email, mobile, otp,location, username} = this.state;
  //   if ((email && otp && location && username && otp.length === 6)) {
  //       this.props.submitverifyValidateOtp(email, mobile, otp,location, username);
  //   }
  if(this.state.otp.length == 6){
    this.setState({  showpasswordModal: true, mode: type});
    this.setState({  showotpModal: false, mode: type});

      console.log('--->Open password Modal<--');  }
 

}
maxLengthCheck = (object) => {
  if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
  }
}

resendChange = () => {
   
}


  loginClicked = (type) => {
    this.setState({  showloginModal: true, mode: type});
      console.log('--->Open Login Modal<--');
  }
      
  forgotClicked = (type) => {
    this.setState({  showgetmailModal: true, mode: type,});
    this.setState({  showloginModal: false, mode: type});

      console.log('--->Open forgot mail Modal<--');
  }
  otpClicked = (type) => {

    this.setState({  showotpModal: true, mode: type});
    this.setState({  showgetmailModal: false, mode: type});

      console.log('--->Open otp Modal<--');
  }
  
  passwordClicked = (type) => {
    this.setState({  showpasswordModal: true, mode: type});
    this.setState({  showotpModal: false, mode: type});

      console.log('--->Open password Modal<--');
  }

      handleClose = () => {
        this.setState({ showloginModal: false })
        this.setState({ showgetmailModal: false })
        this.setState({ showotpModal: false })
        this.setState({ showpasswordModal: false })



      }
    
  




  componentDidMount() {
   this.captcha();
 
    console.log('session storage email id------>' + window.sessionStorage.getItem(Constants.ACCESS_EMAIL));
    console.log('session storage email id------>' + window.sessionStorage.getItem(Constants.ACCESS_CUSTOMERID));

   if( window.sessionStorage.getItem(Constants.ACCESS_EMAIL) !== undefined && window.sessionStorage.getItem(Constants.ACCESS_EMAIL) != null) {
        console.log('login mail id...' + window.sessionStorage.getItem(Constants.ACCESS_EMAIL));
        this.props.clearTokensCustomer();
    }
    window.sessionStorage.clear();
  console.log('login mail id ------>' + window.sessionStorage.getItem(Constants.ACCESS_EMAIL));

  if( window.sessionStorage.getItem(Constants.ACCESS_CUSTOMERID) !== undefined && window.sessionStorage.getItem(Constants.ACCESS_CUSTOMERID) != null) {
    console.log('login mail id...' + window.sessionStorage.getItem(Constants.ACCESS_CUSTOMERID));
   // this.props.clearTokensCustomer();
}
console.log('login CUSTOMER ID...' + window.sessionStorage.getItem(Constants.ACCESS_CUSTOMERID));



}


  

componentDidUpdate(prevProps, prevState, snapshot) {
  if (this.props.isLoginSuccess !== prevProps.isLoginSuccess) {
      if (this.state.submitted && this.props.isLoginSuccess.success) {
     
        window.sessionStorage.setItem(Constants.ACCESS_EMAIL, this.props.isLoginSuccess.email);

        window.sessionStorage.setItem(Constants.ACCESS_CUSTOMERID, this.props.isLoginSuccess.customerId);

          this.setState({isReadyToRedirect : true,showloginModal: false, 
         });
         window.location.reload();

      } else if (this.state.submitted && !this.props.isLoginSuccess.success) {
          Swal.fire({
            title: "",
            text: this.props.isLoginSuccess.message,
            icon: 'info',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        })
          this.setState({isReadyToRedirect : false});
      }
      this.setState({submitted : false});
  }

  if (this.props.isVerifySuccess !== prevProps.isVerifySuccess) {
    if (this.state.submitted2 && this.props.isVerifySuccess.success) {
        Swal.fire({
          title: "Note",
          text: "OTP has been sent to your registered Email ID",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
      })
        this.setState({isReadyToRedirect1 : true});
    } else if (this.state.submitted2 && !this.props.isVerifySuccess.success) {
        Swal.fire({
          title: "Note",
          text: this.props.isVerifySuccess.message,
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
      })
        this.setState({isReadyToRedirect1 : false});
    }
    this.setState({submitted2 : false});
}



}



  
render(){
  //if (this.state.isReadyToRedirect) return <Redirect to="/requestdemo" />

  const {email, password, submitted,captcha,text,getmail,otp,newpassword,confirmpassword,submitted2,submitted3,submitted4,} = this.state;

  return (
    <header id="header">
      <Container class="container">
        <Row className="row align-items-center justify-content-between d-flex">
          <Col>
            <a href="/">
              <img src={Logo} alt="B1 - Desk" />
            </a>
          </Col>
          
          <Navbar bg="nav-menu-container" expand="lg"style={{ marginRight:200}}>
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
                      B1Desk Dedicated{" "}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contactus">Contact</Nav.Link>
                </Nav.Item>
                </Nav.Item>
                
                
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>

      <Modal show={this.state.showloginModal} onHide={this.handleClose} backdrop={'static'}>

        <Modal.Header closeButton>
          <Modal.Title >Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="md-form mb-2">
        <i class="fas fa fa-envelope prefix grey-text"></i>
          <input type="email" id="defaultForm-email" class="form-control validate" name="email" value={email} onChange={this.handleEmailChange}/>
          {submitted &&  !email && 
                                    <div style ={{fontSize:12,color:"red"}}>Email is required</div> 
                                    }
                                    {this.state.emailError !=="" && submitted && email &&
                                    <div style ={{fontSize:12,color:"red"}}>{this.state.emailError}</div>}
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>

        </div>

        <div class="md-form mb-2" >
          <i class="fas fa fa-lock prefix grey-text"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate" name="password" value={password} onChange={this.handlePasswordChange}/>
          {submitted && !password &&
                                        <div className="help-block" style ={{fontSize:12,color:"red"}}>Password is required</div>
                                        }
                                         { this.state.passwordError !=="" && password && submitted &&
                                         <div className="help-block " style ={{fontSize:12,color:"red"}}>{this.state.passwordError}</div>
                                            }
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
        </div>
        <div class="md-form mb-2">
          <input type="text" id="defaultForm-pass" onPaste="return false" class="form-control validate" name="captcha" id="captcha" value={captcha}  onChange={this.handleChangeCaptcha} />
          {submitted && !captcha &&
                                    <div className="help-block" style ={{fontSize:12,color:"red"}}>Captcha is required</div>
                                    }
                                     {submitted && text !== captcha && captcha &&
                                    <div className="help-block" style ={{fontSize:12,color:"red"}}>{this.state.captchaError}</div>
                                    }
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Captcha</label>
          <div className="row">
          <div classname="col-md-1">

          <input disabled type="text" className="form-control" name="text" value={text}ondragstart="dragStart(event)" draggable="true" id="dragtarget"style={{fontSize:"18px", width:100, marginLeft:20}} />          </div>
          <div classname="col-md-12">
<Button  variant="link"  onClick={this.captcha}style={{marginBottom:10 ,width:100, }}>
  
                      Refresh</Button>         </div>  </div>
                      </div>
                      <Row className="justify-content-md-center">

                      <Button className="genric-btn primary radius text-uppercase" variant="success"  onClick={this.handleSubmit}  style={{marginTop:10}}>
                      Login</Button> 
                      </Row>          

                                      </Modal.Body>

            <Row className="justify-content-md-center">
              <Col className="text-center">
                <a href="#!" className="forgot-password-link" href="/forgotpasswordcustomer" >
                  Forgot password?
                </a>
                <p className="login-card-footer-text">
                  Don't have an account?{" "}
                  <a href="/register" className="text-reset">
                    Register here
                  </a>
                </p>
              </Col>
            </Row>
      </Modal>
      <Modal show={this.state.showgetmailModal }  onHide={this.handleClose}backdrop={ 'static' }>
      <Modal.Header closeButton>
          <Modal.Title >Enter your Registered Mail ID to send OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="md-form mb-2">
        <i class="fas fa fa-envelope prefix grey-text"></i>
          <input type="email" id="defaultForm-email" class="form-control validate" name="getmail" value={getmail}  onChange={this.handleEmailChange}/>
          {submitted2 &&  !getmail && 
                                    <div style ={{fontSize:12,color:"red"}}>Email is required</div> 
                                    }
                                    {this.state.getmail !=="" && submitted2 && getmail &&
                                    <div style ={{fontSize:12,color:"red"}}>{this.state.getmailError}</div>}
          <label data-error="wrong" data-success="right" for="defaultForm-email">Enter your registered mail ID</label>

        </div>

        
       
                      <Row className="justify-content-md-center">

                      <Button className="genric-btn primary radius text-uppercase" variant="success"  onClick={this.handleSubmit2}  style={{marginTop:10}}>
                      NEXT</Button> 
                      </Row>          

                                      </Modal.Body>

      </Modal>
      <Modal show={this.state.showotpModal }  onHide={this.handleClose}backdrop={ 'static' }>
      <Modal.Header closeButton>
          <Modal.Title >Enter OTP </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="md-form mb-2">
          <input type="email" id="defaultForm-email" class="form-control validate" name="otp" value={otp}  maxLength={6} minLength={6}onInput={this.maxLengthCheck}
                               onChange={this.handleChangeOTP} />
 
          {submitted3 && !otp &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left ">OTP is required</div>
                        }
                         {submitted3 && otp.length !== 6 && otp &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">OTP is must be 6-digits</div>
                        }
          <label data-error="wrong" data-success="right" for="defaultForm-email">Enter your OTP</label>

        </div>

        
       
        <Row className="justify-content-md-center">

<Button className="genric-btn primary radius text-uppercase" variant="success"  onClick={this.handleSubmit3}  style={{marginTop:10}}>
VErify</Button> 

<Button className="genric-btn primary radius text-uppercase" variant="success"  
onClick={this.resendChange}  style={{marginTop:10,marginLeft:40}}>Resend</Button>

</Row>          

                                      </Modal.Body>

      </Modal>

      <Modal show={this.state.showpasswordModal }  onHide={this.handleClose} backdrop={ 'static' }>
      <Modal.Header closeButton>
          <Modal.Title >Enter Password </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="md-form mb-2">
        <i class="fas fa fa-lock prefix grey-text"></i>

          <input type="email" id="defaultForm-email" class="form-control validate" name="newpassword" value={newpassword}  
                               onChange={this.handleChangeNew} />
 
 {submitted4 && !newpassword &&
                        <div className="help-block" style ={{fontSize:12,color:"red"}}>New Password Is Required</div>
                        }
                         { this.state.newpasswordError !=="" && newpassword && submitted4 &&
                        <div className="help-block " style ={{fontSize:12,color:"red"}}>{this.state.newpasswordError}</div>
                        }
                      
          <label data-error="wrong" data-success="right" for="defaultForm-email">New Password</label>

        </div>
        <div class="md-form mb-2">
        <i class="fas fa fa-lock prefix grey-text"></i>

          <input type="email" id="defaultForm-email" class="form-control validate" name="confirmpassword" value={confirmpassword}  
                               onChange={this.handleChangeConfirm} />
 
 {submitted4 && !confirmpassword &&
                        <div className="help-block" style ={{fontSize:12,color:"red"}}>Confirm Password Is Required</div>
                        }
                         { this.state.confirmpasswordError !=="" && confirmpassword && submitted4 &&
                        <div className="help-block " style ={{fontSize:12,color:"red"}}>{this.state.confirmpasswordError}</div>
                        }
                      
          <label data-error="wrong" data-success="right" for="defaultForm-email">Confirm Password</label>

        </div>


        
       
                      <Row className="justify-content-md-center">

                      <Button className="genric-btn primary radius text-uppercase" variant="success"  onClick={this.final}  style={{marginTop:10}}>
                      Create</Button> 
                      </Row>          

                                      </Modal.Body>

      </Modal>
    
    </header>
  );
}
}

HeaderSign.propTypes = {
 // verifyCredentialCustomer: PropTypes.func,
  
};
const mapStateToProps = state => {
    return {
        //isLoginSuccess: state.loginReducer.isLoginSuccess,

    };
};

const mapDispatchToProps = dispatch => ({
  //verifyCredentialCustomer: (email, password) => dispatch(verifyCredentialCustomer(email, password)),

});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderSign);