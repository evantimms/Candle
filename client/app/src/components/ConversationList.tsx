import React, { FunctionComponent } from 'react'
import {
    ChatList
} from 'react-chat-elements'

type Props = {}

const ConversationList: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className='chat-list-container'>
            <ChatList
                className='chat-list'
                dataSource={[
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date('2019-12-12'),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    }
                ]}
            />
        </div>
    )
}

export default ConversationList