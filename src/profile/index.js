import React from 'react';
import { Container, Row, Col, Form, Button,Modal,Nav,Card,Table,  } from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-phone-number-input/style.css'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import Avatar from 'react-avatar';
import { ImCross,ImCheckmark } from "react-icons/im";
import {  IoIosAddCircleOutline} from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";




// import OTPInput, { ResendOTP } from "otp-input-react";
class Profile extends React.Component {
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
         showotpModal:false,
         datas:"https://youtu.be/4F6yNyyftRg",
         


     };
    //  const [value, setValue] = useState();
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.MenuControl  = this.MenuControl.bind(this);
    this.open         = this.open.bind(this);
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

  open(){
    this.setState({
        showotpModal:true,
    });
}
handleClose= () => {
    this.setState({  showotpModal: false});
    console.log("OTP Closed");
  }


  handleChangeSize(size) {
    this.setState({ size });
  }
  
  MenuControl(){
    console.log("----------working-----------");
    this.setState({  menucontrol:!this.state.menucontrol,});
  }


  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     console.log(this.state.mobileCountryCode); 
  }

    render() {
     const{mobile,otp,lastName,accessid,employeeid,firstName,facilityid,mask,declaration,Temperature,mobileError,mobileCountryCode,DropdownButton,visited,returndate,relationship,lastcontact,signature,travel,infected,submitted}=this.state;
     const { size, placement, show } = this.state;
     var React = require('react');
        var QRCode = require('qrcode.react');
      
     return(
       
            <div>
              
              <Row>
                {this.state.menucontrol == false ?<Col md="3"> 
              {/* <ProSidebar  > */}
              <ProSidebar style={{position:'fixed'}} >
  <Menu iconShape="square">
    <MenuItem >Welcome to Safe Access <Avatar name="Dark" size="40"  round={true} src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" /></MenuItem>
    <MenuItem><Nav><Nav.Link eventKey="1"  href="/dailyentry">
        <text > Daily Entry</text>
        </Nav.Link></Nav> </MenuItem>
    
    <MenuItem><Nav><Nav.Link eventKey="1"  href="/certification">
        <text > Certification</text>
        </Nav.Link></Nav> </MenuItem>

    <SubMenu title="Add Option" >
    
        <MenuItem> <Nav> <Nav.Link eventKey="1" href="/addEmployee">
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
 



  </Col>   :null}
  
  {/* <div style={{marginTop:25,marginLeft:'5%'}}> <FiMenu size="30px" onClick={this.MenuControl}></FiMenu>  </div> */}
  
   <Col >
              <div style={{marginTop:30}} >
                <Container  ><Row  style={{marginLeft:400}}>
                  <h2>Safe Access Profile</h2></Row><br></br>
                {/* <Row>
                <Col>
                  
                <Card style={{ width: 'auto' }}>
                
   <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Daily Entry</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Form autoComplete="off">
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Safe Access ID</Form.Label>
                  <Form.Control type="text" name="accessid" value={accessid} onChange={this.Change}></Form.Control>
                  {submitted && !accessid &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Safe Access ID is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control type="text" name="employeeid" value={employeeid} onChange={this.Change}></Form.Control>
                  {submitted && !employeeid &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Employee ID is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" value={firstName} onChange={this.Change}></Form.Control>
                  {submitted && !firstName &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
            }
                </Form.Group>
                
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" value={lastName} onChange={this.Change}></Form.Control>
                  {submitted && !lastName &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Last Name is required</div>
            }
                </Form.Group>
              <Form.Group as={Col} md="4">
                  <Form.Label>Facility ID</Form.Label>
                  <Form.Control type="text" name="facilityid" value={facilityid} onChange={this.Change}></Form.Control>
                  {submitted && !facilityid &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Facility ID is required</div>
            }
                </Form.Group>
              <Form.Group as={Col} md="4">
                  <Form.Label>Self-Declaration Status</Form.Label>
                  <Form.Control type="text" name="declaration" value={declaration} onChange={this.Change}></Form.Control>
                  {submitted && !declaration &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Self-Declaration Status is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Temperature</Form.Label>
                  <Form.Control type="text" name="Temperature" value={Temperature} onChange={this.Change}></Form.Control>
                  {submitted && !Temperature &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Temperature is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="4" style={{marginLeft:'4%'}}> 
                  
                  <Form.Label>Mask</Form.Label>
                  <Form>  
              <Form.Row>
                         
                   <div style={{marginTop:15}}></div> <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Yes"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            />
                             </Form.Group><Form.Group as={Col} md="6"> 
                            <Form.Check
                             type="radio"
                              label="No"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                       
                        </Form.Row>
                        </Form>






                   {submitted && !mask &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mask is required</div>
            } 
                </Form.Group>


                
                 <Form.Group as={Col} md="4" >
                 <div style={{marginTop:'5%',marginLeft:'10%'}} >
                      <Button className="button1 " onClick={this.handlesubmit}>Submit</Button></div>
                </Form.Group> 
              </Form.Row>
               
              </Form> 
    <Button className="button1">Submit</Button>
<hr></hr>
    <Table >
                <thead className="thead-dark">
    <tr>
      <th>Safe Access ID</th>
      <th>Employee ID</th>
      <th>Facility</th>
      <th>Date & Time</th>
      <th>Self-Declaration Status</th>
      <th>Temperature</th>
      <th>Mask</th>
      <th>App Color</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-primary "><a href onClick={this.open} class="text-primary ">1111111</a> </td>
      <td>434</td>
      <td>Regus</td>
      <td>21-1-2021 & 10AM</td>
      <td ><ImCross class="text-danger"/></td>
      <td ><ImCheckmark class="text-success"/></td>
      <td><ImCross class="text-danger"/></td>
      <td><BsFillCircleFill class="text-warning"/></td>
    </tr>
    <tr>
    <td class="text-primary ">21212 </td>
      <td>4345</td>
      <td>Regus</td>
      <td>21-1-2021 & 10AM</td>
      <td><ImCheckmark class="text-success"/></td>
      <td><ImCheckmark class="text-success"/></td>
      <td><ImCheckmark class="text-success"/></td>
      <td><BsFillCircleFill class="text-success"/></td>
    </tr>
    <tr>
    <td class="text-primary ">32133 </td>
      <td>4347</td>
      <td>Regus</td>
      <td>21-1-2021 & 10AM</td>
      <td><ImCross class="text-danger"/></td>
      <td><ImCross class="text-danger"/></td>
      <td><ImCross  class="text-danger"/></td>
      <td><BsFillCircleFill  class="text-danger"/></td>
    </tr>
  </tbody>
                </Table>
  </Card.Body>
</Card>
</Col>
</Row> */}

<hr></hr>

<Row >
  <Col>
<Card style={{ width: 'auto' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title > <h4> Self Declaration </h4></Card.Title>
    <Card.Text>
    <div>
              
                <div >
              <Form>
                <Form>
                <Form.Row>
                  <Form.Group as={Col} md="12">
                  <Form.Label> 1. Have you travelied abroad in past 2 months</Form.Label>

                    </Form.Group>
                    <Form.Group as={Col} md="1"> 
                  <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ hideshow: true,travel:'yes'
            })}}
            required
         
        />
        </Form.Group>
        <Form.Group as={Col} md="1">
                 <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({  hideshow:false,travel:'no'
            })}}
           
            
        />
             
                  </Form.Group>
                  {submitted && !travel &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Please Select is required</div>
            }
                </Form.Row>
                </Form>
