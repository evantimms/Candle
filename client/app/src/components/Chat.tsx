import React, { Component } from 'react'
import {
    MessageList
} from 'react-chat-elements'
import {
    Input,
    Icon
} from 'antd'

type Props = {

}

type State = {

}

const dummyMessages = [
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'left',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'left',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'left',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'left',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'right',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    },
    {
        position: 'left',
        title: 'evantimms',
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
    }
]

export default class Chat extends Component<Props, State> {

    render () {
        return (
            <>
                <div className='chat-container'>
                    <MessageList 
                        className='chat'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={dummyMessages}
                    />
                </div>
                <div className='chat-input'>
                    <Input />
                    <Icon type='right' />
                </div>
            </>
        )
    }
}