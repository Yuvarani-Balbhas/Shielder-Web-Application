import React, { Component  } from 'react';
import { Container, Row, Col, Form,InputGroup,FormControl,Modal,ProgressBar,Card,CardDeck } from "react-bootstrap";
import backgroundImage25 from "../images/demovideo.mp4";
import { Player, ControlBar } from'video-react';
import { Button } from 'reactstrap';
import ReactPlayer from 'react-player'
import VideoPlayer from 'react-video-js-player';

import { FiFilePlus } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { Checkmark } from 'react-checkmark'
import MenuBar from '../components/menu/index'




class Certification extends React.Component  {
  constructor(props) {
      super(props);
      this.state = {
        files:null,
         video1:'',
         video1length:backgroundImage25.duration,
         videostart:'',
         videostatus:'',
         videoend:'',
         videoprogress:'',
         vid:'',
         videotitle:'',
         videoList:[{id:"certification1",certifi:'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'},
                    {id:"certification2",certifi:'https://www.w3schools.com/html/mov_bbb.mp4'},
                    {id:"certification3",certifi:'https://cdn.videvo.net/videvo_files/video/premium/video0235/small_watermarked/NO%20MR_STOCK%20FOOTAGE%20NO%20MR%20(560)_preview.webm'},
                    {id:"certification4",certifi:'https://cdn.videvo.net/videvo_files/video/premium/video0225/small_watermarked/MR_Stock%20Footage%20MR%20(2329)_preview.webm'}],
         duration:'',
         played: '',
         hideshow:false,
         title:'',
         option1:'',
         option2:'',
         question:'',
         hideshowform:false,
         questionmodel:false,
         list:"Question",
         Question1:'',
         Question2:'',
         Question3:'',
         Question4:'',
         Question5:'',
         submitted:false,
         submitted1:false,
         selectedFile:'',
         no:'',
         questionlist:[],
         questionlist1:[],
         QAmodel:false,
         autoPaused:false,
         hideshow2:false,
         videoname:'',
         pausedtime:'',
         timing:30,
         paused:false,
         videovalue:'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
         ansoption:'',
         
      };
      this.CurrentTime = this.CurrentTime.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleShowModel = this.handleShowModel.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleChangeQuestion=this.handleChangeQuestion.bind(this);
      this.handleSubmitdata = this.handleSubmitdata.bind(this);
      this.handleSubmitdata1 = this.handleSubmitdata1.bind(this);
      this.handleChangeTitile = this.handleChangeTitile.bind(this);

  }

  handleDuration = (duration) => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  CurrentTime=(video1)=> {
    
this.setState({
  videostart:video1.currentTime,
});
    
  }

  

  handlevideo=(video1)=>{
    console.log("video1length");  

    // this.start.videostart = document.getElementById("video1");
  this.setState({
    
    // videostatus : document.getElementById("videolength").innerHTML = this.state.videostart.currentTime,
    videostatus : document.getElementById("videolength").innerHTML = video1.getCurrentTime(),
  });
  console.log("Video1 :::  " +video1.currentTime );
  }

handleShow(){
  this.setState({
    hideshowform:!this.state.hideshowform,

  });
}


handleClose() {
  this.setState({
    questionmodel:false,
    QAmodel:false,
});
}

handleShowModel(event){
//  alert(JSON.stringify(txt+'working'));
 const{value}=event.target;
  this.setState({
    no:value,
    questionmodel:true,
  });
  

}

handleChange(event){
  const{value}=event.target;
  this.setState({
    list:value,
    
    
});

}
handleChangeQuestion(event){
  const{name,value}=event.target;
  this.setState({
    [name]:value,
  });
}
handleChangeTitile(event){
const{name,value}=event.target;
this.setState({
  [name]:value,
});
}

