
import React ,{Component}from 'react';
import { Container, Form ,Col,Table,Modal,} from 'react-bootstrap';
import { Button } from 'reactstrap';
import { FiUserPlus } from "react-icons/fi";
import MenuBar from '../components/menu/index';


import Swal from "sweetalert2";
import { components } from 'react-select';

class addBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             
               blockName:'',
               blockNumber:'',
               submitted: false,
               showotpModal:false,
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.open         = this.open.bind(this);

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
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
   
    handleSubmit(e) {
        this.setState({submitted:true})
        e.preventDefault();
    
}

    componentDidMount() {
      
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        

    }


    render() {
        
        const {blockName, blockNumber, submitted ,showotpModal} = this.state;
        var React = require('react');
        var QRCode = require('qrcode.react');
      
        return (
            
            <div >
               <MenuBar/>
                <Container>
                <div className="reg-head"> <h1>Safe Access - Add Block</h1></div>
                  <div style={{marginTop:'5%'}}>
                    
                        <div>

            <Form>
            <Form.Row>
                <Form.Group as={Col} md="5">
                    <Form.Label>Block Name</Form.Label>
                        <Form.Control type="text" placeholder="Block Name" name="blockName" value={blockName} onChange={this.handleChange}></Form.Control>
                        {submitted && !blockName &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Block Name is required</div>
            }
                </Form.Group>

                <Form.Group as={Col} md="5">
                    <Form.Label>Block Number</Form.Label>
                        <Form.Control type="Number" placeholder="Block Number" name="blockNumber" value={blockNumber} onChange={this.handleChange}></Form.Control>
                        {submitted && !blockNumber &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Block Number is required</div>
            }
                </Form.Group>


            </Form.Row>

<Form.Row>
    <div  style={{marginLeft:'35%'}}>
<Button  type="submit" className="button1" onClick={this.handleSubmit}>
                Add <FiUserPlus style={{margin:5}}/>
                </Button>
   
                </div>
    </Form.Row>
            </Form>


                        </div>
                        <br></br>

                        <div>
                        <Table className="striped bordered hover">
  <thead className="thead-dark">
    <tr>
      <th>Safe Access ID</th>
      <th>Block Nmae</th>
      <th>Block Number</th>
      <th>Belongs to Facility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href onClick={this.open} class="text-primary ">1111111</a> </td>
      <td>Phase1</td>
      <td>4B</td>
      <td>Regus</td>
    </tr>
    <tr>
      <td class="text-primary ">22222</td>
      <td>Phase2</td>
      <td>3C</td>
      <td>Regus</td>
    </tr>
    <tr>
    <td class="text-primary ">D123</td>
      <td>Phase2</td>
      <td>3C</td>
      <td>Regus</td>
    </tr>
  </tbody>
</Table>
                        </div>
                        <Modal show={this.state.showotpModal }  onHide={this.handleClose} backdrop={ 'static' }>
      <Modal.Header closeButton >
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginLeft:100}}>
                                         
        <Form>
                <Form.Row>
                
                <Form.Group as={Col} md="12" controlId="mobile">
                <h1><Form.Label > Block : 4B</Form.Label></h1>
                <Form.Label class=" font-weight-bold">Safe Access QR-Code</Form.Label>
                </Form.Group>  </Form.Row>
              <Form.Row>
                         
                        <Form.Group  as={Col} md="12">
                        <QRCode style={{width:'auto',height:250}}  value="QR CODE working"/><br></br>
                        
                       
                        </Form.Group> </Form.Row>
                        
                         <Form.Row>
                        <Form.Group as={Col} md="12">
   
                       
                      <Button as={Col} md="12" style={{marginLeft:85}} className="button1"  onClick={this.handleClose} >Close</Button>
                        
                        
                </Form.Group>
                
                </Form.Row>
              </Form>
         

                                      </Modal.Body>

      </Modal>
      </div>
                </Container>
            </div>
        )
    }
}



export default addBlock;
