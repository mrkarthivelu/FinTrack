import React from 'react';
import 'datatables.net/js/jquery.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.css';
import {Button,Form,FormControl,FormLabel,Row,Col, FormGroup} from 'react-bootstrap';

const $ = require('jquery');


export default class User extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
        this.userList=[{type: "User", status: "In Active", password: "fdsfadsfds", userName: "mr.karthivelu@gmail.com", mobileNo: "9952375220"},
        {type: "User", status: "In Active", password: "fdsfadsfds", userName: "mr.karthivelu@gmail.com", mobileNo: "9952375220"},
        {type: "User", status: "In Active", password: "fdsfadsfds", userName: "mr.karthivelu@gmail.com", mobileNo: "9952375220"},
        {type: "User", status: "In Active", password: "fdsfadsfds", userName: "mr.karthivelu@gmail.com", mobileNo: "9952375220"},
        {type: "User", status: "In Active", password: "fdsfadsfds", userName: "mr.karthivelu@gmail.com", mobileNo: "9952375220"}]
    }
    componentDidMount(){
        //console.log($("#table"));
        this.drawTable();
    }

    drawTable = ()=>{
        $("#table").DataTable({
            destroy:true,
            data:this.userList,
        columns:[
            {data:'mobileNo'},
            {data:'userName'},
            {data:'type'},
            {data:'status'},
            {data:null,
            render:function ( data, type, row ) {
                return '<button class="btn btn-primary mr-1">Edit</button><button class="btn btn-danger">Delete</button>'
            }}
        ]
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        //console.log(this.state)
    }

    addUser = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.userList = [...this.userList,this.state];
        this.drawTable();
        //this.setState();
    }
    render(){
        return(
               <div>
               <div className="text-center"><h1>FinTrack</h1></div>
               <div className="col-sm-6">
                    <Form className="" onSubmit={this.addUser}>
                        <Form.Row>
                        <Form.Group as={Col} sm={6}> 
                            <FormLabel className="">Username</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='userName' ></FormControl> 
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col}> 
                            <FormLabel  className="">Mobile No</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='mobileNo' ></FormControl>                   
                        </Form.Group>
                        <Form.Group as={Col}>
                        <FormLabel className="">Type</FormLabel>
                           <FormControl as="select" className="" style={{}} onChange={this.handleChange} type='text' name='type' >
                                <option value={''}>Select Type</option>
                                <option>User</option>
                                <option>Admin</option>
                            </FormControl>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col}>
                            <FormLabel className="">Password</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='password' name='password' ></FormControl>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <FormLabel className="">Status</FormLabel>
                            <FormControl as="select" className="" style={{}} onChange={this.handleChange} type='text' name='status' >
                                <option value={''}>Select Status</option>
                                <option>Active</option>
                                <option>In Active</option>
                            </FormControl>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} sm={6}>
                                <FormLabel className="">Confirm Password</FormLabel>
                                <FormControl className="" style={{}} onChange={this.handleChange} type='password' name='confirmPassword' ></FormControl>
                            
                            </Form.Group>
                        </Form.Row>
                        
                        <FormGroup>
                            
                        <Form.Row>
                            <Button type="submit" className="btn btn-primary mr-1 ">Add</Button>   
                            <Button type="reset" className="btn btn-warning">Reset</Button>
                       
                        </Form.Row>
                  {/* <input class="col-sm-offset-2" type='submit' value="Login"></input> */}
             
                        </FormGroup>
                       
                    </Form>
               </div>
               <div className="mx-3" style={{}}>
               <table id="table">
                    <thead style={{backgroundColor:'navy',color:'white'}}>
                        <tr>
                        <td>Mobile No</td>
                        <td>Username</td>
                        <td>Type</td>
                        <td>Status</td>
                        <td>Action</td>
                        </tr>
                    </thead>
               </table>
               </div>
            </div>
        )
    }
}