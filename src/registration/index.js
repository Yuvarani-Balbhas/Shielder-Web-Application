import React, {useState } from 'react';
import { Container, Row, Col, Form, Button,InputGroup,FormControl,Modal,ProgressBar } from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-number-input';
import 'react-calendar/dist/Calendar.css';
import OtpInput from 'react-otp-input';

import ImageUploader from "react-images-upload";
import { BiCloudUpload } from "react-icons/bi";

import {emailValidator, mobileValidator, firstNameValidator,lastNameValidator,
  companyValidator,registeridValidation,gsaNumberValidation,employeecountValidation,anotherEmailValidator,passwordValidator,
  mobileValidator2,countryValidator, mobileCountryCodeValidator, genderValidator, dateValidator, nameValidator, otpValidator} from '../Core/utils'

class Registration extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        
        firstName:'',
        firstNameError:'',
        lastName:'',
        lastNameError:'',
        gender:'',
        grenderError:'',
        date:'',
        registerid:'',
        registerid:'',
        gsanumber:'',
        gsaNumberError:'',
        employeecount:'',
        employeecountError:'',
        hideshow:false,
        hideshow1:false,
        name:'',
        nameError:'',
        self:'',
        selfError:'',
        addanother:'',
        addanotherError:'',
        mobile:'',
        company:'',
        country1:'',   
        pincode:'', 
        mobileCountryCode:'',  
        admin:'',  
        mobile2:'',
        anotheremail:'',
        anotheremailError:'',
        email:'',
        employeecountError:'',
        mobileError:'',
        mobileError2:'',
        currentdate: new Date().toISOString().split("T")[0],
        otp:'',
        otpError:'',
        pictures:[],

        state:'',
        address1:'',
        address2:'',
        city:'',
        vehicle:'',
        showotpModal1:false,
        submitted1:false,
        submitted:false,
        showOwnerModal:true,
        showBusinessModal:false,
        showLocationModal:false,
        showVehicleModel:false,
        showPhotoModal:false,
        showDeviceModal:false,
        hidebutton:true,
        hidebuttonsubmit:true,
        viewback:'',
        viewnext:'',
        viewsubmit:false,
        ProgressBarnum:'',
        ProgressBarnum2:'',
        ProgressBarnum3:'',
        ProgressBarnum4:'',
        details:[],
        en1:false,
        en2:false,
        en3:false,
        en4:false,
        en5:false,
       
      };
      
this.back=this.back.bind(this);
this.next=this.next.bind(this);
this.onDrop = this.onDrop.bind(this);
  }

  Change = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value,
        firstNameError: firstNameValidator(value),
        lastNameError : lastNameValidator(value ),
        genderError   : genderValidator(value),
        countryError  : countryValidator(value),
        companyError  : companyValidator(value),
       
    // emailError    : emailValidator(value),
        nameError     : nameValidator(value),


    });
    
  // // console.log(firstNameError);
};

onDrop(pictureFiles, pictureDataURLs) {
  this.setState({
    pictures: this.state.pictures.concat(pictureFiles)
  });
}


handlenumber=(event)=>{
  const{name,value}=event.target;
  this.setState({
  [name]:value,
  gsaNumberError :gsaNumberValidation(value),
  employeecountError: employeecountValidation(value),
  })
}
handlemobilenumber=(event)=>{
const{name,value}=event.target;
this.setState({
  [name]:value,
  mobileError   : mobileValidator(value),

})
}
handlemobilenumber1=(event)=>{
  const{name,value}=event.target;
  this.setState({
    [name]:value,
   
    mobileError2  : mobileValidator2(value),
  })
  }

handleemail=(event)=>{
  const{name,value}=event.target;
this.setState({
  [name]:value,
  emailError    : emailValidator(value),
  

})
}
handleanotheremail=(event)=>{
  const{name,value}=event.target;
this.setState({
  [name]:value,
  
  anotheremailError : anotherEmailValidator(value),

})
}
handleid=(event)=>{
  const{name,value}=event.target;
this.setState({
  [name]:value,
  registeridError:registeridValidation(value),

})
}

mobile(e){
  console.log(e);
  this.setState({
    mobileCountryCode:e,
    mobileCountryCodeError:mobileCountryCodeValidator(e),
  });
  }

