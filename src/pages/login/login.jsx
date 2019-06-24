import React, {Component} from 'react'
import {
Form,
Input,
Icon,
Button,
} from 'antd'
import logo from './images/logo.png'
import './login.less'
import {reqLogin,reqAddUser} from '../../api'
const Item = Form.Item
/*登陆路由组件
*/
class Login extends Component {
    /*登陆
    */
    login = (e) => {
    // 阻止事件默认行为(不提交表单)
    e.preventDefault()
    // 进行表单所有控件的校验
    this.props.form.validateFields(async (err, values) => {
    if (!err) {
    // 校验成功
    const {username, password} = values
    console.log('提交登陆请求', username, password)
    } else {
    // 校验失败
    console.log(err)
    }
    })
    }
    /**
    * 自定义表单的校验规则
    */


   validator=(rule, value, callback)=>{
       const length=value&&value.length;
       const pwdReg=/^[a-zA-Z0-9_]+$/
       if(!value){
           callback('必须输入密码')
       }else if(length<4){
           callback('密码必须大于4位')
       }else if(length>12){
           callback('密码必须小于12位')
       }else if(!pwdReg.test(value)){
           callback('密码必须是英文、数组或下划线组成')
       }else{
           callback()
       }
    }


render() {
const {getFieldDecorator} = this.props.form
return (
<div className='login'>
<header className='login-header'>
<img src={logo} alt="logo"/>
<h1>React 项目: 后台管理系统</h1>
</header>
<section className='login-content'>
<h3>用户登陆</h3>
<Form onSubmit={this.login} className="login-form">
<Item>
{
/*
getFieldDecorator 是一个高阶函数(返回值是一个函数)
getFieldDecorator(标识名称，配置对象)(组件标签) 返回新的标签
经过 getFieldDecorator 包装的表单控件会自动添加 value 和 onChange，数据同步
将被 form 接管
*/
/*
1.高阶函数
    1). 一类特别的函数
        a.接收函数类型的参数
        b.返回值是函数
    2)常见
        a.定时器:setTimeout()/setInterval()
        b.Promise:Promise(()=>{}) then(value => {/r},reason=>{})
        c.数组遍历相关方法:forEach()/filter()/map()/reduce()/find()/findIndex()
        d.函数对象的bind
        e.Form.create()()/getFieldDecorator()()
    3)高阶函数更新动态,更加具有扩展性
2.高阶组件
    1)本质是一个函数
    2)接受一个组件(被包装组件),返回一个新的组件(包装组件),包装组件会向被包装组件传入特定属性
    3)作用:扩展组件的功能
    4)高阶组件也是高阶函数:接收一个组件函数,返回是一个新的组件函数
*/     
getFieldDecorator('username', {
// 根据内置验证规则进行声明式验证:直接使用别人定义好的验证规则进行验证
rules: [




    { required: true, message: 'Please input your Password!' },
    { min: 4, message: '用户名至少4位' },
    { max: 12, message: '用户名至多12位' },
    { pattern: /^[0-9a-zA-Z_]+$/, message: '用户名至少4位' },
],
    initialValue:'admin'
})(
<Input prefix={<Icon type="user" style={{color:
'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
)
}
</Item>
<Item>
{
getFieldDecorator('password', {
rules: [
    // 自定义表单校验规则
{validator: this.validator}
]
})(
<Input prefix={<Icon type="lock" style={{color:
'rgba(0,0,0,.25)'}}/>} type="password"
placeholder="密码"/>
)
}
</Item>
<Item>
<Button type="primary" htmlType="submit" className="login-form-button">
登录
</Button>
</Item>
</Form>
</section>
</div>
)
}
}
/*用户名/密码的的合法性要求
1). 必须输入
2). 必须大于 4 位
3). 必须小于 12 位
4). 必须是英文、数组或下划线组成
*/
export default Form.create()(Login)
