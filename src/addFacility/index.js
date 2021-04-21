import React from "react";
import { Container, Row, Col, Form, Button,Text,Table } from "react-bootstrap";
import {mobileValidator,} from '../Core/utils'
import MenuBar from '../components/menu/index';

class addFacility extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          facilityName: '',
          facilityAddress: '',
          incharge: '',
          mobileCode: '',
          mobileNumber: '',
      };
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
        [name]: value
    });


    if(value.length<10){
        this.setState({
            mobileError : "Invalid mobile number" ,
        });
        console.log("changeing mobile"+ this.state.mobileError);
    }else{
        this.setState({
            mobileError : "" ,
        });
        console.log("changing mobile"+ this.state.mobileError);

    }

};


  handleSubmit(e) {

this.setState({submitted:true});    
     e.preventDefault();
    
  }

  componentDidMount() {
   
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   
  
        }
        
    
    
  render() {
    const {facilityName, facilityAddress, incharge, mobile, Code,submitted} = this.state;
    
       return (
         <div>
      <MenuBar/>

      <Container>
      <div className="reg-head"> <h1> Salf Access - Add Facility</h1></div>
        
            <Form >
              <Form.Row>
              <Form.Group as={Col} md="4" controlId="faciltyName">
                  <Form.Label>Facility Name</Form.Label>
                  <input type="text"    autocomplete="off" className="form-control" name="facilityName" value={facilityName} onChange={this.handleChange} />
        {submitted && !facilityName &&
   
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">Facility Name is required</div>
                        }
                      

                </Form.Group>

               
                <Form.Group as={Col} md="4" controlId="facilityAddress">
                  <Form.Label>Facility Address</Form.Label>
                  <input type="text"   autocomplete="off"  className="form-control"  
        onChange={this.handleChange}   name="facilityAddress" value={facilityAddress} />
        {submitted && !facilityAddress &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Facility address is required</div>
                        }
                       
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="incharge">
                  <Form.Label>Incharge </Form.Label>
                  <input type="text"   autocomplete="off" className="form-control" name="incharge" value={incharge} onChange={this.handleChange} />
        {submitted && !incharge &&
   
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">Incharge  is required</div>
                        }
                      

                </Form.Group>
              </Form.Row>
              <Form.Row>
               
                                                            
                <Form.Group as={Col} md="2" controlId="Code">
                  <Form.Label>Country Code *</Form.Label>
                  <select type="dropdown"  className="form-control" name="Code" value={Code} 
                                placeholder='select' onChange={this.handleChange}>
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

                               </select>
                               {submitted && !Code &&
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile code is required</div>
                        }
                        

                </Form.Group>
                <Form.Group as={Col} md="3" controlId="mobile">
                  <Form.Label>Mobile </Form.Label>
                  <input type="number"  autocomplete="off" className="form-control" name="mobile" value={mobile} onChange={this.changeMobile} />
        {submitted && !mobile &&
   
                        <div  style ={{fontSize:12,color:"red"}} className="nav-left">Mobile is required</div>
                        }
                        {submitted &&  this.state.mobileError !=="" && mobile &&
                                                            <div style ={{fontSize:12,color:"red"}}>{this.state.mobileError}</div>
                                                            }


                </Form.Group>
                <Form.Group as={Col} md="3" style={{marginTop:'20px'}}> <Button  type="submit" className="button1" onClick={this.handleSubmit}>Add</Button></Form.Group>
              </Form.Row>
              <Form.Row>
   
    </Form.Row>
              </Form>
    
      <h4 className="c-grey-900 mB-20">Facility List</h4>

      <Table striped bordered hover>
    <thead className="thead-dark">
    <tr>
      
        <th scope="col">Safe Access Id</th>
        <th scope="col">Facility Name</th>
        <th scope="col">Facility Address</th>
        <th scope="col">Incharge Name</th>
        <th scope="col">Mobile Number</th>
        <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    {
      <tr>
        <th scope="row">11111</th>
        <td scope="row">Regus</td>
        <td scope="row">Chennai</td>
        <td scope="row">xyz</td>
        <td scope="row">9544345643</td>
        <td scope="row"><Button className="button1"  href="./addBlock" >Add Block</Button></td>
        
      </tr>
  }
    </tbody>
    </Table>
    </Container>
      </div>
      
      
  )
}
}
export default addFacility;