setStartDate = (date) => {
  
  const [startDate, setStartDate] = useState(new Date());


}
handleDate=(event)=>{
  const {name, value} = event.target;

  this.setState({
    
    [name]: value,
    dateError: dateValidator(value),
  });

  
 
}
next(){
  const {showOwnerModal,showBusinessModal,showLocationModal,showPhotoModal,showDeviceModal} = this.state;
  
  // this.setState({submitted:true});

if(showOwnerModal==true){
  this.setState({ProgressBarnum:100,showOwnerModal:false,showBusinessModal:true,showLocationModal:false,showPhotoModal:false,en1:true});

}
else if(showBusinessModal==true){
  this.setState({ProgressBarnum2:100,showBusinessModal:false,showOwnerModal:false,showLocationModal:true,showDeviceModal:false,showPhotoModal:false,en2:true});

}

else if(showLocationModal==true){
  this.setState({ProgressBarnum3:100,showOwnerModal:false,showBusinessModal:false,showLocationModal:false,showPhotoModal:true,showDeviceModal:false,hidebutton:true,hidebuttonsubmit:true,en3:true});

}
else if(showPhotoModal==true){
  this.setState({ProgressBarnum4:100,showOwnerModal:false,showBusinessModal:false,showLocationModal:false,showPhotoModal:false,showDeviceModal:true,hidebutton:false,hidebuttonsubmit:true,en4:true});

}

  
//   if(firstNameError =="" && lastNameError =="" && genderError =="" && dateError =="" && countryError ==""){
//     this.setState({ProgressBarnum:100,showBusinessModal:true,showOwnerModal:false,submitted:false});
    
//   }
// else if(firstNameError =="" && lastNameError =="" && genderError =="" && dateError =="" && countryError =="" &&companyError =="" && registeridError=="" && gsaNumberError=="" && employeecountError ==""){ 
//   this.setState({ProgressBarnum1:100,showBusinessModal:false,showOwnerModal:false,showLocationModal:true ,submitted:false});
// }
 
}


back(){
const{showOwnerModal,showBusinessModal,showLocationModal,showVehicleModel,showDeviceModal,showPhotoModal}=this.state;

if(showDeviceModal ==true){
  
  this.setState({ProgressBarnum4:0 ,showBusinessModal:false,showOwnerModal:false,showPhotoModal:true,showLocationModal:false,showDeviceModal:false,viewnext:false,hidebutton:true,en4:false});

}

else if(showPhotoModal ==true){
  
  this.setState({ProgressBarnum3:0,showBusinessModal:false,showOwnerModal:false,showPhotoModal:false,showLocationModal:true,showDeviceModal:false,viewnext:false,hidebutton:true,en3:false});

}
else if(showLocationModal==true ){
  
 this.setState({ProgressBarnum2:0,showBusinessModal:true,showOwnerModal:false,showLocationModal:false,viewnext:false,hidebutton:true,en2:false});
}
else if(showBusinessModal==true ){
 
 this.setState({ProgressBarnum:0,showBusinessModal:false,showOwnerModal:true,showLocationModal:false ,viewnext:false,hidebutton:true,en3:false});
}



}


