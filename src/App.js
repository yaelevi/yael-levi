import React,{component} from 'react';
import { render } from '@testing-library/react';
import './App.css';
import HomePageDesk from './comps/home-page/desk-home-page';
import HomePage from './comps/home-page/desk-home-page';
import HomePageMobile from './comps/home-page/mobile-home-page';
import { Component } from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }
  callApi()
  {
    fetch("http://localhost:9000/API")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  }
  componentWillMount(){
    this.callApi();
     
  }

  
render(){
 
  return (
    <div className="App">
      {/* <h1 className="ppp">{this.state.apiResponse}</h1> */}
      
      <HomePageDesk></HomePageDesk>
      <HomePageMobile></HomePageMobile>
    </div>
  );
}
}


export default App;

