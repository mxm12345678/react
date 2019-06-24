// 应用的根组件
import React,{Component} from "react"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'
import { message } from 'antd';
export class App extends Component{
    handleClick=()=>{
        message.success('This is a success message');
    }
    render(){
        return (
           <Router>
               <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
               </Switch>
            </Router>
        )

    }
}