clicked = () => {
  this.setState({  showotpModal1: true});
  console.log("OTP open");
}


  handleSubmit=(e)=>{
   
    const {firstName,lastName,gender,date,country,registerid,gsanumber,employeecount,name,mobile,company,mobile2,mobileCountryCode,email,anotheremail,otp,submitted,admin} = this.state;


       this.setState({ submitted:true,ProgressBarnum:100});
      //  if(submitted=="true" && admin !=""){

      //  }
   
    e.preventDefault();
       
    
      
      const firstNameError = firstNameValidator(this.state.firstName);
      const lastNameError = lastNameValidator(this.state.lastName );
      const mobileError   = mobileValidator(this.state.mobile);
      const emailError    = emailValidator(this.state.email);
      const genderError   = genderValidator(this.state.gender);
      const dateError     = dateValidator(this.state.date);
      const countryError  = countryValidator(this.state.country);
      const companyError  = companyValidator(this.state.company);
      const registeridError=registeridValidation(this.state.registerid);
      const gsaNumberError=gsaNumberValidation(this.state.gsanumber);
      const employeecountError=employeecountValidation(this.state.employeecount);
      const nameError      = nameValidator(this.state.name);
      const mobileError2   = mobileValidator2(this.state.mobile2);
      const anotheremailError = anotherEmailValidator(this.state.anotheremail); 
      const mobileCountryCodeError=mobileCountryCodeValidator(this.state.mobileCountryCode);
     
if(admin ==="other"){
 

      
      if (!emailError   &&! firstNameError&&! lastNameError&&!mobileError&&!genderError&&!countryError&&!
        dateError&&!companyError&&!registeridError&&!mobileCountryCodeError &&!gsaNumberError&&!employeecountError&&!nameError&&!anotheremailError&&!mobileError2){
          console.log("WORKING")
        if(firstName&&lastName&&gender&&date&&country&&registerid&&gsanumber&&employeecount&&name&&mobile&&company&&mobile2&&mobileCountryCode&&email&&anotheremail&&admin){
          this.setState({  
            showotpModal1: true,
           
          });
        }
        
              }

}
          else if(admin ==="self"){
            if (!emailError  &&! firstNameError&&! lastNameError&&!mobileError&&!genderError&&!countryError&&!
              dateError&&!companyError&&!registeridError &&!gsaNumberError&&!employeecountError){
         
                if(firstName&&lastName&&gender&&date&&country&&registerid&&gsanumber&&employeecount&&mobile&&company&&email&&admin){
                  this.setState({  
                    showotpModal1: true,
                   
                  });
                }
            }
            }
            
      
  }




  handleChanges = otp => this.setState({ otp });
  handleClose= () => {
    this.setState({  showotpModal1: false});
    console.log("OTP Closed");
  }

  handleSubmit1=(e)=> {
    const otpError = otpValidator(this.state.otp);
    if(otpError)
    this.setState({
      otpError:otpError,
    });
   this.setState({ submitted1:true});
  }



  handleAddmore(){
    this.setState({
      
      details:[...this.state.details,""],
    
    })
    }


  handelchange(e,index){
    this.state.details[index]= e.target.value
    
      this.setState({
    
        details:this.state.details,
      })
    }
    
    handleRemovemore(index){
    this.state.details.splice(index,1)
    console.log("array "+this.state.details);
    this.setState({
      details:this.state.details,
    })
    
    }
  
  componentDidMount() {
   
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("photo:  "+JSON.stringify(this.state.pictures));
   
  }
 

    render() {
      const {firstName,lastName,gender,date,country,country1,pincode,registerid,gsanumber,employeecount,name,mobile,company,mobile2,mobileCountryCode,email,anotheremail,city,address1,address2,vehicle,otp,submitted,state,submitted1,} = this.state;
        return(
            <div >
 
                <Container >
               
                  <div >

                <div className="reg-head"><h1>Safe Access Business Registration</h1></div>

                <div>
                {/* ------------------ProgressBar--------------------- */}
                <Row>
                      <Col md="sm" ><Button className="probutton" disabled={this.state.en1} >1</Button></Col>
                      <Col  style={{marginTop:15}}><ProgressBar now={this.state.ProgressBarnum}  /></Col>
                      <Col md="sm"><Button className="probutton" disabled={this.state.en2}>2</Button></Col>
                      <Col style={{marginTop:15}}><ProgressBar now={this.state.ProgressBarnum2} /></Col>
                      <Col md="sm"><Button className="probutton" disabled={this.state.en3}>3</Button></Col>
                      <Col style={{marginTop:15}}><ProgressBar now={this.state.ProgressBarnum3} /></Col>
                      <Col md="sm"><Button className="probutton" disabled={this.state.en4}>4</Button></Col>
                      <Col style={{marginTop:15}}><ProgressBar now={this.state.ProgressBarnum4} /></Col>
                      <Col md="sm"><Button className="probutton" disabled={this.state.en5}>5</Button></Col>

                  </Row>
                  <Row>
                    <Col className="d-inline p-2 " >Personal Details</Col>
                    <Col className="d-inline p-2 ">Business Details</Col>
                    <Col className="d-inline p-2 d-flex justify-content-center">Vehicle & Location</Col>
                    <Col className="d-inline p-2 d-flex justify-content-end  " >Photo Upload</Col>
                    <Col className="d-inline p-2 d-flex justify-content-end ">Device </Col>
                  </Row>


                </div>


{/* ---------------------------Business Owner Details------------------- */}

                {this.state.showOwnerModal == true ?<Form>

<h3><Form.Label>Business Owner Details</Form.Label></h3>
<Form.Row>
<Form.Group as={Col} md="4" controlId="firstName">
     <Form.Label>First Name</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="firstName"  value={firstName}   />
   {submitted && !firstName &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && firstName &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               }
           
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="lastName">
     <Form.Label>Last Name</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="lastName"  value={lastName} />
    {submitted && !lastName &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Last Name is required</div>
           }
           {submitted &&  this.state.lastNameError !=="" && lastName &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.lastNameError}</div>
                                               }
           
   </Form.Group>
 <Form.Group as={Col} md="4" controlId="gender">
     <Form.Label>Gender</Form.Label>
     
     <select type="dropdown" className="form-control" name="gender" value={gender} 
                   placeholder='select' onChange={this.Change}>
            <option  value=""></option>
            <option  value="Male">Male</option>  
            <option  value="Female">Female</option>
            <option  value="Transgender">Transgender</option>
           



                  </select>
                  {submitted && !gender &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">Gender is required</div>
           }
    
           
   </Form.Group>




</Form.Row>
<Form.Row>
<Form.Group as={Col} md="4" controlId="date">
     <Form.Label>DOB</Form.Label>
     
     <div className="dateclass">
               
                   <input  type="date" name="date" value={date} onChange={this.handleDate}  max={this.state.currentdate}/> 
                 
                    
                          
                           </div>
                   {submitted && !date &&
                     <div className="help-block" style ={{fontSize:12,color:"red"}}>Date is required</div>
                       }  
                           
           
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="country">
   <Form.Label>Country</Form.Label>
                 <select type="dropdown" className="form-control" name="country" value={country} 
                               placeholder='select' onChange={this.Change}>
                                <option  value=""></option>  
                        <option  value="India">India</option>
                        <option  value="US">US</option>
                        <option  value="China">China</option>
                        <option  value="UK">Uk</option>
                        <option  value="Japan">Japan</option>
                        <option  value="Germany">Germany</option>
                        <option  value="France">France</option>
                        <option  value="Brazil">Brazil</option>
                        <option  value="Italy">Italy</option>
                        <option  value="Canada">Canada</option>
                        <option  value="Russia">Russia</option>
                        <option  value="Singapore">Singapore</option>
                        <option  value="Newzealand">Newzealand</option>
                        <option  value="Australia">Australia</option>
                        <option  value="Iraq">Iraq</option>
                        <option  value="South Korea">South Korea</option>
                        <option  value="Spain">Spain</option>
                        <option  value="Mexico">Mexico</option>
                        <option  value="Indonesia">Indonesia</option>



                              </select>
                              {submitted && !country &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>
   
   <Form.Group as={Col} md="4" controlId="mobile">
                 <Form.Label>Mobile</Form.Label>
                 
                 <input type="number"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
               onChange={this.handlemobilenumber} name="mobile"  value={mobile} />
                {submitted && !mobile &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile Field is required</div>
                       }
                       {submitted &&  this.state.mobileError !=="" && mobile &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                           }
                       
               </Form.Group>

               


</Form.Row>
</Form>:null}

{/* <--------------------Business Details-----------------> */}


{this.state.showBusinessModal == true ?   <Form>
<Form.Label><h3>Business Details</h3></Form.Label>
<Form.Row>
<Form.Group as={Col} md="4" controlId="Business">
<Form.Label>Business/Company Name</Form.Label>
<input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="company"  value={company} />
    {submitted && !company &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Business/company Name is required</div>
           }
           {submitted &&  this.state.companyError !=="" && company &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.companyError}</div>
                                               }


</Form.Group>
<Form.Group as={Col} md="4" controlId="RegisterId">
<Form.Label>Register ID</Form.Label>
<input type="number"  autocomplete="off" className="form-control"  required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.handleid} name="registerid"  value={registerid} />
    {submitted && !registerid &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Register ID is required</div>
           }
          

</Form.Group>

<Form.Group as={Col} md="4" controlId="GSANumber">
<Form.Label>GSA Number</Form.Label>
<input type="text"  autocomplete="off" className="form-control"  required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.handlenumber} name="gsanumber"  value={gsanumber} />
    {submitted && !gsanumber &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> GSA Number is required</div>
           }
           {submitted &&  this.state.gsanumberError !=="" && gsanumber&&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.gsaNumberError}</div>
                                               }

