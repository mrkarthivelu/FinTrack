import React from 'react';
import './styles/home.css'
import Employee from './Employee';


export default class Home extends React.Component{

    render(){
        return(
            <div class="container-fluid">
            <header>
            <nav class="navbar navbar-light bg-light justify-content-between fixed-top">
                <a class="navbar-brand">FinTrack</a>
                <form class="form-inline">
                    <span class="navbar-text mr-2">
                        Welcome Karthikeyan
                    </span>
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="button">Logout</button>
                </form>
            </nav>
            </header>
            <div class="row mt-5">
                <div class="col-sm-3 pr-0 mr-0  position-fixed">
                    <nav class="sidebar" style={{minHeight:'100vh',maxHeight:'100%'}}>
                       
                        <li class="">
                            <a class="" href="#">Employee Management</a>
                        </li>
                        <li class="">
                            <a class="" href="#">Daily Logs</a>
                        </li>
                        <li class="">
                            <a class="" href="#">Advanced Search</a>
                        </li>
                       
                    </nav>
                </div>
                <div class="offset-sm-3 col-sm-9 pl-0">
                    <Employee></Employee>
                </div>
            </div>
            </div>
        )
    }
}