import { ImCross,ImCheckmark } from "react-icons/im";
import React, { Component } from 'react';
import { Container, Form,Col,Button,Table } from 'react-bootstrap';
import MenuBar from '../components/menu/index';


class VisitorManagement extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        accessid:'',
        employeeid:'',
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
  }


  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      
  }

    render() {
     const{accessid,employeeid,facilityid,declaration,entry,mask,Temperature,submitted}=this.state;
        return(
            <div>
              <MenuBar/>
             <Container>
              <div>
              <div className="reg-head"><h1>Safe Access - Visitor Management</h1></div>
                <div style={{margin:'5%'}}>
              <Form>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Safe Access ID</Form.Label>
                  <Form.Control type="text" name="accessid" value={accessid} onChange={this.Change}></Form.Control>
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
                  <Form.Label>Facility ID</Form.Label>
                  <Form.Control type="text" name="facilityid" value={facilityid} onChange={this.Change}></Form.Control>
                  {submitted && !facilityid &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Facility ID is required</div>
            }
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="4">
                  <Form.Label>Self-Declaration Status</Form.Label>
                  <Form.Control type="text" name="declaration" value={declaration} onChange={this.Change}></Form.Control>
                  {submitted && !declaration &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Self-Decleration Status is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Temperature</Form.Label>
                  <Form.Control type="text" name="Temperature" value={Temperature} onChange={this.Change}></Form.Control>
                  {submitted && !Temperature &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Temperature is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="3" style={{marginLeft:'4%'}}> 
                  
                  <Form.Label>Mask</Form.Label>
                  <Form>  
              <Form.Row>
                         
                   <div style={{marginTop:15}}></div> <Form.Row>
                       <Form.Group as={Col} md="4">
                           <Form.Check
                              type="radio"
                               label="Yes"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            />
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






                   {submitted && !mask &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mask is required</div>
            } 
                </Form.Group>
                
                {/* <Form.Group as={Col} md="4">
                  <Form.Label>Mask</Form.Label>
                  <Form.Control type="text" name="mask" value={mask} onChange={this.Change}></Form.Control>
                  {submitted && !mask &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mask is required</div>
            }
                </Form.Group> */}
              </Form.Row>
                <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Entry Status</Form.Label>
                  <Form.Control type="text" name="entry" value={entry} onChange={this.Change}></Form.Control>
                  {submitted && !entry &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Entry Status is required</div>
            }
                </Form.Group>
                <Form.Group as={Col} md="8" >
                 <div style={{marginTop:'3%',marginLeft:'10%'}} >
                      <Button className="button1 " onClick={this.handlesubmit}>Submit</Button></div>
                </Form.Group>
                </Form.Row>
              </Form>

              </div>

                <Table onScroll={true} >
                <thead className="thead-dark">
    <tr>
      <th>Safe Access ID</th>
      <th>Employee ID</th>
      <th>Facility</th>
      <th>Date & Time</th>
      <th>Self-Declaration Status</th>
      <th>Temperature</th>
      <th>Mask</th>
      <th>Entry Status</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-primary ">1111111 </td>
      <td>434</td>
      <td>Regus</td>
      <td>21-1-2021 & 10AM</td>
      <td ><ImCross class="text-danger"/></td>
      <td ><ImCheckmark class="text-success"/></td>
      <td><ImCross class="text-danger"/></td>
      <td>Hold</td>
    </tr>
    <tr>
    <td class="text-primary ">21212 </td>
      <td>4345</td>
      <td>Regus</td>
      <td>21-1-2021 & 10AM</td>
      <td><ImCheckmark class="text-success"/></td>
      <td><ImCheckmark class="text-success"/></td>
      <td><ImCheckmark class="text-success"/></td>
      <td>Allowed</td>
    </tr>
    <tr>
    <td class="text-primary ">32133 </td>
      <td>4347</td>
      <td>Regus</td>
      <td>21-1-2021 & 10AM</td>
      <td><ImCross class="text-danger"/></td>
      <td><ImCross class="text-danger"/></td>
      <td><ImCross  class="text-danger"/></td>
      <td>Denied</td>
    </tr>
  </tbody>
                </Table>

              </div>

             </Container>
            </div>
        )
    }
}

export default VisitorManagement;
