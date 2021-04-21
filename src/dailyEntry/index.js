import { ImCross,ImCheckmark } from "react-icons/im";
import React, { Component } from 'react';
import { Container, Form,Col,Button,Table,Card } from 'react-bootstrap';
import MenuBar from '../components/menu/index';
import { BsFillCircleFill } from "react-icons/bs";

class DailyEntry extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        accessid:'',
        employeeid:'',
        firstName:'',
        lastName:'',
        facilityid:'',
        declaration:'',
        Temperature:'',
        mask:'',
        entry:'',
        submitted:false,
      };
      this.handlesubmit =this.handlesubmit.bind(this);
  }

  Change=(event)=>{
    const{name,value}= event.target;
    this.setState({
      [name]:value,
    });
  }

  
  handlesubmit(){
    this.setState({
      submitted:true,
    });
  }s


  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      
  }

    render() {
      const{accessid,employeeid,facilityid,firstName,lastName,declaration,mask,Temperature,submitted}=this.state;

        return(
          <div>
             <MenuBar/>
             <Container>
              <div>
              <div className="reg-head"><h1>Safe Access - Daily Employee Entry Details</h1></div>
               
              

              </div>



              <Card style={{ width: 'auto' }}>
                
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Daily Entry</Card.Title>
                  <Card.Text>
                   
                  </Card.Text>
                  <Form autoComplete="off">
                            <Form.Row>
                              <Form.Group as={Col} md="4">
                                <Form.Label>Safe Access ID</Form.Label>
                                <Form.Control type="text" name="accessid" value={accessid} onChange={this.Change} readOnly></Form.Control>
                                {submitted && !accessid &&
                          <div  style ={{fontSize:12,color:"red"}} className="nav-left">Safe Access ID is required</div>
                          }
                              </Form.Group>
                              {/* <Form.Group as={Col} md="4">
                                <Form.Label>Employee ID</Form.Label>
                                <Form.Control type="text" name="employeeid" value={employeeid} onChange={this.Change}></Form.Control>
                                {submitted && !employeeid &&
                          <div  style ={{fontSize:12,color:"red"}} className="nav-left">Employee ID is required</div>
                          }
                              </Form.Group> */}
                              <Form.Group as={Col} md="4">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" value={firstName} onChange={this.Change} readOnly></Form.Control>
                                {submitted && !firstName &&
                          <div  style ={{fontSize:12,color:"red"}} className="nav-left">First Name is required</div>
                          }
                              </Form.Group>
                              <Form.Group as={Col} md="4">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName" value={lastName} onChange={this.Change} readOnly></Form.Control>
                                {submitted && !lastName &&
                          <div  style ={{fontSize:12,color:"red"}} className="nav-left">Last Name is required</div>
                          }
                              </Form.Group>
                              
                            </Form.Row>
                            <Form.Row>
                         
                            <Form.Group as={Col} md="4">
                                <Form.Label>Facility ID</Form.Label>
                                <Form.Control type="text" name="facilityid" value={facilityid} onChange={this.Change} readOnly></Form.Control>
                                {submitted && !facilityid &&
                          <div  style ={{fontSize:12,color:"red"}} className="nav-left">Facility ID is required</div>
                          }
                              </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Self-Declaration Status</Form.Label>
                                <Form.Control type="text" name="declaration" value={declaration} onChange={this.Change} readOnly></Form.Control>
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
                                          {/* </Form.Group><Form.Group as={Col} md="6"> */}
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
              
              
              
              
              
              
                                {/* {submitted && !mask &&
                          <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mask is required</div>
                          } */}
                              </Form.Group>
              
              
                              
                              {/* <Form.Group as={Col} md="4" >
                               <div style={{marginTop:'5%',marginLeft:'10%'}} >
                                    <Button className="button1 " onClick={this.handlesubmit}>Submit</Button></div>
                              </Form.Group> */}
                            </Form.Row>
                             
                            </Form> 
                  <Button className="button1">Submit</Button>
              <hr></hr><div onScroll={true}>
                  <Table  >
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
                              </Table></div>
                </Card.Body>
              </Card>

             </Container>
            </div>
        )
    }
}

export default DailyEntry;
