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
import { CountdownCircleTimer } from 'react-countdown-circle-timer'



// import OTPInput, { ResendOTP } from "otp-input-react";
class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         mobile:'',
         otp:'',
        valueof:'',
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


handleChanges = (otp) =>{

  this.setState({ otp });
  
} 



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
  this.setState({ submitted:true});
  const otpError = otpValidator(this.state.otp);
  
    if(otpError){
  this.setState({
    otpError:otpError,
 
  })

}
  if(otpError=="" && this.state.otp.length =="6"){
 
   this.props.history.push('/profile');
  }
 

 
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


              <div class="mobile1" >
                <Container >
      <div class="container" >
          <section>

            <div >
              <Form>
                <Form.Row>
                
                <Form.Group as={Col} md="12" controlId="mobile">
                <h1><Form.Label >Safe Access for Business</Form.Label></h1>
                </Form.Group>
                
                {/* <Form.Group as={Col} md="4">
                 <div> 
                 <InputGroup.Prepend>
               <InputGroup.Text id="basic-addon1" >country Code 
    
    
                   <PhoneInput id="basic-addon1"
                   international
                   style={{padding:5,width:'200px'}}
                //  defaultCountry="IN"
                 value={this.state.mobileCountryCode}
                 onChange={(e)=>this.mobile(e)}
                 required 
                 maxLength='3' />  </InputGroup.Text>  </InputGroup.Prepend>
                
</div><br></br>
   <div>
    {submitted && !mobileCountryCode &&
                        <div  style ={{fontSize:12,color:"red", marginRight:'70%'}} className="nav-left">Country code is required</div>
                        }</div> </Form.Group>
                         */}
                         <Form.Label class="control-label col-sm-3 font-weight-bold">Mobile No</Form.Label>
                        <Form.Group  as={Col} md="12">
                        
                 <InputGroup className="mr-2">
    <InputGroup.Prepend>

      <InputGroup.Text id="basic-addon1" style={{width:130}}  >
                   <PhoneInput id="basic-addon1"
                    international
                    style={{height:'10px'}}
                   defaultCountry="US"
                 value={this.state.mobileCountryCode}
                 onChange={(e)=>this.mobile(e)}
                 required 
                 maxLength='3' /> </InputGroup.Text>
    </InputGroup.Prepend>
    
    
    <FormControl
      placeholder="Enter your mobile no"
      aria-label="Mobile"
      aria-describedby="basic-addon1" 
      onChange={this.changeMobile}
      name="mobile"
      value={mobile}
      isInputNum
      numInputs={10}
      
    />
     
   </InputGroup>  <div style={{alignContent:'left'}}>
   {submitted && !mobile &&
                        <div  style ={{fontSize:12,color:"red" , marginRight:'70%'}} className="nav-left">Mobile Field is required</div>
                        }
                        {submitted &&  this.state.mobileError !=="" && mobile &&
                                                            <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                            }
    </div><br></br>

                      <Button as={Col} md="6"  className="button1"  onClick={this.handleSubmit} >Log In / Sign Up</Button><br></br>
                        {/* <a  href="/registration" style={{direction:'none',}}>Register Now</a> */}
                        
                </Form.Group>
                
                </Form.Row>
              </Form>





            </div>

            <Modal show={this.state.showotpModal1 }  onHide={this.handleClose} backdrop={ 'static' }>
      <Modal.Header closeButton >
          <Modal.Title >Enter verification code </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       

                                                  
       <OtpInput className="otpcard"
        name="otp"
        value={otp}
        onChange={this.handleChanges}
        numInputs={6}
        //separator={<span>-</span>}
        isInputNum
       
        
      />   
       {submitted && !otp &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left ">OTP is required</div>
                        }
                         {submitted && otp.length !== 6 && otp &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">OTP is must be 6-digits</div>
                        }
          <label data-error="wrong" data-success="right" for="defaultForm-email">Enter your OTP</label>
  {/* <Row className="justify-content-md-center" >
  <CountdownCircleTimer
  
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </Row> */}

       

        
       
        <Row className="justify-content-md-center">

<Button  className="button1"   onClick={this.handleSubmit1}  style={{marginTop:10}}>
Verify</Button> 

<Button  className="button1"   
onClick={this.resendChange}  style={{marginTop:10,marginLeft:40}}>Resend</Button>

</Row>          

                                      </Modal.Body>

      </Modal>

          </section>


	</div>
               
      </Container>
      </div>
            </div>
        )
    }
}

export default Login;