  onPlayerReady(player){
    console.log("Player is ready: ", player);
    this.player = player;
}

onVideoPlay(duration){
    console.log("Video played at: ", duration);
    // this.setState({
    //   videostatus:document.getElementById("videolength").innerHTML=duration,
    // })
}

onVideoPause(duration){
    console.log("Video paused at: ", duration);
   
}

onVideoTimeUpdate(duration){
    console.log("Time updated: ", duration);
    this.setState({
      videostatus:document.getElementById("videolength").innerHTML=duration,
      videoprogress:duration,
      pausedtime:Math.round(this.state.videostatus),
      
    })
   console.log("Time Update --------" + this.state.pausedtime);
 if(this.state.pausedtime == 30 ){
 
      this.setState({
        QAmodel:true,
        
      });  
     
 }
 else if(this.state.pausedtime == 60){
  this.setState({
    QAmodel:true,
   
  });
} 
   
  
}

onVideoSeeking(duration){
    console.log("Video seeking: ", duration);
}

onVideoSeeked(from, to){
    console.log(`Video seeked from ${from} to ${to}`);
}




onVideoEnd(){
    console.log("Video ended");
    this.setState({
      videoend:1,
      hideshow:true,
     
      QAmodel:true,
    })
   

}

onVideoEnd2(){
  console.log("Video ended");
  this.setState({
    videoend:1,
    hideshow2:true,
   
    QAmodel:true,
  })
 

}
video=(e)=>{
  this.setState({
    files: e.target.files[0],
    loaded: 0,
});
console.log(e.target.files[0]);
}

onFileUpload = () => {
    
  
  const formData = new FormData();

  formData.append(
    "myFile",
    this.state.selectedFile,
    this.state.selectedFile.name,
  );
  console.log(this.state.selectedFile);
  // axios.post("api/uploadfile", formData);
};




handleSubmitdata=()=>{
const{question,option1,option2,ansoption}=this.state;

 this.setState({submitted:true});
 if(this.state.no ==="1"){
 if(question && option1 && option2){
          this.setState({questionmodel:false});
          this.state.questionlist.push([{
            
            "question1":this.state.question,
            "option1":this.state.option1,
            "option2":this.state.option2,
            "answer":this.state.ansoption,
          }])
          this.setState({
            question:'',
            option1:'',
            option2:'',
            submitted:false,
          });
         
 }
}
else if(this.state.no === "2"){
  if(question && option1 && option2){
    this.setState({questionmodel:false});
    this.state.questionlist.push([{
      
      "question2":this.state.question,
      "option1":this.state.option1,
      "option2":this.state.option2,
      "answer":this.state.ansoption,
    }])
    this.setState({
      question:'',
      option1:'',
      option2:'',
      submitted:false,
    });
   
}
}else if(this.state.no === "3"){
  if(question && option1 && option2){
    this.setState({questionmodel:false});
    this.state.questionlist.push([{
      
      "question3":this.state.question,
      "option1":this.state.option1,
      "option2":this.state.option2,
      "answer":this.state.ansoption,
    }])
    this.setState({
      question:'',
      option1:'',
      option2:'',
      submitted:false,
    });
   
}
}else if(this.state.no === "4"){
  if(question && option1 && option2){
    this.setState({questionmodel:false});
    this.state.questionlistpush([{
      
      "question4":this.state.question,
      "option1":this.state.option1,
      "option2":this.state.option2,
      "ansoption":this.state.ansoption,
    }])
    this.setState({
      question:'',
      option1:'',
      option2:'',
      submitted:false,
    });
   
}
}else if(this.state.no === "5"){
  if(question && option1 && option2){
    this.setState({questionmodel:false});
    this.state.questionlist.push([{
      
      "question5":this.state.question,
      "option1":this.state.option1,
      "option2":this.state.option2,
      "answer":this.state.ansoption,
    }])
    this.setState({
      question:'',
      option1:'',
      option2:'',
      submitted:false,
    });
   
}
}
     

 
}
handleSubmitdata1(){
  this.setState({ submitted1:true});

}


handleAddmore(){
  this.setState({
    
    questionlist1:[...this.state.questionlist1,""],
  
  })
  }


handelchange(e,index){
  this.state.questionlist1[index]= e.target.value
  
    this.setState({
  
      questionlist1:this.state.questionlist1,
    })
  }
  
