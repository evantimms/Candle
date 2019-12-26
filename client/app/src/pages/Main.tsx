import React, { Component } from 'react'
import {
    Row,
    Col
} from 'antd'

import Chat from '../components/Chat'
import ChatHeader from '../components/ChatHeader'
import ConversationHeader from '../components/ConversationHeader'
import ConversationList from '../components/ConversationList'

type MainPageState = {

}

type MainPageProps = {}

export default class MainPage extends Component<MainPageProps, MainPageState> {

    render () {
        return (
            <Row className='chat'>
                <Col span={6} className='conversation-column'>
                    <Row style={{ height: '10%' }} >
                        <ConversationHeader currentUser='evantimms'/>
                    </Row>
                    <Row style={{ height: '90%' }}>
                        <ConversationList />
                    </Row>
                </Col>
                <Col span={18} className='chat-column'>
                    <Row style={{ height: '10%' }}>
                        <ChatHeader />
                    </Row>
                    <Row style={{ height: '90%' }}>
                        <Chat />
                    </Row>
                </Col>
            </Row>
        )
    }
}