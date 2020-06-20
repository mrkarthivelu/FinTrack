import React from 'react';
import '../styles/home.css'
import User from './User';
import DailyLog from './DailyLog';
import {Route,Link, BrowserRouter} from 'react-router-dom';


export default class Home extends React.Component{

    constructor(props){
        super(props);
    }

    handleLogout =() =>{
        this.props.history.push('/')
    }
    render(){
        return(
            <BrowserRouter>
                <div class="container-fluid">
            <header>
            <nav class="navbar navbar-light bg-light justify-content-between fixed-top">
                <a class="navbar-brand">FinTrack</a>
                <form class="form-inline">
                    <span class="navbar-text mr-2">
                        Welcome Karthikeyan
                    </span>
                    <button onClick={this.handleLogout} class="btn btn-outline-danger my-2 my-sm-0" type="button">Logout</button>
                </form>
            </nav>
            </header>
            <div class="row mt-5 pt-2">
                <div class="col-sm-2 pr-0 mr-0  position-fixed">
                    <nav class="sidebar" style={{minHeight:'100vh',maxHeight:'100%'}}>
                       
                        <li class="">
                            <Link class="" to="/home/user">User Management</Link>
                        </li>
                        <li class="">
                            <Link class="" to="/home/">Daily Log</Link>
                        </li>
                        <li class="">
                            <Link class="" to="/home/search">Advanced Search</Link>
                        </li>
                       
                    </nav>
                </div>
                <div class="offset-sm-2 col-sm-10 pl-0">
                   
                    <Route exact path="/home/user" component={User}></Route>
                    <Route exact path="/home/" component={DailyLog}></Route>
                    <Route exact path="/home/search"><h1>Advanced Search</h1></Route>
                </div>
            </div>
            </div>
            </BrowserRouter>
        )
    }
}