import React, { Component ,useState} from 'react';
import { Container, Row, Col, Form,Button} from "react-bootstrap";
import 'react-accessible-accordion/dist/fancy-example.css';



class Task extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        sensorid:'',
        sensorName:'',
        motorid:'',
        motorname:'',
        relayname:'',
        relayid:'',
        module:'',
        dropdown:'',
        showsensor:false,
        showmotor:false,
        showrelay:false,
        value1:'',
        value2:'',
        countries:[],

     };
     this.handlesubmit = this.handlesubmit.bind(this);
  }
Change = (event) => {
  const {name, value} = event.target;
  this.setState({
      [name]: value
  });
  
}

handleclick=(event)=>{
  const {name, value} = event.target;
  this.setState({
      [name]: value
  });


}
loading=(e)=>{
  const{dropdown,sensorid,sensorName,motorid,motorname,relayid,relayname,value1,value2}=this.state;
  if(dropdown =="sensor"){
        this.setState({showsensor:true,    
          showmotor:false,
          showrelay:false,
         value1:'',
         value2:'',

        
        });
        console.log("showmodel-----"+this.state.dropdown);

  }
  else if(dropdown =="motor"){
    this.setState({showmotor:true,
      showsensor:false,
      showrelay:false,
      value1:'',
      value2:'',
     
    });
    console.log("showmodel-----"+this.state.dropdown);

}
else if(dropdown =="relay"){
  this.setState({showrelay:true,
    showsensor:false,
    showmotor:false,
    value1:'',
    value2:'',
    
  });
   
    console.log("showmodel-----"+this.state.dropdown);

}

}

handlesubmit=(e)=>{
  const{value1,value2,dropdown,sensorid,sensorName,motorid,motorname,relayid,relayname}=this.state;
  if(dropdown =="sensor"){
    this.setState({
      value1:sensorid,
      value2:sensorName,

    
    });
    console.log("showmodel-----"+this.state.dropdown);

}
else if(dropdown =="motor"){
this.setState({
  value1:motorid,
  value2:motorname,
});
console.log("showmodel-----"+this.state.dropdown);

}
else if(dropdown =="relay"){
this.setState({
value1:relayid,
value2:relayname,
});

console.log("showmodel-----"+this.state.dropdown);

}
  
}

handleAddmore(){
this.setState({
  
  countries:[...this.state.countries,""],

})
}

handelchange(e,index){
this.state.countries[index]= e.target.value

  this.setState({

    countries:this.state.countries,
  })
}

handleRemovemore(index){
this.state.countries.splice(index,1)
console.log("array "+this.state.countries);
this.setState({
  countries:this.state.countries,
})

}


  componentDidMount() {
     
  }

  componentDidUpdate() {
     
  }

    render() {
     const{sensorid,sensorName,motorid,motorname,relayid,relayname,module,dropdown,value1,value2,country}=this.state;
      
     return(
       
            <div >
                <Container>
<h1>Form</h1>
{this.state.countries.map((value,index)=>{ 
  return(
<Form key={index}>
  <Form.Group>
    <Form.Control type="text" value={country} onChange={(e=>this.handelchange(e,index))}></Form.Control>
  </Form.Group>
  <Button onClick={()=>this.handleRemovemore(index)}>-</Button>
</Form>

  )
})}

<Button onClick={(e)=>this.handleAddmore(e)}>+</Button>



                
                </Container>

              
            </div>
        )
    }
}

export default Task;
