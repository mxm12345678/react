


import React,{Component} from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from "../../components/left-nav/"
import Header from "../../components/header/"

import Home from "../home/home.jsx"
import Category from "../../pages/category/category.jsx"
import Product from "../../pages/product/product.jsx"
import Role from "../../pages/role/role.jsx"
import User from "../../pages/user/user.jsx"
import Bar from "../../pages/charts/bar"
import Line from "../../pages/charts/line"
import Pie from "../../pages/charts/pie"

const {Footer, Sider, Content } = Layout;

export default class Admin extends Component{
   
    render(){
        const user=memoryUtils.user
        if(!user||!user._id){
            return <Redirect to='/login'/>
        }
        return(
            
                <Layout style={{height:'100%'}}>
                    <Sider><LeftNav/></Sider>
                    <Layout>
                        <Header></Header>
                        <Content style={{backgroundColor:'#fff'}}>
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/category' component={Category}/>
                                <Route path='/product' component={Product}/>
                                <Route path='/role' component={Role}/>
                                <Route path='/user' component={User}/>
                                <Route path='/charts/bar' component={Bar}/>
                                <Route path='/charts/line' component={Line}/>
                                <Route path='/charts/pie' component={Pie}/>
                                <Redirect to='/home'/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign:'center'}}>欢迎使用谷歌人浏览器，可以获得更佳的操作体验</Footer>
                    </Layout>
                </Layout>
            
        )
    }
}
