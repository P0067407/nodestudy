import React,{Component} from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './login.css'
export default class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }; 
    render() {
        return(
            <div className='login'>
                <header className='login-header'>
                    <div>xxxx</div>
                    <div>ssss</div>
                </header>
                <section className='login-content'>
                    <h1>用户登录</h1>
                    <div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>  
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> 
                            </Form.Item>
                        </Form> 
                    </div>
                </section>
            </div>
        )
    }
}