  handleRemovemore(index){
  this.state.questionlist1.splice(index,1)
  console.log("array "+this.state.questionlist1);
  this.setState({
    questionlist1:this.state.questionlist1,
  })
  
  }






  componentDidMount() {
     
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did mount  :::  " +this.state.videostatus );
    console.log("video ended:" +this.state.videoend);
    console.log("video length"+this.state.video1length);
    console.log("video ------"+JSON.stringify(this.state.files));
    console.log("question list--------:"+JSON.stringify(this.state.questionlist)  );
    
    

  
  }

 

  status(){
return(

  <Form >
  <Form.Row> 
    <Form.Group >

{/* <div style={{marginTop:10}} > <ProgressBar size='20px' now={videoprogress} max={27} /> </div> */}
<p >Status:</p>
  </Form.Group>
  
  {this.state.hideshow== true ?  <Form.Group as={Col} md="2.2"><h6 class="text-success " > Completed</h6></Form.Group> :null}
  {this.state.hideshow== true ? <Form.Group as={Col} md="1">
           {/* <FcApproval size='20px'/> */}
   {/* <Checkmark size='16px' />  */}
  
  
  </Form.Group>:null}
 
  </Form.Row>
  </Form>

);

  }

  status1(){
    return(
    
      <Form >
      <Form.Row> 
        <Form.Group >
    
    {/* <div style={{marginTop:10}} > <ProgressBar size='20px' now={videoprogress} max={27} /> </div> */}
    <p >Status:</p>
      </Form.Group>
      
      {this.state.hideshow2== true ?  <Form.Group as={Col} md="2.2"><h6 class="text-success " > Completed</h6></Form.Group> :null}
      {this.state.hideshow2== true ? <Form.Group as={Col} md="1">
               {/* <FcApproval size='20px'/> */}
       <Checkmark size='16px' /> 
      
      
      </Form.Group>:null}
     
      </Form.Row>
      </Form>
    
    );
    
      }



