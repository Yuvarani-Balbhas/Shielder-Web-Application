import React, { Component ,useState} from 'react';
import { Container, Row, Col, Form, Button,InputGroup,FormControl,Modal } from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';
import {emailValidator, mobileValidator, firstNameValidator,lastNameValidator,
  companyValidator,addressValidator,pincodeValidator,cityValidator,departmentValidator,passwordValidator,
  landlineValidator,countryValidator, mobileCountryCodeValidator, otpValidator} from '../Core/utils'
import { FastField } from 'formik';
import OtpInput from 'react-otp-input';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { timers } from 'jquery';


// import OTPInput, { ResendOTP } from "otp-input-react";
class Test extends React.Component {
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


     };
    //  const [value, setValue] = useState();
  }

  
  changeMobile = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  
  
    if(value.length<10 && value.length>10){
        this.setState({
            mobileError : "Invalid mobile number" ,
        });
        console.log("changeing mobile"+ this.state.mobileError);
    }else{
        this.setState({
            mobileError : "" ,
        });
        console.log("changeing mobile"+ this.state.mobileError);
  
    }
  
  };
handleChange = (event) => {
  const {name, value} = event.target;
  this.setState({
      [name]: value
  });
};


handleChanges = otp => this.setState({ otp });



clicked = () => {
  this.setState({  showotpModal1: true});
  console.log("OTP open");
}

handleClose= () => {
  this.setState({  showotpModal1: false});
  console.log("OTP Closed");
}


handleSubmit=(e)=> {
  this.setState({submitted: true})
const{mobileCountryCode,mobiler}=this.state;

  e.preventDefault();
 
  //  const mobileCountryCodeError = mobileCountryCodeValidator(this.state.mobileCountryCode);
  const mobileError = mobileValidator(this.state.mobile);
  
// console.log("error:::"+mobileError);
if(mobileError)
 
this.setState({
  
  mobileError : mobileError,
});
else{
  this.setState({  
    showotpModal1: true,
    submitted:false,
  });
}
}
handleSubmit1=(e)=> {
  const otpError = otpValidator(this.state.otp);
  if(otpError)
  this.setState({
    otpError:otpError,
  });
 this.setState({ submitted:true});
}



mobile(e){
console.log(e);
this.setState({
  mobileCountryCode:e,
})
}



  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     console.log(this.state.mobileCountryCode); 
  }

    render() {
     const{mobile,otp,submitted,mobileError,mobileCountryCode,DropdownButton}=this.state;
  
     return(
       
            <div >


              <div class="mobile1" style={{marginTop:'5%'}}>
                <Container >
      <div class="container" >
          <section>

            <div >
            <h6> Answer 4 out of 5 questions correctly to pass the exam </h6><br></br>
             <Row><Col >
              <Form>  
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question1"  />
                   <div style={{marginTop:15}}></div> <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </Form>
                        </Col>
                        <Col>
                        <Form>  
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question2"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </Form>
                        </Col>


                        </Row>

                        <Row>
                            <Col>
                            <Form>  
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question3"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </Form>
                        </Col>

                        <Col>
                            <Form>  
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question4"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </Form>
                        </Col>
                           


                        </Row>

                        <Row>
                        <Col>
                            <Form>  
              <Form.Row>
                        
                        <Form.Group  as={Col} md="6">
                       <Form.Control plaintext readOnly defaultValue="Question5"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </Form>
                        </Col>
                        </Row>
                        
                        
                         
   
                        
                      <Button as={Col} md="6"  className="button1"  onClick={this.handleSubmit} >Submit</Button><br></br>
                        
                        
              
                
               





            </div>


          </section>


	</div>
               
      </Container>
      </div>
            </div>
        )
    }
}

export default Test;
