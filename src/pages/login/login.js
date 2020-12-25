import React from 'react'

import './login.less'
import logo from './images/logo.png'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


//表单
const NormalLoginForm = () => {
//	const [form] = Form.useForm()
//	console.log(form)
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  
  const validarePwd = (rule,value,callback)=>{
  	//console.log('rule,value')
  	if(!value){
  		callback('密码必须输入')
  	}else if (value.length < 4){
  		callback('密码长度不能小于4位')
  	}else if (value.length > 12){
  		callback('密码长度不能大于12位')
  	}else if (/^[a-zA-Z0-9_]+$/.test(value) === false){
  		callback('密码必须是英文、数字或下划线组成')
  	}else{
  		callback()
  	}
  }
  
  return (
    <Form name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, whitespace: true, message: '用户名不能为空，请输入用户名' },
        { min: 4, message: '用户名不能小于4个字符' },
        { max: 12, message: '用户名不能大于12个字符' },
        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, validator: validarePwd}]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};


export default class Login extends React.Component{
    render(){
        return (
          <div className='login'>
          	<header className='login-header'>
          		<img src={logo} alt='logo' />
          		<h1>React项目:后台管理系统</h1>
          	</header>
          	<section className='login-content'>
          		<h2>用户登录</h2>
          		<div>
          			<NormalLoginForm></NormalLoginForm>
          		</div>
          	</section>
          </div>
        )
    }
}