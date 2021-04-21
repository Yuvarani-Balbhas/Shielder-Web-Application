
import React from 'react';
import { Container, Form ,Col,Button,Table,Modal,Row,} from 'react-bootstrap';
import Select from 'react-select';
import Swal from "sweetalert2";
import {mobileValidator,} from '../Core/utils'
import QRCode from "react-qr-code";
import MenuBar from '../components/menu/index';

class addVehicle extends React.Component {
    constructor() {
        super();
        this.state = {
            vehicle: {
               vehicleType: '',
               vehicleNumber: '',
               DriverName: '',
               DriverMobile: '',
               Numberofseats: '',
               select: '',
               submitted: false,
               mobileError:'',
               showotpModal1:true,
           },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    
    };
    changeMobile = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            mobileError :mobileValidator(value),
        });
       
      
      };

      clicked = () => {
        this.setState({  showotpModal1: true});
        console.log("OTP open");
      }
      
      handleClose= () => {
        this.setState({  showotpModal1: false});
        console.log("OTP Closed");
      }

    handleSubmit(e) {
        this.setState({submitted:true});
        e.preventDefault();
    
}

    componentDidMount() {
      
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        

    }


    render() {
        
        const {vehicleType, vehicleNumber, DriverName, DriverMobile, seats, select, submitted } = this.state;
      
      
        return (
            <div >
              <MenuBar/>
                <Container>
                
                <div className="reg-head"> <h1>Safe Access - Add Vehicle</h1></div>
<div style={{marginLeft:'10%'}}>
                <Form >
              <Form.Row>
              <Form.Group as={Col} md="6">
    <Form.Label>Vehicle Type</Form.Label>
    <Form.Control as="select" name="vehicleType" value={vehicleType} onChange={this.handleChange}>
      <option ></option>
      <option value="Ambulance">Ambulance</option>
      <option value="Bus" >Bus</option>
      <option value="Car">Car</option>
     
    </Form.Control>
    {submitted &&  !vehicleType &&
    <div style ={{fontSize:12,color:"red"}}>Vehicle Type is required</div>
                                                            }
  </Form.Group>
  <Form.Group as={Col} md="6">
                      <Form.Label>Driver Name</Form.Label>
               <Form.Control type="text" name="DriverName" value={DriverName}  onChange={this.handleChange}></Form.Control>
               {submitted &&  !DriverName &&
                <div style ={{fontSize:12,color:"red"}}>DriverName is required</div>
                                                            }
               </Form.Group>
 
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="6">
<Form.Label>Vehicle Number</Form.Label>
<Form.Control type="text" name="vehicleNumber" value={vehicleNumber}  onChange={this.handleChange}></Form.Control>
{submitted &&  !vehicleNumber &&
    <div style ={{fontSize:12,color:"red"}}>Vehicle Numberis required</div>
                                                            }
  </Form.Group>

               <Form.Group as={Col} md="6">
                 <Form.Label> Diver Mobile Number</Form.Label>
                 <Form.Control type="number" name="DriverMobile" value={DriverMobile}  onChange={this.changeMobile}></Form.Control>
                 {submitted &&  !DriverMobile &&
                      <div style ={{fontSize:12,color:"red"}}>Driver Mobile Number is required</div>
                                                            }
                  {submitted &&  this.state.mobileError !=="" && DriverMobile &&
                  <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                            }
                       </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="6">
                 <Form.Label>Number of Seats</Form.Label>
                 <Form.Control type="number" name="seats" valur={seats}  onChange={this.handleChange}></Form.Control>
                 {submitted &&  !seats &&
                    <div style ={{fontSize:12,color:"red"}}>Seat count  is required</div>
                                                            }
                       </Form.Group>
                       <div style={{marginTop:'2%'}}>
                       <Form.Group as={Col} md="6" style={{width:'20%'}} >
                           
                <Button className="button1"  onClick={this.handleSubmit}>Add</Button>
            </Form.Group>
            </div>
              </Form.Row>
          
                </Form>
                </div>
                <h4 className="c-grey-900 mB-20">Vehicle List</h4>
                <Table striped bordered hover>
    <thead className="thead-dark">
    <tr>
      
        <th scope="col">Safe Access Id</th>
        <th scope="col">Vehicle Type</th>
        <th scope="col">Vehicle Number</th>
        <th scope="col">Number Of Seats</th>
        <th scope="col">Driver Name</th>
        <th scope="col">Driver Mobile NO</th>
    </tr>
    </thead>
    <tbody>
    {
      <tr>
        <th scope="row"> <a onClick={this.clicked}>11111</a> </th>
        <td scope="row">Bus</td>
        <td scope="row">TN 09 BB 2222</td>
        <td scope="row">13</td>
        <td scope="row">Ram</td>
        <td scope="row"> 9544345643</td>
        
      </tr>
  }
    </tbody>
    </Table>


    <Modal show={this.state.showotpModal1 }  onHide={this.handleClose} backdrop={ 'static' }>
      <Modal.Header closeButton >
          <Modal.Title >Safer Access QR-Code </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <h3>Car</h3>

        <Row className="justify-content-md-center">

        <QRCode value="working"> </QRCode></Row> <Row>
            <br></br>

<Button className="button1"  style={{marginLeft:"40%",marginTop:"10%"}}>Close</Button>
</Row>          

                                      </Modal.Body>

      </Modal>

               



               
                </Container>
            </div>
        )
    }
}



export default addVehicle;