    render() {
     const{video1,played,duration,videoprogress,videoend,files1,title,Question1,Question2,Question3,Question4,Question5,question,option1,option2,videotitle,submitted,submitted1,files,ansoption}=this.state;
     
   
        return(
            <div >
              
            <MenuBar/>
               <div >
             <Container >

             
              
      <div className="reg-head"><h1>Safe Access Awareness  video & Certification </h1></div><br></br>
            <h4 className="reg-head">Watch Videos Completely And Get certified !</h4>
            <div style={{marginLeft:'75%'}}>
              <Button className="button1" onClick={this.handleShow}>
                Add Certification <FiFilePlus style={{margin:5}}/>
                </Button>
                </div>
                 <div >
                 {this.state.hideshowform == true ?  <Form >
                  <Form.Row>
                    <Form.Group>
                      <div className="mb-3 ">
                        <Form.File id="formcheck-api-regular" >
                          <Form.Label>Add new video for Certification</Form.Label>
                            <Form.File.Input accept=".avi,.mp4"   onChange={(e)=>this.video(e) } />
                        </Form.File>
   
                        </div>

                   </Form.Group>
                   
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="5">
                      <Form.Label>Add video Title</Form.Label>
                        <Form.Control type="text" placeholder="Video Title" name="title" Value={title} pattern="[0-9a-zA-Z_.-]*"  onChange={this.handleChangeTitile}  />
                           {submitted1 && !title &&
                             <div  style ={{fontSize:12,color:"red"}} className="nav-left">Video Title is required</div>
                           }
                    </Form.Group>
                  
                  </Form.Row>
               
                  <Form.Row>
                     <Form.Group as={Col} md="5">
                       <InputGroup className="mb-3">
                         <FormControl
                           placeholder="Add Questions 1"
                           aria-label="Add Questions 1"
                           aria-describedby="basic-addon2"
                           value={Question1}
                           name="Question1"
                           readOnly
                           />
                        <InputGroup.Append>
                      <Button variant="outline-secondary" value="1"    onClick={this.handleShowModel}>+</Button>
                   </InputGroup.Append>
                 </InputGroup>
  
  {submitted1 && !videotitle &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Field is required</div>
            }
                  </Form.Group>
                  <Form.Group as={Col} md="5">
                  <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Questions 2"
      aria-label="Add Questions 2"
      aria-describedby="basic-addon2"
      value={Question2}
      name="Question2"
      readOnly
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"value="2" onClick={this.handleShowModel}>+</Button>
    </InputGroup.Append>
  </InputGroup>
  {submitted1 && !videotitle &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Field is required</div>
            }

                  </Form.Group>
                  </Form.Row>

                      <Form.Row>
                      <Form.Group as={Col} md="5">
                  <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Questions 3"
      aria-label="Add Questions 3"
      aria-describedby="basic-addon2"
      value={Question3}
      name="Question3"
      readOnly
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" value="3" onClick={this.handleShowModel}>+</Button>
    </InputGroup.Append>
  </InputGroup>
  
  {submitted1 && !videotitle &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Field is required</div>
            }
                  </Form.Group>
                  <Form.Group as={Col} md="5">
                  <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Questions 4"
      aria-label="Add Questions 4"
      aria-describedby="basic-addon2"
      value={Question4}
      name="Question1"
      readOnly
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" value="4" onClick={this.handleShowModel}>+</Button>
    </InputGroup.Append>
  </InputGroup>
  
  {submitted1 && !videotitle &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Field is required</div>
            }
                  </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="5">
                  <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Questions 5"
      aria-label="Add Questions 5"
      aria-describedby="basic-addon2"
       value={Question5}
      name="Question5"
      readOnly
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"  value="5" onClick={this.handleShowModel}>+</Button>
    </InputGroup.Append>
  </InputGroup>
  
  {submitted1 && !videotitle &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Field is required</div>
            }
                  </Form.Group>

                  <Form.Group as={Col} md="5">
                  <Button variant="outline-secondary"  value="5" onClick={(e)=>this.handleAddmore(e)}>+</Button>
                  </Form.Group>
                    </Form.Row>

                    {this.state.questionlist1.map((value,index)=>{ 
  return(

<Form key={index}>
<Form.Row>
<Form.Group as={Col} md="5">
                  <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Questions 6"
      aria-label="Add Questions 6"
      aria-describedby="basic-addon2"
       value={Question5}
      name="Question5"
      readOnly
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"  value="6" onClick={this.handleShowModel}>+</Button>
    </InputGroup.Append>
  </InputGroup>
  
  {submitted1 && !videotitle &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left"> Field is required</div>
            }
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                 
<Form.Group > <Button variant="outline-secondary"  value="5" onClick={(e)=>this.handleAddmore(e)}>+</Button>
<Button className='removebutton' onClick={()=>this.handleRemovemore(index)} style={{marginLeft:'10%'}}><BsFillTrashFill/></Button> 
 </Form.Group>

  </Form.Group> 
  </Form.Row>


<hr></hr>

  
</Form>

    )
  })}
                      <Form.Row>

                      </Form.Row>



                    <Form.Row>
                      <Button className="button1" onClick={this.handleSubmitdata1} >Update Changes</Button>
                    </Form.Row>

               </Form> :null}</div>



               <Modal show={this.state.questionmodel}  onHide={this.handleClose}  backdrop="static"  keyboard={false}  >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.list} {this.state.no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
            <Form.Control as="textarea" rows={3} placeholder="Question" name="question" value={question} onChange={this.handleChangeQuestion}/>        </Form.Group>
            {submitted && !question &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Question is required</div>
            }
         <Form.Row>

        
          <Form.Group as={Col} md="5">
          <Form.Control type="text" placeholder="Option 1"  name="option1" Value={option1} pattern="[0-9a-zA-Z_.-]*"onChange={this.handleChangeQuestion}/>
          {submitted && !option1 &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Options is required</div>
            }

          </Form.Group>
          <Form.Group as={Col} md="5">
         
          <Form.Control type="text" placeholder="Option 2"  name="option2" Value={option2} pattern="[0-9a-zA-Z_.-]*" onChange={this.handleChangeQuestion}/>
          {submitted && !option2 &&
            <div  style ={{fontSize:12,color:"red"}} className="nav-left">Options is required</div>
            }                 
          </Form.Group>
          </Form.Row>
         
          <Form.Row>
            <Form.Row as={Col} md="12">
          <Form.Label> Please Choose Correct Answer</Form.Label>
          </Form.Row>
                    <Form.Group as={Col} md="6"> 
                  <Form.Check
          type="radio"
          label="Option 1"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
         onClick={this.state.ansoption='option1'}
            required
         
        />
        </Form.Group>
        <Form.Group as={Col} md="6">
                 <Form.Check
          type="radio"
          label="Option 2"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={this.state.ansoption='option2'}
        
           
            
        />
             
                  </Form.Group>
                
          </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button1"  onClick={this.handleSubmitdata}>
           Submit
          </Button>
          
        </Modal.Footer>
      </Modal>
               
               <br></br>
               
                    
                     <p >Status: <span id="videolength"/></p>


                     {
       this.state.videoList &&  this.state.videoList.length > 0 &&  this.state.videoList.map((user, userkey) => (
                    <CardDeck >
                   

                      
                    <Card border="dark" style={{ width: '35rem' }} className="shadow-lg p-3 mb-5 bg-body rounded" >
   <Card.Header >

   <h6>{user.id} <Button className="removebutton " style={{marginLeft:'95%'}}>X</Button></h6>     {this.status()}
   </Card.Header>
    <Card.Body key={userkey} >
      <div className='col-md-12' style={{width:'fit-content'}}>
      <VideoPlayer
                    controls={true}
                    src={user.certifi}
                    // startTime={300}
                    //  poster={this.state.video.poster}
                    width="fit-content"
                    height="400"

                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    // onSeeking={this.onVideoSeeking.bind(this)}
                  
                    // onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                
                </div>
    </Card.Body>
  </Card>
  </CardDeck>
       ))}
   
            
           
  <Modal show={this.state.QAmodel}  onHide={this.handleClose}  backdrop="static"  keyboard={false}  size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{margin:10}} >
            <h6> Answer 4 out of 5 questions correctly to pass the exam </h6><br></br>
             <Row><Col >
              <Form>  <fieldset>
              <Form.Row>
              
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question1"  />
                   <div style={{marginTop:15}}></div> <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      
                      </Form.Row>
                        </Form.Group>
                        </Form.Row></fieldset>
                        </Form>
                        
                        </Col>
                        <Col>
                        <Form>  <fieldset>
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question2"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </fieldset>   </Form>
                        </Col>


                        </Row>
<hr></hr>
                        <Row>
                            <Col>
                            <Form>  <fieldset>
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question3"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </fieldset>    </Form>
                        </Col>

                        <Col>
                            <Form>  <fieldset>
              <Form.Row>
                        
                        <Form.Group  as={Col} md="12">
                       <Form.Control plaintext readOnly defaultValue="Question4"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row>
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </fieldset>    </Form>
                        </Col>
                           


                        </Row>
                        <hr></hr>
                        <Row>
                        <Col>
                            <Form>  <fieldset>
              <Form.Row>
                        
                        <Form.Group  as={Col} md="6">
                       <Form.Control plaintext readOnly defaultValue="Question5"/>
                       <div style={{marginTop:15}}></div>
                     <Form.Row> 
                       <Form.Group as={Col} md="6">
                           <Form.Check
                              type="radio"
                               label="Option1"
                              name="formHorizontalRadios"
                               id="formHorizontalRadios1"
                            /></Form.Group><Form.Group as={Col} md="6">
                            <Form.Check
                             type="radio"
                              label="Option2"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                                 />
                      </Form.Group>
                      </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        </fieldset>        </Form>
                        </Col>
                        </Row>
                        
                        
                         
   
                        
                    
                        
                        
              
                
               





            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button1"  onClick={this.handleSubmitdata}>
           Submit
          </Button>
          
        </Modal.Footer>
      </Modal>
                   


            







     
               
             </Container>
            </div> </div>
        )
    }
}

export default Certification;
