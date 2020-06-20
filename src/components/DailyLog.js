import React from 'react';
import 'datatables.net/js/jquery.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.css';
import {Button,Form,FormControl,FormLabel,Col, FormGroup} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const $ = require('jquery');


export default class DailyLog extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
        this.dailyLogList=[{transactionId:"1",charge: "123",customerName: "Karthi",dueDate: "2020-06-16",mobileNo: "9952375220",paymentId: "123",refferedBy: "123",remarks: "123",transAmount: "122123",transDate: "2020-06-18"},
        {transactionId:"2",charge: "123",customerName: "Karthi",dueDate: "2020-06-16",mobileNo: "9952375220",paymentId: "123",refferedBy: "123",remarks: "123",transAmount: "122123",transDate: "2020-06-18"},
        {transactionId:"3",charge: "123",customerName: "Karthi",dueDate: "2020-06-16",mobileNo: "9952375220",paymentId: "123",refferedBy: "123",remarks: "123",transAmount: "122123",transDate: "2020-06-18"},
        {transactionId:"4",charge: "123",customerName: "Karthi",dueDate: "2020-06-16",mobileNo: "9952375220",paymentId: "123",refferedBy: "123",remarks: "123",transAmount: "122123",transDate: "2020-06-18"},
        {transactionId:"5",charge: "123",customerName: "Karthi",dueDate: "2020-06-16",mobileNo: "9952375220",paymentId: "123",refferedBy: "123",remarks: "123",transAmount: "122123",transDate: "2020-06-18"},
        {transactionId:"6",charge: "123",customerName: "Karthi",dueDate: "2020-06-16",mobileNo: "9952375220",paymentId: "123",refferedBy: "123",remarks: "123",transAmount: "122123",transDate: "2020-06-18"}]
    }
    componentDidMount(){
        //console.log($("#table"));
        this.drawTable();
    }

    drawTable = ()=>{
        var table = $("#table").DataTable({
            destroy:true,
            data:this.dailyLogList,
        columns:[
            {data:'transactionId'},
            {data:'mobileNo'},
            {data:'customerName'},
            {data:'transDate'},
            {data:'transAmount'},
            {data:'dueDate'},
            {data:null,
            render:function ( data, type, row ) {
                return '<button id="editLogs" class="mr-1 btn-sm btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'
                +'<button id="deleteLogs" class="btn-sm btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
            }}
        ]
        });
        $('#table tbody').unbind();
        $('#table tbody').on( 'click', '#editLogs', function () {
            var data = table.row( $(this).parents('tr') ).data();
            //console.log("edit "+data);
            } );

        $('#table tbody').on( 'click', '#deleteLogs', function () {
            var data = table.row( $(this).parents('tr') ).data();
            //console.log("delete "+data);
            } );
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        //console.log(this.state)
    }

    addDailyLog = (e) =>{
        e.preventDefault();
        this.dailyLogList = [...this.dailyLogList,this.state];
        this.drawTable();
    }
    render(){
        return(
               <div>
               <div className="text-center"><h1>FinTrack</h1></div>
               <div className="col-sm-9">
               
                    <Form className="" onSubmit={this.addDailyLog}>
                        <Form.Row>
                        <Form.Group as={Col}> 
                            <FormLabel className="">Mobile Number</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='mobileNo' ></FormControl> 
                        </Form.Group>
                        <Form.Group as={Col}> 
                            <FormLabel  className="">Customer Name</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='customerName' ></FormControl>                   
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormLabel className="">Transaction Date</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='date' name='transDate' ></FormControl>                   
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col}>
                            <FormLabel className="">Transaction Amount</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='transAmount' ></FormControl>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormLabel className="">Charge</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='charge' ></FormControl>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormLabel className="">Due Date</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='date' name='dueDate' ></FormControl>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                         <Form.Group as={Col}>
                            <FormLabel className="">Payment Id</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='paymentId' ></FormControl>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormLabel className="">Referred By</FormLabel>
                            <FormControl className="" style={{}} onChange={this.handleChange} type='text' name='refferedBy' ></FormControl>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormLabel className="">Remarks</FormLabel>
                            <FormControl className="" as="textarea" style={{}} onChange={this.handleChange} type='text' name='remarks' ></FormControl>
                        </Form.Group>
                        </Form.Row>
                        <FormGroup>
                            
                        <Form.Row className="justify-content-center">
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
                        <td>Transaction Id</td>
                        <td>Mobile No</td>
                        <td>Customer Name</td>
                        <td>Transaction Date</td>
                        <td>Transaction Amount</td>
                        <td>Due Date</td>
                        <td>Action</td>
                        </tr>
                    </thead>
               </table>
               </div>
            </div>
        )
    }
}