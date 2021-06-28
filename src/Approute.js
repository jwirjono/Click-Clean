import React,{Component} from 'react';
import {BrowserRouter as Rout ,Route, Redirect,Switch} from 'react-router-dom';
import Header from "./Header";
import Home from "./components/Home";
import App from './App';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sell from "./components/Sell";
import Activity from "./components/Activity";
import {connect} from "react-redux";

class AppRoute extends Component{


  render(){
    return(
      <Rout>
      {
        this.props.aktif != "sign" ? <Header/>:''
      }
        <Switch>

          {
            //this.props.aktif == "login" && <Login/>
          }
          <Route path ="/" exact component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/home" component={Home}/>
          <Route path="/sell" component={Sell}/>
          <Route path="/activity" component={Activity}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </Rout>
    )
  }
}
const mapStateToProps = state =>state;
export default connect(mapStateToProps)(AppRoute);
