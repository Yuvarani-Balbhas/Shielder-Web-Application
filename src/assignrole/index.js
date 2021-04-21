import React from 'react';
import { Container, Form , Col,Button, Table,Row,Text} from 'react-bootstrap';
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { BsPencilSquare ,BsFillTrash2Fill} from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import MenuBar from '../components/menu/index'
class assignRole extends React.Component {
    constructor(props) {
        super();
        this.state = {
           
               ShielderId: '',
               RoleName: '',
               submitted: false,
                tablelist:[
                {id:'1',saferid:'22213',employeeid:'12311',name:'Ram',rolename:'Security'},
                {id:'2',saferid:'22214',employeeid:'111',name:'Kumar',rolename:'Security'},
                {id:'3',saferid:'22215',employeeid:'123',name:'Prem',rolename:'Manager'},
                {id:'4',saferid:'22216',employeeid:'123',name:'Krishnaraj',rolename:'Manager'}
                ],
               
                id: '',
                employeeId: '',
                rolename: '',
                name: '',
                inputfield:false,
                mode:'edit',
                
           
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
    handleSubmit(e) {
        this.setState({submitted:true})
        e.preventDefault();
    
}

    componentDidMount() {
      
    }
    editRow = (user,userkey) => {
        console.log('editrow-----' + userkey + ' and ' + JSON.stringify(user));
        this.setState({
            ShielderId:user.saferid,
            RoleName:user.rolename,
            inputfield:true,
        });
       
    };
    deleteRow = (user) => {
       
        Swal.fire({
            title: 'Confirm to Delete',
            text: 'Do you want to delete ' + user.name,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            closeOnConfirm: true,
            closeOnCancel: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
        }).then((res) => {
            if(res.value){
                this.deleteUser(user)
            }else if(res.dismiss == 'cancel'){
                console.log('cancel');
            }



        })
    }

    deleteUser = (user) => {
        // this.setState({goForDelete : true});
        this.props.reqdeleteuser(user.employeeId);
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
console.log(this.state.ShielderId)
        

    }


    render() {
        
        const {ShielderId, RoleName, submitted, } = this.state;
      
      
        return (
            <div >
                <MenuBar/>

                <Container>
                <div className="reg-head"> <h1>Safe Access - Assign Role</h1></div>
                <div style={{marginLeft:'10%'}}>
               <Form>
                 <Form.Row>
                     <Form.Group as={Col} md="5">
                      <Form.Label>Safe Access Id</Form.Label>
                      <Form.Control as="select" name="ShielderId"  value={ShielderId} onChange={this.handleChange}>
                          <option value=""></option>
                          <option value="22213">22213</option>
                          <option value="22214">22214</option>
                          <option value="22215">22215</option>
                          <option value="22216">22216</option>
                      </Form.Control>
                      {submitted &&  !ShielderId &&
                           <div style ={{fontSize:12,color:"red"}}>ShielderId is required</div>
                                                            }
                     </Form.Group>
                     <Form.Group as={Col} md="5">
                      <Form.Label>Role Name</Form.Label>
                      <Form.Control as="select" name="RoleName" value={RoleName} onChange={this.handleChange}>
                          <option value=""></option>
                          <option value="Security">Security</option>
                          <option value="Manager">Manager</option>
                          <option value="22215">22215</option>
                          <option value="22216">22216</option>
                      </Form.Control>
                      {submitted &&  !RoleName &&
                           <div style ={{fontSize:12,color:"red"}}>ShielderId is required</div>
                                                            }
                     </Form.Group>
                 </Form.Row>
                  <Form.Row>
                      <Form.Group as={Col} md="12">
                          <div style={{marginLeft:'35%'}}>
                          <Button className="button1" onClick={this.handleSubmit}>Assign</Button>
                          </div>
                          </Form.Group>
                  </Form.Row>
               </Form>
               </div>
               <h4 className="c-grey-900 mB-20">Vehicle List</h4>
                <Table striped bordered hover>
    <thead className="thead-dark">
    <tr>
    <th scope="col">Id</th>
        <th scope="col">Safe Access Id</th>
        <th scope="col">Employee ID</th>
        <th scope="col">Name</th>
        <th scope="col">Role Name</th>
        <th scope="col">Aaction</th>
       
                                                
    </tr>
    </thead>
    <tbody>
    {
       this.state.tablelist &&  this.state.tablelist.length > 0 &&  this.state.tablelist.map((user, userkey) => (
          <tr key={userkey}>
          <th scope="row">{user.id}</th>
          <td>{user.saferid}</td>
          <td>{user.employeeid}</td>    
          <td>{user.name}</td>
          <td>{user.rolename}</td>
        <td scope="row" ><div style={{display:'inline',width:'100%' ,height:'100%'}}> <Button className="editbt1"  onClick={() => this.editRow(user, userkey)}><BsPencilSquare /> </Button>  </div>
        <div style={{display:'inline',width:'100%' ,height:'100%',marginLeft:'3%'}}> <Button className="dlbutton"  onClick={() => this.deleteRow(user) }><BsFillTrash2Fill  /> </Button>  </div> </td>
                                                            
      </tr>
                                                    ))
                                                }


  
    </tbody>
    </Table>


                </Container>
                 
                
            </div>
        )
    }
}



export default assignRole;