</Form.Group>


</Form.Row>
<Form.Row>
<Form.Group as={Col} md="4" controlId="employeecount">
<Form.Label>Employee Count</Form.Label>
<input type="number"  autocomplete="off" className="form-control"  required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.handlenumber} name="employeecount"  value={employeecount} />
    {submitted && !employeecount &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Employee Count is required</div>
           }
           {submitted &&  this.state.employeecountError !=="" && employeecount &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.employeecountError}</div>
                                               }

</Form.Group>
<Form.Group controlId="exampleForm.ControlInput1"  as={Col} md="4">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={this.handleemail} />
    {submitted && !email &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Email is required</div>
           }
            {submitted &&  this.state.emailError !=="" && email &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.emailError}</div>
                                               }
 </Form.Group>

</Form.Row>






<div className="show">
{this.state.hideshow == true ?<Form.Row>
<Form.Group as={Col} md="4" controlId="name"style={{marginTop:'30px'}}>
<InputGroup className="mb-4">
   <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1" >Name</InputGroup.Text>
   </InputGroup.Prepend>
   <FormControl
     
     placeholder="Name"
     aria-label="name"
     aria-describedby="basic-addon1" required
     onChange={this.Change}
     name="name"
     value={name}
     
   />
     
  </InputGroup> 
   {submitted && !name &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">Name is required</div>
           }
           {submitted &&  this.state.nameError !=="" && name &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                               }


</Form.Group>




<Form.Group as={Col} md="2"style={{marginTop:'30px'}}>


<PhoneInput className="mb-3" style={{marginTop:'5px'}}
                  international
               //  defaultCountry="IN"
                value={this.state.mobileCountryCode}
                onChange={(e)=>this.mobile(e)}
                required 
                maxLength='5' />
   {submitted && !mobileCountryCode &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country code  is required</div>
                       }
                       {submitted &&  this.state.mobileCountryCodeError !=="" && mobile &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileCountryCodeError}</div>
                                                           }
   </Form.Group>
   <Form.Group as={Col} md="5"style={{marginTop:'30px'}}>
   {/* <Form.Label>Mobile Number </Form.Label> */}
                <InputGroup className="mb-4">
   <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1" >Mobile Number</InputGroup.Text>
   </InputGroup.Prepend>
   <FormControl
     
     placeholder="Enter your register mobile no"
     aria-label="Mobile"
     aria-describedby="basic-addon1" required
     onChange={this.handlemobilenumber1}
     name="mobile2"
     value={mobile2}
     
   />
     
  </InputGroup>  {submitted && !mobile2 &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile Field is required</div>
                       }
                       {submitted &&  this.state.mobileError2 !=="" && mobile2 &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError2}</div>
                                                           }</Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1"  as={Col} md="5">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="name@example.com" name="anotheremail" value={anotheremail} onChange={this.handleanotheremail} />
    {submitted && !anotheremail &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Email is required</div>
           }
            {submitted &&  this.state.anotheremailError !=="" && anotheremail &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.anotheremailError}</div>
                                                           }
 </Form.Group>
 </Form.Row>:null}</div>

