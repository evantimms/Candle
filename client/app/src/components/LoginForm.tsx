import React, { Component } from 'react'
import { 
  Form, 
  Icon, 
  Input, 
  Button, 
  Checkbox
} from 'antd'

import {
    Link
} from 'react-router-dom'

type State = {}
type Props = {
  form: any
}

class LoginForm extends Component<Props, State> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: object) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='submit-button'>
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <Link className='login-form-register' to={{ pathname: 'signup' }}>
                Register Now!
            </Link>
            <Link className='login-form-forgot' to={{ pathname: 'signup' }}>
                Forgot Password?
            </Link>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm