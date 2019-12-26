import React, { Component } from 'react'
import {
    Layout,
    Row,
    Col,
    Input,
    Form,
    Button
} from 'antd'
import WrappedLoginForm from '../components/LoginForm'

type LoginPageState = {
    username: string,
    password: string
}

type LoginPageProps = {}

export default class LoginPage extends Component<LoginPageProps, LoginPageState> {
    constructor (props: LoginPageProps) {
        super(props)
        const state: LoginPageState = {
            username: '',
            password: ''
        }

        this.state = state
    }
    
    render () {
        return(
            <Row id='login-page' className='page' type='flex' justify='center'>
                <Col className='column-center' span={8}>
                    <div className='app-title'>QuikMessage</div>
                    <WrappedLoginForm />
                </Col>
            </Row>
        )
    }
}