import React from 'react';
import { Container, Form , Col,Button, Table} from 'react-bootstrap';
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { BsPencilSquare ,BsFillTrash2Fill} from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Multiselect } from 'multiselect-react-dropdown';
import MenuBar from '../components/menu/index';

class CreateRole extends React.Component {
    constructor(props) {
        super();
        this.state = {
          
               facility: '',
               roleName: '',
               allowedaccess:'',
               access:[],
               submitted: false,
               allowedaccessoptions:[ {label: "Visitor Management", value: "Visitor Management"},
                                      {label: "Cleaning Module", value: "Cleaning Module"},
                                      {label: "Security", value: "Security"},
                                     ],
       
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectAccess = this.selectAccess.bind(this);

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        
    
    };

    selectAccess= (event) =>{
      console.log(JSON.stringify(event));
         let ddl = document.getElementById("productdd");
        
    console.log(ddl);
    if(event[0].label !=="No Option"){
      var v1=[];
      var v2=[];
      for(var i=0;i<event.length;i++){
          console.log("event"+event[i].label);
          v2=event[i].label;
          v1.push(v2);
      }
      this.setState({})
             this.state.access.push(v2)
             console.log("this.state.access------"+this.state.access);
          
    }
     
    
    }

    removeDate=(event)=>{
      console.log(JSON.stringify(event));
      this.state.access=[];
      var v1=[];
      var v2=[];
      for(var i=0;i<event.length;i++){
          console.log("event"+event[i].label);
          v2=event[i].label;
          v1.push(v2);
          this.state.access.push(v2)
      }
      console.log("this.state.access"+v2);
         
             console.log("this.state.access"+this.state.access);
    }


    editRow = (user,userkey) => {
      console.log('editrow-----' + userkey + ' and ' + JSON.stringify(user));
      this.setState({
          roleName: user.roleName,
          facility: user.facility,
          allowedaccess: user.allowedaccess,
         
      });
    
      console.log('states roleName---------' + this.state.roleName);
  };

  deleteRow = (user) => {
    console.log(user);
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
  this.setState({goForDelete : true});
 
};

    handleSubmit(e) {
        this.setState({
          submitted:true,
          
        })
        e.preventDefault();
    
}

    componentDidMount() {
      
    }
   

    componentDidUpdate(prevProps, prevState, snapshot) {

      console.log("value of --------------"+ this.state.access);

    }


    render() {
        
        const {facility, roleName, access,submitted } = this.state;
        {console.log(submitted &&  !access)}
      
        return (
            <div >
                <MenuBar/>
                <Container>
                <div className="reg-head"> <h1>Safe Access - Create Role</h1></div>
                <div style={{marginLeft:'10%'}}>
               <Form>
                 <Form.Row>
                     <Form.Group as={Col} md="5">
                      <Form.Label>Role Name</Form.Label>
                      <Form.Control type="text" name="roleName" value={roleName} onChange={this.handleChange}>
                         
                      </Form.Control>
                      {submitted &&  !roleName &&
                           <div style ={{fontSize:12,color:"red"}}>Role Name is required</div>
                                                            }
                     </Form.Group>
                     <Form.Group as={Col} md="5">
                      <Form.Label>Facility</Form.Label>
                      <Form.Control type="text" name="facility" value={facility} onChange={this.handleChange}>
                          
                      </Form.Control>
                      {submitted &&  !facility &&
                           <div style ={{fontSize:12,color:"red"}}>ShielderId is required</div>
                                                            }
                     </Form.Group>
                 </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="5">
                    <Form.Label>Allowed Access</Form.Label>
                       
                       
                       <Multiselect options={this.state.allowedaccessoptions !== []?this.state.allowedaccessoptions:[{label: "No Option", value: "No Option"}]}  ref={this.liteDateRef} displayValue="value" showCheckbox={false} avoidHighlightFirstOption={true}
                                 id="productdd" disablePreSelectedValues={true} closeOnSelect={false} 
                               onSelect={(evt) => this.selectAccess(evt)} onRemove={(evt) => this.removeDate(evt)} />  
                       
              
                       {submitted &&  access.length==0 &&
                           <div style ={{fontSize:12,color:"red"}}>Select any one </div>
                                                            }
                        
                    </Form.Group>
                    
                      <Form.Group as={Col} md="5">
                          <div style={{marginLeft:'35%',marginTop:'5%'}}>
                          <Button className="button1" onClick={this.handleSubmit}>Create</Button>
                          </div>
                          </Form.Group>
                  </Form.Row>
               </Form>
               </div>
               <h4 className="c-grey-900 mB-20">Roles List</h4>
                <Table striped bordered hover>
    <thead className="thead-dark font-weight-normal ">
    <tr>
      
        <th scope="col">S.No</th>
        <th scope="col">Role Name</th>
        <th scope="col">Facility</th>
        <th scope="col">Allowed Access</th>
        <th scope="col">Make Changes</th>
        
    </tr>
    </thead>
    <tbody>
    {
      <tr>
        <th scope="row">11111</th>
        <td scope="row">{this.state.roleName}</td>
        <td scope="row">{this.state.facility}</td>
        <td scope="row">{this.state.access}</td>
      
        <td scope="row" ><div style={{display:'inline',width:'100%' ,height:'100%'}}> <Button className="editbt1"><BsPencilSquare /> </Button>  </div>
        <div style={{display:'inline',width:'100%' ,height:'100%',marginLeft:'3%'}}> <Button className="editbt1"><BsFillTrash2Fill  /> </Button>  </div> </td>
        
        
      </tr>
  }
    </tbody>
    </Table>


                </Container>
                 
                
            </div>
        )
    }
}



export default CreateRole;
