import React from 'react';
import {Button,Form,FormControl,FormLabel,Row,Col} from 'react-bootstrap';


export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:""
        }
    }

    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLogin = (e) =>{
        e.preventDefault();
        console.log(this.props)
        console.log(this);
        this.props.history.push("/home")
    }
    render(){
        return(
            <div style={{height: '100vh'}}>
                <div className="container">
                    <div className="row h-100 border-0" >
                        <div id="" style={{}} className="my-auto">
                            <h1 className="display-1" style={{color: 'rgb(1,100, 255)'}}>FinTrack</h1>
                        </div>
                        <div className="my-auto p-2 shadow-lg mx-auto " style={{backgroundColor:'#f0f9fa',borderRadius:'10px'}}>
                        <h2 className="text-center" style={{    color: 'rgb(1,100, 255)'}}>Login</h2>
                        <Form className="" onSubmit={this.handleLogin}>
                        <Form.Group as={Row}> 
                            <FormLabel column sm={3} className="">Username</FormLabel>
                            <Col sm={8}><FormControl className="" style={{backgroundColor: '#f0f9fa'}} onChange={this.handleChange} type='text' name='userName' ></FormControl>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <FormLabel column sm={3} className="">Password</FormLabel>
                            <Col sm={8}><FormControl className="" style={{backgroundColor: '#f0f9fa'}} onChange={this.handleChange} type='password' name='password' ></FormControl>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                                <Col sm={{offset:3,span:4}}>
                                    <Button size="sm" type="submit" className="form-control">Login</Button>
                                </Col>
                       
                            {/* <input class="col-sm-offset-2" type='submit' value="Login"></input> */}
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col className="text-center">
                                    <Button variant="link">Forget Password?</Button>
                            </Col>
                        </Form.Group>

                    </Form>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

