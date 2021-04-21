import React, {  } from 'react';
import { Container, Row, Col, Form, Button,InputGroup,FormControl,Modal,Table } from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';
import OtpInput from 'react-otp-input';

import {emailValidator, mobileValidator, firstNameValidator,lastNameValidator,
  companyValidator,registeridValidation,gsaNumberValidation,employeecountValidation,anotherEmailValidator,passwordValidator,
  mobileValidator2,countryValidator, mobileCountryCodeValidator, genderValidator, dateValidator, nameValidator, otpValidator} from '../Core/utils'
  import { BsUpload } from "react-icons/bs";
  import { FiUserPlus } from "react-icons/fi";
  import MenuBar from '../components/menu/index';
class addEmployee extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        employeeId:"",
        Name:"", 
        mobileCountryCode:'',  
        mobileNumber:'',
        emailId:'',
        otp:'',
        BulkUpload: '',
         showotpModal1:false,
         file:'',
         submitted1:false,
         mobileError:'',
         emailError:'',
         showotpModalForm:false,
         shownotif:false,
        showA:false,
        search:'',
        requestlist:'',
        tabledata:[ {saferid:'22213',employeeid:'12311',name:'krishna',mobile:'7894561230',email:'krishna@gmail.com',status:'added'},
                    {saferid:'22214',employeeid:'12312',name:'prem',mobile:'91357915',email:'prem@gmail.com',status:'pending'},
                    {saferid:'22215',employeeid:'12313',name:'Ram',mobile:'1546983216',email:'ram@gmail.com',status:'waithing for verifi'},
                    {saferid:'22216',employeeid:'12314',name:'kumar',mobile:'958658959',email:'kumar@gmail.com',status:'prnding'},]
      };
      this.handleSubmitOpt = this.handleSubmitOpt.bind(this);
      this.handleSubmitOpt1 = this.handleSubmitOpt1.bind(this);
      this.handleView=this.handleView.bind(this);
      this.handleSubmit    = this.handleSubmit.bind(this);
     
  }
  

  Change = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
    

};
// handleChanges = otp => this.setState({ otp });
// clicked = () => {
//   this.setState({  showotpModal1: true});
//   console.log("OTP open");
// }

// handleClose= () => {
//   this.setState({  showotpModal1: false,otp:''});
//   console.log("OTP Closed");
// }

changeMobile = (event) => {
  const {name, value} = event.target;
  this.setState({
      [name]: value,
      mobileError :mobileValidator(value),
  });
 

};
handleemail=(event)=>{
  const{name,value}=event.target;
this.setState({
  [name]:value,
  emailError    : emailValidator(value),

})
}

searchby = (evt) => {
  const{requestlist}=this.state;
  const val = evt.target.value;
  // const requestlist = cloneDeep(this.state.requestoriginallist);
  console.log('search ---->' + val);
  if(val) {
    this.setState({ requestlist: [] }, ()=> {
      const results =this.state.tabledata.filter(requestlist, (item) => {
        return (item.requester.indexOf(val)>-1 || item.mobile.indexOf(val)>-1 || item.meetingDate.indexOf(val)>-1
            || item.startTime.indexOf(val)>-1 || item.metal.indexOf(val)>-1 || item.product.indexOf(val)>-1
            || item.description.indexOf(val)>-1 );
      });
      this.setState({ requestlist :results });
    });
  } else {
    this.setState({ requestlist: [] }, ()=>{
      this.setState({ requestlist });
    });
  }
}
handleSubmitOpt(){
  const{emailId,employeeId,Name,mobile,mobileCountryCode,emailError}=this.state;
  this.setState({submitted:true});
      
    
    if(!employeeId ==""  && ! Name ==""  && !mobileCountryCode =="" && !mobile ==""  && !emailError ){
             this.setState({showotpModal1:true,shownotif:true});
    }
    
  
}
handleSubmitOpt1(){
  this.setState({showotpModal1:true,});
   
}
handleSubmit(e) {
  this.setState({submitted:true});
  this.setState({submitted1:true}); 
    e.preventDefault();

}
handleView(){
  this.setState({
    showotpModalForm:!this.state.showotpModalForm,
  });
}




  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   console.log(this.state.email);
  }

    render() {
      const {employeeId, Name,mobileCountryCode,mobile,emailId,otp,submitted,search,submitted1,} = this.state;
   
      return(
          <div>
             <MenuBar/>
             
            <Container>
            <div className="reg-head"> <h1>Safe Access - Add Employee Details</h1></div>
           <Row>
      
    </Row>
  
             
             <Col>
            <Button className="button1" style={{margin:20}} onClick={this.handleView} >
             AddEmployee <FiUserPlus style={{margin:5}}/></Button>
             </Col>




   

       {this.state.showotpModalForm == true ?    
        <Form>
             <Form.Row>
<Form.Group as={Col} md="4" controlId="employeeId">
      <Form.Label> Employee Id</Form.Label>
      
      <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
    onChange={this.Change} name="employeeId"  value={employeeId}   />
    {submitted && !employeeId &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Employee Id is required</div>
            }
           
            
    </Form.Group>
    
    <Form.Group as={Col} md="4" controlId="Name">
      <Form.Label>Name</Form.Label>
      
      <input type="text"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
    onChange={this.Change} name="Name"  value={Name} />
     {submitted && !Name &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Name is required</div>
            }
            
            
    </Form.Group>
    <Form.Group  as={Col} md="4" controlId="emailId">
    <Form.Label>Email Id</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name="emailId" value={emailId} onChange={this.handleemail} />
     {submitted && !emailId&&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Email Id is required</div>
            }
             {submitted &&  this.state.emailError !=="" && emailId &&
                                                <div style ={{fontSize:12,color:"red"}}>{this.state.emailError}</div>
                                                }
  </Form.Group>

  </Form.Row>
  <Form.Row>   
<Form.Group as={Col} md="2">
  <Form.Label>Country Code</Form.Label>
<InputGroup  >
    
    <FormControl
      as="select"
      placeholder="Enter your Country Code"
      aria-label="Country code"
      aria-describedby="basic-addon1" required
      onChange={this.Change}
      name="mobileCountryCode"
      value={mobileCountryCode}
      
    >
<option  value=""></option>  

<option  value="+91">+91</option>  
<option  value="+1">+1</option>
<option  value="+61">+61</option>
<option  value="+55">+55</option>
<option  value="+33">+33</option>
<option  value="+49">+49</option>
<option  value="+91">+91</option>
<option  value="+964">+964</option>
<option  value="+39">+39</option>
<option  value="+81">+81</option>
<option  value="+52">+52</option>
<option  value="+64">+64</option>
<option  value="+7">+7</option>
<option  value="+65">+65</option>
<option  value="+82">+82</option>
<option  value="+44">+44</option>
      </FormControl>
    </InputGroup>
    {submitted && !mobileCountryCode &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Country Code is required</div>
                        }
                        {submitted &&  this.state.mobileCountryCodeError !=="" && mobile &&
                                                            <div style ={{fontSize:12,color:"red"}}>{this.state.mobileCountryCodeError}</div>
                                                            }
    </Form.Group>
    <Form.Group as={Col} md="2"></Form.Group>
    <Form.Group as={Col} md="4" controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  
                  <input type="number"  autocomplete="off" className="form-control" required pattern="[0-9a-zA-Z_.-]*"
                onChange={this.changeMobile} name="mobile"  value={mobile} />
                 {submitted && !mobile &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile Field is required</div>
                        }
                        {submitted &&  this.state.mobileError !=="" && mobile &&
                                                            <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                            }
                        
                </Form.Group>

                <Form.Group controlId=""as={Col} md="4">
    <div style={{marginTop:20,marginLeft:100}}>
    <Button className="button1"  onClick={this.handleSubmitOpt} >
    Verify</Button>  </div>
    </Form.Group>

               
   </Form.Row>
   
  <Form.Row>   


    
  {/* <Form.Group controlId=""as={Col} md="4">
    <div style={{marginLeft:200}}>
    <Button className="button1"  onClick={this.handleSubmitOpt} >
    Verify</Button>  </div>
    </Form.Group> */}
    <Form.Group as={Col} md="4">

     {/* <OtpInput className="otpcard1" style={{mb:"10%"}}
    
        name="otp"
        value={otp}
        onChange={this.handleChanges}
        numInputs={6}
        //separator={<span>-</span>}
        isInputNum
       
        
      />     */}

    </Form.Group>

     
      {/* <Form.Group controlId=""as={Col} md="4" >
    <Button className="button1"  onClick={this.handleSubmit} >
     AddEmployee <FiUserPlus style={{margin:5}}/></Button>  
    </Form.Group> */}
    </Form.Row>  

</Form>  :null} 

<Form>

    {/* <div className="showup"> */}
    <Form.Row>
    <Form.Group controlId=""as={Col} md="4" >
      <Form.Label>Bulk Upload</Form.Label>
      <Form.File.Input accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  />

    </Form.Group>
    </Form.Row>
   <Form.Row>
    <Form.Group as={Col} md="2" style={{marginTop:'3%'}}>
      <Button className="button2"  onClick={this.handleClick} >
        Template
      </Button>
    </Form.Group>
    
    <Form.Group as={Col} md="3" style={{marginTop:'3%'}}>
      <Button className="button2"  onClick={this.handleClick} >
        Upload <BsUpload/>
      </Button>
    </Form.Group>
      </Form.Row>
      {/* </div> */}
      </Form> 
      
      
      
      <br></br>
      <Form>
        <Form.Row><Form.Group as={Col} md="6">

      <h4 className="c-grey-900 mB-20">Employee List</h4>
     </Form.Group> <Form.Group as={Col} md="3">
  
<Form.Control type="text" placeholder="Search...." name="search" value={search} onChange={(evt => this.searchby(evt))} />
      
      
      </Form.Group></Form.Row>
      </Form>

      <div className="scroll">

      <Table striped bordered hover>
    <thead className="thead-dark font-weight-normal ">
    <tr>
      
        <th scope="col">Safe Access  Id</th>
        <th scope="col">Employee ID</th>
        <th scope="col">Name</th>
        <th scope="col">Mobile Number</th>
        <th scope="col">Email ID</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
  


{
       this.state.tabledata &&  this.state.tabledata.length > 0 &&  this.state.tabledata.map((user, userkey) => (
          <tr key={userkey}>
           
           <th scope="row">{user.saferid}</th>
          <td>{user.employeeid}</td>
          <td>{user.name}</td>
          <td>{user.mobile}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
          <td scope="row"><Button className="button1" >verify</Button></td>
          {/* <td scope="row"><Button className="button1" onClick={this.handleSubmitOpt1} >verify</Button></td> */}
                                                            
      </tr>
                                                    ))
                                                }
    </tbody>
    </Table>

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

<Button  className="button1"  onClick={this.handleSubmit}  style={{marginTop:10}}>
Verify</Button> 


</Row>          

                                      </Modal.Body>

      </Modal>


      
      </Container>
	</div>
        )
                      }
                    }            
export default addEmployee;
