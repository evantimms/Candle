import React, { Component } from 'react'
import { 
    Row, 
    Col 
} from 'antd'
import WrappedSignupForm from '../components/SignupForm'
import * as UserService from '../services/userservice'

type SignupState = {}

type SignupPageProps = {}

export default class SignupPage extends Component<SignupPageProps, SignupState> {

    async createNewUser (values: {
        email: string,
        screenName: string,
        password: string,
        passwordConfirmed: string,
      }): Promise<void> {

    }

    _onSignupComplete (values: {
        email: string,
        screenName: string,
        password: string,
        passwordConfirmed: string,
      }) {
        this.createNewUser(values)
    }

    render () {
        return (
            <Row id='signup-page' className='page' type='flex' justify='center'>
                <Col span={8} className='about-column'>
                    <div className='app-title'>Candle</div>
                    <div className='app-title-subheader'>
                        Candle is a simple messaging service thats let you quickly message friends
                        and family without the need of exposing your data to third party buyers.
                    </div>
                    <div className='signup-title'>Sign Up Now!</div>
                    <WrappedSignupForm 
                        onFormSubmit={(values) => this._onSignupComplete(values)}
                    />
                </Col>
            </Row>
        )
    }
}