<Form>
                {this.state.hideshow == true ? <Form.Row>
                  <Form.Group as={Col} md="5">
                    <Form.Label>Visited Area</Form.Label>
                    <Form.Control as="textarea" rows={3} name="visited" value={visited} onChange={this.Change}></Form.Control>
                    {submitted && !visited &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Visited Area is required</div>
            }
                  </Form.Group>
                  <Form.Group as={Col} md="5">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control as="textarea" rows={3} name="returndate" value={returndate} onChange={this.Change}></Form.Control>
                    {submitted && !returndate &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Return Date is required</div>
            }
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                  <div style={{marginTop:'25%'}} >
                  <Button className="button1"><IoIosAddCircleOutline/></Button><br></br>
                  <Form.Label class="font-weight-bold"style={{marginLeft:'15%'}}>More</Form.Label>
                  </div>
                  </Form.Group>
                </Form.Row>:null}</Form>
                <Form.Row>
                  <Form.Group as={Col} md="12">
                  <Form.Label>  2. Have you been in contact with people being infected , suspected or diagnosed with COVID-19 ?</Form.Label>

                    </Form.Group>
                    <Form.Group as={Col} md="1"> 
                  <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ hideshow1: true,infected:'yes'
            })}}
         
        />
        </Form.Group>
        <Form.Group as={Col} md="1">
                 <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ hideshow1: false,infected:'no'
            })}}
            
        />
       
                  </Form.Group>
                  {submitted && !infected &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Please Select is required</div>
            }
                </Form.Row>
                {this.state.hideshow1== true ?   <Form.Row>
                  <Form.Group as={Col} md="5">
                    <Form.Label>Relationship with People</Form.Label>
                    <Form.Control as="textarea" rows={3} name="relationship" value={relationship} onChange={this.Change}></Form.Control>
                    {submitted && !relationship &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Relationship is required</div>
            }
                  </Form.Group>
                  <Form.Group as={Col} md="5">
                    <Form.Label>Last Contact Date</Form.Label>
                    <Form.Control as="textarea" rows={3} name="lastcontact" value={lastcontact} onChange={this.Change}></Form.Control>
                    {submitted && !lastcontact &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Last Contact is required</div>
            }
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                  <div style={{marginTop:'25%'}} >
                  <Button className="button1"><IoIosAddCircleOutline /></Button><br></br>
                  <Form.Label class="font-weight-bold"style={{marginLeft:'15%'}}>More</Form.Label>
                  </div>
                  </Form.Group>
                </Form.Row>:null}
                <Form.Row>
                  <Form.Group>
                    <Form.Label>3. Please state whether you have experienced/ experiencing the following Symptoms</Form.Label>
               
              
                <br></br>
                <Table>
                <thead className="thead-dark">
    <tr >
      <th>Symptoms</th>
      <th> No/Yes </th>
     
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fever </td>
      <td><Form>
                 <Form.Check
                 inline
          type="radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ fever:'no'
            })}}
            
        />  
      
       <Form.Check
          type="radio"
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ fever:'yes'
            })}}
            
        /></Form> </td>
     
    </tr>
    <tr>
      <td >Cough</td>
      <td><Form>
                 <Form.Check
                 inline
          type="radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ cougf:'no'
            })}}
            
        />  
      
       <Form.Check
          type="radio"
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ cougf:'yes'
            })}}
            
        /></Form> </td>
    </tr>
    <tr>
    <td >Shortness of Breath</td>
    <td><Form>
                 <Form.Check
                 inline
          type="radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ breath:'no'
            })}}
            
        />  
      
       <Form.Check
          type="radio"
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ breath:'yes'
            })}}
            
        /></Form> </td>
     
    </tr>
    <tr>
    <td >Chest pain</td>
    <td><Form>
                 <Form.Check
                 inline
          type="radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ chestpain:'no'
            })}}
            
        />  
      
       <Form.Check
          type="radio"
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ chestpain:'yes'
            })}}
            
        /></Form> </td>
     
    </tr>
  </tbody>

                </Table>
                {submitted && !this.state.valid &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Please choose Symptomes is required</div>
            }
                 </Form.Group>

                </Form.Row>
                <Form>
                <Form.Row>
                <Form.Group as={Col} md="3" >
                  <Form.Label>4. Can you work form home</Form.Label><br></br>
                  {submitted && !this.state.wfh &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Please choose any one option is required</div>
            }

            
                </Form.Group>
                
                <Form.Group as={Col} md="3" style={{marginLeft:'13%'}}>
                 <Form.Check
                 inline
                //  label="Yes"
          type="radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ wfh:'no'
            })}}
            
        />  
      
       <Form.Check
          type="radio"
          // label="No"
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={() => {
            this.setState({ wfh:'yes'
            })}}
            
        />


                </Form.Group>
                </Form.Row>
                </Form>
                <Form>
                <Form.Row>
                  <Form.Group>
                <text>I Acknowleged that the info that i have give is accurate and complete </text><br></br>
                  <Form.Control as="textarea" placeholder="Signature" name="signature" value={signature} onChange={this.Change}s ></Form.Control>
                  {submitted && !signature &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Signature is required</div>
            }
            </Form.Group>
            </Form.Row>
                </Form>
               {/* <Form.Row>
                 <Form.Group as={Col} md="12" className="d-flex justify-content-center">
                   <Button className="button1" onClick={this.handlesubmit}>Submit</Button>
                 </Form.Group>
               </Form.Row> */}
              </Form>

              </div>

             

              </div>
  







    </Card.Text>
    <Button className="button1">Submit</Button>
  </Card.Body>
</Card>
</Col>           
</Row>

      </Container>
      </div>
      </Col></Row>


      <Modal show={this.state.showotpModal }  onHide={this.handleClose} backdrop={ 'static' }>
      <Modal.Header closeButton >
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginLeft:100}}>
                                         
        <Form>
                <Form.Row>
                
                <Form.Group as={Col} md="12" controlId="mobile">
                <h4><Form.Label > shielder ID: 11111</Form.Label></h4>
                <Form.Label class=" font-weight-bold">Safe Access QR-Code</Form.Label>
                </Form.Group>  </Form.Row>
              <Form.Row>
                         
                        <Form.Group  as={Col} md="12">
                        <QRCode style={{width:'auto',height:250}}  value={this.state.datas} /><br></br>
                        
                       
                        </Form.Group> </Form.Row>
                        
                         <Form.Row>
                        <Form.Group as={Col} md="12">
   
                       
                      <Button as={Col} md="6" style={{marginLeft:50}} className="button1"  onClick={this.handleClose} >Close</Button>
                        
                        
                </Form.Group>
                
                </Form.Row>
              </Form>
         

                                      </Modal.Body>

      </Modal>
            </div>
        )
    }
}

export default Profile;