</Form> :null}  
{/* <------------------------------Location & Vehicle Details---------> */}


{this.state.showLocationModal == true ?<Form> 
  <h3><Form.Label>Location & Vehicle Details</Form.Label></h3>
<Form.Row>
<h5><Form.Label>Assign Admin *</Form.Label></h5>
<p class="text-info "><Form.Label ><span style={!this.state.admin &&  this.state.submitted ? {color:"red"} :null}>Pls select any one</span> </Form.Label></p>
<Form.Group as={Col} md="3" controlId="self" style={{marginLeft:'100px' }}>

           <Form.Check
         type="radio"
         label="Self"
         name="formHorizontalRadios"
         id="formHorizontalRadios1"
         onClick={() => {
           this.setState({hideshow: false, admin:'self',
           name:"",anotheremail:"",mobile2:"",mobileCountryCode:"",
          nameError:"",anotheremailError:"",mobileError2:"",mobileCountryCodeError:""
           })}}
       />

</Form.Group>
<Form.Group as={Col} md="3" controlId="addanother">

            
       <Form.Check
         type="radio"
         label="Add Another"
         name="formHorizontalRadios"
         id="formHorizontalRadios2"
         onClick={() => {
           this.setState({hideshow: true, admin:'other'
           })}}
           required
       />
       

</Form.Group>

</Form.Row>

<Form.Row>
  
  <Form.Group as={Col} md="4" controlId="country1">
   <Form.Label>Country</Form.Label>
                 <select type="dropdown" className="form-control" name="country1" value={country1} 
                               placeholder='select' onChange={this.Change}>
                                <option  value=""></option>  
                        <option  value="India">India</option>
                        <option  value="US">US</option>
                        <option  value="China">China</option>
                        <option  value="UK">Uk</option>
                        <option  value="Japan">Japan</option>
                        <option  value="Germany">Germany</option>
                        <option  value="France">France</option>
                        <option  value="Brazil">Brazil</option>
                        <option  value="Italy">Italy</option>
                        <option  value="Canada">Canada</option>
                        <option  value="Russia">Russia</option>
                        <option  value="Singapore">Singapore</option>
                        <option  value="Newzealand">Newzealand</option>
                        <option  value="Australia">Australia</option>
                        <option  value="Iraq">Iraq</option>
                        <option  value="South Korea">South Korea</option>
                        <option  value="Spain">Spain</option>
                        <option  value="Mexico">Mexico</option>
                        <option  value="Indonesia">Indonesia</option>



                              </select>
                              {submitted && !country &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>

   <Form.Group as={Col} md="4" controlId="state">
   <Form.Label>State</Form.Label>
                 <select type="dropdown" className="form-control" name="state" value={state} 
                               placeholder='select' onChange={this.Change}>
                                <option  value=""></option>  
                        <option  value="state 1">state 1</option>
                        <option  value="  state 2">state 2</option>
                        <option  value="state 3">state 3</option>
                        <option  value="state 4">state 4</option>
                        



                              </select>
                              {submitted && !state &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="pincode">
                 <Form.Label>Pincode</Form.Label>
                 
                 <input type="number"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
               onChange={this.handlemobilenumber} name="pincode"  value={pincode} />
                {/* {submitted && !pincode &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile Field is required</div>
                       }
                       {submitted &&  this.state.mobileError !=="" && mobile &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                           } */}
                       
               </Form.Group>
  
</Form.Row>
<Form.Row>
<Form.Group as={Col} md="4" controlId="city">
   <Form.Label>City</Form.Label>
                 <select type="dropdown" className="form-control" name="city" value={city} 
                               placeholder='select' onChange={this.Change}>
                                <option  value=""></option>  
                        <option  value="city 1">city 1</option>
                        <option  value="city 2">city 2</option>
                        <option  value="city 3">city 3</option>
                        <option  value="city 4">city 4</option>
                        



                              </select>
                              {submitted && !state &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="address">
     <Form.Label>Address 1</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="address1"  value={address1}   />
   {/* {submitted && !Address1 &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && Address1 &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               } */}
           
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="Address2">
     <Form.Label>Address 2</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="address2"  value={address2}   />
   {/* {submitted && !firstName &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && firstName &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               } */}
           
   </Form.Group>
 
  
</Form.Row>
<Form.Row>
<Form.Group as={Col} md="4" controlId="vehicle">
     <Form.Label>Vehicle</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="vehicle"  value={vehicle}   />
   {/* {submitted && !firstName &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && firstName &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               } */}
           
   </Form.Group>
   <Form.Group as={Col} md="8">
<Form.Group style={{marginLeft:'50%',marginTop:'7%'}}><Button className="probutton" onClick={(e)=>this.handleAddmore(e)}>+</Button>
 <Form.Label style={{marginLeft:'3%'}}>Add another Location</Form.Label></Form.Group>

  </Form.Group> 

  
</Form.Row>

<hr></hr>

{this.state.details.map((value,index)=>{ 
  return(

<Form key={index}>
  {/* <Form.Group>
    <Form.Control type="text" value={country} onChange={(e=>this.handelchange(e,index))}></Form.Control>
  </Form.Group> */}


  <Form.Row>
<h5><Form.Label>Assign Admin *</Form.Label></h5>
<p class="text-info "><Form.Label ><span style={!this.state.admin &&  this.state.submitted ? {color:"red"} :null}>Pls select any one</span> </Form.Label></p>
<Form.Group as={Col} md="3" controlId="self" style={{marginLeft:'100px' }}>

           <Form.Check
         type="radio"
         label="Self"
         name="formHorizontalRadios"
         id="formHorizontalRadios1"
         onClick={() => {
           this.setState({hideshow: false, admin:'self',
           name:"",anotheremail:"",mobile2:"",mobileCountryCode:"",
          nameError:"",anotheremailError:"",mobileError2:"",mobileCountryCodeError:""
           })}}
       />

</Form.Group>
<Form.Group as={Col} md="3" controlId="addanother">

            
       <Form.Check
         type="radio"
         label="Add Another"
         name="formHorizontalRadios"
         id="formHorizontalRadios2"
         onClick={() => {
           this.setState({hideshow: true, admin:'other'
           })}}
           required
       />
       

</Form.Group>


<Form.Group as={Col} md="2">
<Form.Group style={{marginTop:'7%'}}><Button className='removebutton' onClick={()=>this.handleRemovemore(index)} style={{marginLeft:'10%'}}>-</Button> 
 Remove</Form.Group>

  </Form.Group> 
</Form.Row>

<Form.Row>
  
  <Form.Group as={Col} md="4" controlId="country1">
   <Form.Label>Country</Form.Label>
                 <select type="dropdown" className="form-control" name="country1" value={country1} 
                               placeholder='select' onChange={this.Change}>
                         <option  value=""></option>  
                        <option  value="India">India</option>
                        <option  value="US">US</option>
                        <option  value="China">China</option>
                        <option  value="UK">Uk</option>
                        <option  value="Japan">Japan</option>
                        <option  value="Germany">Germany</option>
                        <option  value="France">France</option>
                        <option  value="Brazil">Brazil</option>
                        <option  value="Italy">Italy</option>
                        <option  value="Canada">Canada</option>
                        <option  value="Russia">Russia</option>
                        <option  value="Singapore">Singapore</option>
                        <option  value="Newzealand">Newzealand</option>
                        <option  value="Australia">Australia</option>
                        <option  value="Iraq">Iraq</option>
                        <option  value="South Korea">South Korea</option>
                        <option  value="Spain">Spain</option>
                        <option  value="Mexico">Mexico</option>
                        <option  value="Indonesia">Indonesia</option>



                              </select>
                              {submitted && !country &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>

   <Form.Group as={Col} md="4" controlId="state">
   <Form.Label>State</Form.Label>
                 <select type="dropdown" className="form-control" name="state" value={state} 
                               placeholder='select' onChange={this.Change}>
                                <option  value=""></option>  
                        <option  value="state 1">state 1</option>
                        <option  value="  state 2">state 2</option>
                        <option  value="state 3">state 3</option>
                        <option  value="state 4">state 4</option>
                        



                              </select>
                              {submitted && !state &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="pincode">
                 <Form.Label>Pincode</Form.Label>
                 
                 <input type="number"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
               onChange={this.handlemobilenumber} name="pincode"  value={pincode} />
                {/* {submitted && !pincode &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile Field is required</div>
                       }
                       {submitted &&  this.state.mobileError !=="" && mobile &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                           } */}
                       
               </Form.Group>
  
</Form.Row>
<Form.Row>
<Form.Group as={Col} md="4" controlId="city">
   <Form.Label>City</Form.Label>
                 <select type="dropdown" className="form-control" name="city" value={city} 
                               placeholder='select' onChange={this.Change}>
                                <option  value=""></option>  
                        <option  value="city 1">city 1</option>
                        <option  value="city 2">city 2</option>
                        <option  value="city 3">city 3</option>
                        <option  value="city 4">city 4</option>
                        



                              </select>
                              {submitted && !state &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country is required</div>
                       }
   
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="address">
     <Form.Label>Address 1</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="address1"  value={address1}   />
   {/* {submitted && !Address1 &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && Address1 &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               } */}
           
   </Form.Group>
   <Form.Group as={Col} md="4" controlId="Address2">
     <Form.Label>Address 2</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="address2"  value={address2}   />
   {/* {submitted && !firstName &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && firstName &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               } */}
           
   </Form.Group>
 
  
</Form.Row>
<Form.Row>
<Form.Group as={Col} md="4" controlId="vehicle">
     <Form.Label>Vehicle</Form.Label>
     
     <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
   onChange={this.Change} name="vehicle"  value={vehicle}   />
   {/* {submitted && !firstName &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
           }
           {submitted &&  this.state.firstNameError !=="" && firstName &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.firstNameError}</div>
                                               } */}
           
   </Form.Group>
 
 <Form.Group as={Col} md="8">
<Form.Group style={{marginLeft:'50%',marginTop:'7%'}}><Button className="probutton" onClick={(e)=>this.handleAddmore(e)}>+</Button>
 <Form.Label style={{marginLeft:'3%'}}>Add another Location</Form.Label></Form.Group>

  </Form.Group> 



</Form.Row>

<hr></hr>

  
</Form>

    )
  })}

{/* <----------------------Adding Another Location ------------------> */}
<div className="show">
{this.state.hideshow == true ?<Form.Row>
  
<Form.Group as={Col} md="4" controlId="name"style={{marginTop:'30px'}}>
<InputGroup className="mb-4">
   <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1" >First Name</InputGroup.Text>
   </InputGroup.Prepend>
   <FormControl
     
     placeholder="Name"
     aria-label="name"
     aria-describedby="basic-addon1" required
     onChange={this.Change}
     name="name"
     value={name}
     
   />
     
  </InputGroup> 
   {submitted && !name &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">Name is required</div>
           }
           {submitted &&  this.state.nameError !=="" && name &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                               }


</Form.Group>

<Form.Group as={Col} md="4" controlId="name"style={{marginTop:'30px'}}>
<InputGroup className="mb-4">
   <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1" > Last Name</InputGroup.Text>
   </InputGroup.Prepend>
   <FormControl
     
     placeholder="Name"
     aria-label="name"
     aria-describedby="basic-addon1" required
     onChange={this.Change}
     name="name"
     value={name}
     
   />
     
  </InputGroup> 
   {submitted && !name &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left">Last Name is required</div>
           }
           {submitted &&  this.state.nameError !=="" && name &&
                                               <div style ={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                               }


</Form.Group>




<Form.Group as={Col} md="2"style={{marginTop:'30px'}}>


<PhoneInput className="mb-3" style={{marginTop:'5px'}}
                  international
               //  defaultCountry="IN"
                value={this.state.mobileCountryCode}
                onChange={(e)=>this.mobile(e)}
                required 
                maxLength='5' />
   {submitted && !mobileCountryCode &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Country code  is required</div>
                       }
                       {submitted &&  this.state.mobileCountryCodeError !=="" && mobile &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileCountryCodeError}</div>
                                                           }
   </Form.Group>
   <Form.Group as={Col} md="5"style={{marginTop:'30px'}}>
   {/* <Form.Label>Mobile Number </Form.Label> */}
                <InputGroup className="mb-4">
   <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1" >Mobile Number</InputGroup.Text>
   </InputGroup.Prepend>
   <FormControl
     
     placeholder="Enter your register mobile no"
     aria-label="Mobile"
     aria-describedby="basic-addon1" required
     onChange={this.handlemobilenumber1}
     name="mobile2"
     value={mobile2}
     
   />
     
  </InputGroup>  {submitted && !mobile2 &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile Field is required</div>
                       }
                       {submitted &&  this.state.mobileError2 !=="" && mobile2 &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError2}</div>
                                                           }</Form.Group>

                                                           
  <Form.Group controlId="exampleForm.ControlInput1"  as={Col} md="5">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="name@example.com" name="anotheremail" value={anotheremail} onChange={this.handleanotheremail} />
    {submitted && !anotheremail &&
           <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Email is required</div>
           }
            {submitted &&  this.state.anotheremailError !=="" && anotheremail &&
                                                           <div style ={{fontSize:12,color:"red"}}>{this.state.anotheremailError}</div>
                                                           }
 </Form.Group>
 </Form.Row>:null}</div>

</Form> :null}

{this.state.showPhotoModal ==true ? <Form>

<Form.Row>
<Form.Group>
<div style={{ marginRight: "15px" }}>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              
              label=""
              buttonText="Choose Images"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            /></div>
</Form.Group>

  
</Form.Row>
<Form.Row>
<Form.Group as={Col} md="12">
  <Button className="button1"><BiCloudUpload /> Upload</Button>
</Form.Group>
</Form.Row>


</Form>:null }

{/* <------------------ Device Model ---------------> */}

{this.state.showDeviceModal ==true ? 
<Form>
  <br></br>
  <Form.Label>Choose Device  </Form.Label>
<Form.Row>

<Form.Group>

  <Form.Control type="number"></Form.Control>
</Form.Group>

  
</Form.Row>



</Form>:null }



<Form.Row>
   <Form.Group controlId=""as={Col} md="2" style={{align:'center'}}>
   <Button className="button1"  onClick={this.back} style={{marginTop:10,width:'100px' ,hight:'50px'}} disabled={this.state.viewback} >
      Back</Button >  
   </Form.Group><br></br>
{this.state.hidebutton ==true ? 
   <Form.Group controlId=""as={Col} md="2" style={{align:'center'}}>
   <Button className="button1"  onClick={this.next} style={{marginTop:10,width:'100px' ,hight:'50px'}} disabled={this.state.viewnext}>
      Skip </Button>  
   </Form.Group> :null}  <br></br>

   {this.state.hidebuttonsubmit ==true ? 
   <Form.Group controlId=""as={Col} md="3" style={{align:'center'}}>
   <Button className="button1"   style={{marginTop:10,width:'100px' ,hight:'50px'}} disabled={this.state.viewsubmit}>
      Submit</Button>  
   </Form.Group>:null}  <br></br>

 </Form.Row>







</div>

{/* OTP model */}

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
      {submitted1 && !otp &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left ">OTP is required</div>
                       }
                        {submitted1 && otp.length !== 6 && otp &&
                       <div  style ={{fontSize:12,color:"red"}} className="nav-left">OTP is must be 6-digits</div>
                       }
         <label data-error="wrong" data-success="right" for="defaultForm-email">Enter your OTP</label>
     


       <Row className="justify-content-md-center">

<Button  className="button1"   onClick={this.handleSubmit1}  style={{marginTop:10}}>
Verify</Button> 

<Button  className="button1"   
onClick={this.resendChange}  style={{marginTop:10,marginLeft:40}}>Resend</Button>

</Row>          

                                     </Modal.Body>

     </Modal>

</Container>
           </div>
       )
   }
   
}



export default Registration;
