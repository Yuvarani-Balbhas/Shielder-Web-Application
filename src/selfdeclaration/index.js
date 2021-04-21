import { ImCross,ImCheckmark } from "react-icons/im";
import React, { Component } from 'react';
import { Container, Form,Col,Button,Table,Row,ListGroup } from 'react-bootstrap';
import { IoIosAddCircle ,IoIosAddCircleOutline} from "react-icons/io";


class SelfDeclaration extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        travel:'',
        visited:'',
        returndate:'',
        relationship:'',
        lastcontact:'',
        signature:'',
        infected:'',
        chestpain:'',
        fever:'',
        cougf:'',
        breath:'',
        wfh:'',
        valid:'in',
        submitted:false,
        hideshow:false,
        hideshow1:false,
      };
      this.handlesubmit =this.handlesubmit.bind(this);
  }

  Change=(event)=>{
    const{name,value}= event.target;
    this.setState({
      [name]:value,
    });
  }

  
  handlesubmit(e){
    const{travel,infected,visited,returndate,relationship,lastcontact,signature,wfh,fever,cougf,breath,chestpain,}=this.state;
    this.setState({ submitted:true   });
   
    if(travel === "yes" && infected === "yes" && wfh === "yes"){
      if(!visited && !returndate && !relationship && !lastcontact && !signature && !wfh &&! fever && !cougf && !breath &&!chestpain){
        this.setState({ submitted:true   });
      }
      
     
    }
    else if(travel==="no" && infected === "no"){

    }

    
  }


  componentDidMount() {
   
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("travel------------"+this.state.valid);
        
  }

    render() {
      const{visited,returndate,relationship,lastcontact,signature,travel,infected,submitted}=this.state;

        return(
          <div>
             <Container>
              <div>
              <div className="reg-head"><h1>Safe Access - Self Declaration</h1></div>
                <div style={{margin:'5%'}}>
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
    <td >Shoortness of Breath</td>
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
                <Form.Group as={Col} md="3" style={{marginLeft:'10%'}}>
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
               <Form.Row>
                 <Form.Group as={Col} md="12" className="d-flex justify-content-center">
                   <Button className="button1" onClick={this.handlesubmit}>Submit</Button>
                 </Form.Group>
               </Form.Row>
              </Form>

              </div>

             

              </div>

             </Container>
            </div>
        )
    }
}

export default SelfDeclaration;
