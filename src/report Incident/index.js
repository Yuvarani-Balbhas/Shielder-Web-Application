
import React, { Component } from 'react';
import { Container, Form,Col,Button } from 'react-bootstrap';
import Select from 'react-select';
import Switch from "react-switch";
import MenuBar from '../components/menu/index';


class reportIncident extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        Incident : {
         personName : '',
         incident : '',
         incidentBrief : '',
         typeOfIncident:'',
         //Checkbox : '',
         submitted : false,
         checked: false,
      },
     

    
  }
  this.handleChange =this.handleChange.bind(this);
  this.handleSwitch =this.handleSwitch.bind(this);

}
handleSubmit=()=>{
    this.setState({
        submitted:true,
    });
}

handleChange(event){
const{name,value}= event.target;
this.setState({
      [name]:value,
});
}
handleSwitch(checked) {
    this.setState({ checked });
  }


  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     
  }

    render() {
     const{personName, typeOfIncident, incidentBrief, Checkbox,checked, submitted} = this.state;
     const incidentType= [
      {label: "Self", value: 'Self'},
       {label: "Others", value: 'Others'},
     ];

        return(
          <div >
              <MenuBar/>
                <Container>
                <div className="reg-head"> <h1>Safe Access - Report Incident</h1></div>
                <div style={{marginLeft:'10%'}}>

                      <Form>
                          <Form.Row>
                              <Form.Group as={Col} md="4">
                                  <Form.Label>Person Name</Form.Label>
                                  <Form.Control type="text" name="personName" value={personName}  onChange={this.handleChange}></Form.Control>
                                  {submitted &&  !personName &&
                                                            <div style ={{fontSize:12,color:"red"}}>Person Name is required</div>
                                                            }
                              </Form.Group>
                              <Form.Group as={Col} md="4">
                                  <Form.Label>Type Of Incident</Form.Label>
                                  <Form.Control as="select" name="typeOfIncident" value={typeOfIncident}  onChange={this.handleChange}>
                                      <option value=""></option>
                                      <option value="self">Self</option>
                                      <option value="other">Other</option>
                                  </Form.Control>
                                  {submitted &&  !typeOfIncident &&
                                                      <div style ={{fontSize:12,color:"red"}}>Type Of Incident is required</div>
                                                      }
                              </Form.Group>
                              <Form.Group as={Col} md="4">
                                  <Form.Label>Incident Brief</Form.Label>
                                  <Form.Control as="textarea" rows={3} placeholder="Self Quarantined for 14 days" name="incidentBrief" value={incidentBrief} ></Form.Control>
                                  {/* {submitted &&  !incidentBrief &&
                                                      <div style ={{fontSize:12,color:"red"}}>Type Of Incident is required</div>
                                                      } */}
                              </Form.Group>
                          </Form.Row>
                          <Form.Row><Form.Group as={Col} md="3">
                              <Form.Label>Want your identity to be confidental   </Form.Label>
                             
                              </Form.Group>
                              <Form.Group>
                              <Switch onChange={this.handleSwitch} checked={this.state.checked} />
                              <Form.Label style={{padding:10}}>{checked ? "on" : "off"}</Form.Label>
                              </Form.Group>
                              </Form.Row>
                          <Form.Row>
                              
                              <Form.Group as={Col} md="12">
                                  <div style={{marginLeft:'35%'}}>
                             <Button className="button1" onClick={this.handleSubmit}>Submit</Button>
                             </div>
                              </Form.Group>
                          </Form.Row>
                      </Form>
                    </div>
                </Container>
         
                                                  </div>
        )
    }
}

export default reportIncident;
