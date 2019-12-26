import React, { useState } from 'react'
import { 
    Form, 
    Icon, 
    Input, 
    Button, 
    Checkbox
} from 'antd'
import { FormWrappedProps } from 'antd/lib/form/interface'
import { FormComponentProps } from 'antd/lib/form'

type Props = {
  form: any
  onFormSubmit: (object) => void
}

const SignupForm: React.FunctionComponent<Props> = (props: Props) => {

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.form.validateFields((err: Error,
        values: {
          email: string,
          screenName: string,
          password: string,
          passwordConfirmed: string,
        }
      ) => {
        if (!err && values.password === values.passwordConfirmed) {
          props.onFormSubmit(values)
        }
    })
  }

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="signup-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Choose an email' }],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('screenName', {
          rules: [{ required: true, message: 'Choose a screen name' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Screen Name"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Choose a Password' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('passwordConfirmed', {
          rules: [{ required: true, message: 'Confirm Your Password' }],
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
          Sign Up!
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedSignupForm = Form.create<Props>({ name: 'signup' })(SignupForm);
export default WrappedSignupForm