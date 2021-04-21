import React, { Component } from 'react';
import { Container, Row, Col, Form, Button,InputGroup,FormControl,Modal, Table } from "react-bootstrap";
import backgroundImage25 from "../images/demovideo.mp4";
import {emailValidator, mobileValidator, firstNameValidator,lastNameValidator,
  companyValidator,registeridValidation,gsaNumberValidation,employeecountValidation,anotherEmailValidator,passwordValidator,
  mobileValidator2,countryValidator, mobileCountryCodeValidator, genderValidator, dateValidator, nameValidator, otpValidator} from '../Core/utils'
import { date } from 'yup';
// import Sidemenu from '../components/sidemenu';
import MenuBar from '../components/menu/index'


class Cleaning extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        shilderid:'',
        facilityname:'',
        inchange:'',
        mobile:'',
        status:'',
        scheduledatetime:'',
        blockname:'',
        sno:'',
        date:'',
        time:'',
        assign:'',
        facility:'',
        block:'',
        currentdate: new Date().toISOString().split("T")[0],
        hideshow:false,
        showotpModal1:false,
        submitted:false,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  Change = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value,
       
       
   

    });
    
  // // console.log(firstNameError);
};

  clicked=()=>{ this.setState({ hideshow:true ,showotpModal1:true})
  }
  handleClose= () => {
    this.setState({  showotpModal1: false});
    console.log("OTP Closed");
  }

  handleDate=(event)=>{
    const {name, value} = event.target;
  
    this.setState({
      
      [name]: value,
      dateError: dateValidator(value),
    });
  
    
   
  }


  handleSubmit(){
    const{date,time,facility,block,assign}=this.state;
    this.setState({submitted:true });
    if(date  && time  && facility && block && assign ){
          console.log("working");
      this.setState({showotpModal1: false});
    }
   
  }

  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  //  myFunction() {
  //   // Display the current position of the video in a p element with id="demo"
  //   document.getElementById("videolength").innerHTML = this.state.vid.currentTime;
  // }

    render() {
     const{shilderid,facilityname,inchange,mobile,sno,scheduledatetime,blockname,status,date,time,assign,facility,block,submitted}=this.state;
        return(
            <div>
              <MenuBar/>
             <Container>
      <div className="reg-head"><h1>Safe Access - Cleaning </h1></div>
      <br></br>

     <div class="row">
        <div  class="col-md-3">
          <div >
            <Button className="button1">Facility Cleaning</Button>     </div> <br></br>     
         
            <Button className="button1" style={{marginRight:'5%'}}>Vechicle Cleaning</Button>
         
            </div>

            <div >
            <div  >
      
        <div class="col-md-12">
                  <table class="schdule-table table table-bordered" >
								  <thead class="thead-dark font-weight-normal">
								    <tr>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Safe Access Id</th>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Facility Name</th>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Inchange</th>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Mobile</th>
                      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Action</th>

                                   
								    </tr>
								  </thead>
								  <tbody>
                  {/* {
                  this.props.user && this.props.user.length > 0 && this.props.user.map((user) => ( */}



								    <tr>
                     <th>	123</th>		      
								      <td>{facilityname}aaaa</td>				      
								      <td>{inchange}xyz</td>	
                      <td>{mobile}1234567890</td>				      
								      <td><Button  className="button1" onClick={this.clicked}>Create Schdule</Button></td>
                         
								    </tr>
          {/* //        ))
          // } */}
								  </tbody>
							</table>
        </div>
        
        </div>


        {this.state.hideshow ?  <div class="row col-md-12" >
       
        <div class="col-md-12">
                  {/* <JsonToTable json={myJson} style={{alignSlef:'center'}}/>  */}
                  <Table>
                  <table class="schdule-table table table-bordered" >
								  <thead class="thead-dark">
								    <tr>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>S NO</th>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Schedule Date&Time</th>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Facility Name</th>
								      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Block Name</th>
                      <th class="head" scope="col" style={{fontSize:16,fontFamily:'Poppins'}}>Status</th>

                                   
								    </tr>
								  </thead>
								  <tbody>
                  {/* {
                  this.props.user && this.props.user.length > 0 && this.props.user.map((user) => ( */}



								    <tr>
                     <th class="name" scope="row">1</th>		      
								      <td>{this.state.date}  & {this.state.time}</td>				      
								      <td>{this.state.facility}</td>	
                      <td>{this.state.block}</td>				      
								      <td> created </td>
                         
								    </tr>
                 {/* ))
          } */}
								  </tbody>
							</table>
              </Table>
        </div>
        
        </div>:null}


            </div>
            
            </div>
       

    <Modal show={this.state.showotpModal1 }  onHide={this.handleClose} backdrop={ 'static' }
        size="lg"
       
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Create Schedule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Date</Form.Label>
                <Form.Control  type="date" name="date" value={date} onChange={this.handleDate}  min={this.state.currentdate}/> 
                {submitted &&  !date &&
                           <div style ={{fontSize:12,color:"red"}}>Date is required</div>
                                                            }
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>Time</Form.Label>
                <Form.Control  as="select" name="time" value={time} onChange={this.Change}  min={this.state.currentdate}> 
               <option></option>
               <option value="9AM">9 AM</option>
                <option value="10AM">10 AM</option>
                
                </Form.Control>
                {submitted &&  !time &&
                           <div style ={{fontSize:12,color:"red"}}>Time is required</div>
                                                            }
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Assign To</Form.Label>
                <Form.Control  as="select" name="assign" value={assign} onChange={this.Change}  min={this.state.currentdate}> 
               <option></option>
               <option value="1">1</option>
                <option value="2">2</option>
                </Form.Control>
                {submitted &&  ! assign &&
                           <div style ={{fontSize:12,color:"red"}}>Assogn To is required</div>
                                                            }                                        
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Facility</Form.Label>
                  <Form.Control type="text" name="facility" Value={facility} onChange={this.Change}></Form.Control>
                  {submitted &&  ! facility &&
                           <div style ={{fontSize:12,color:"red"}}>Facility is required</div>
                                                            }  
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>Block</Form.Label>
                  <Form.Control type="text" name="block" Value={block} onChange={this.Change} ></Form.Control>
                  {submitted &&  ! block &&
                           <div style ={{fontSize:12,color:"red"}}>Block is required</div>
                                                            }  
                </Form.Group>
              </Form.Row>
            </Form>

        </Modal.Body>
        <Modal.Footer style={{marginRight:'39%'}}>
        <Button className="button1" onClick={this.handleSubmit}>Schedule</Button>
      </Modal.Footer>
      </Modal>
               
                
             
            
             
               
             </Container>
            </div>
        )
    }
}

export default Cleaning;
