import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
