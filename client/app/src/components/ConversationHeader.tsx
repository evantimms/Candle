import React, { FunctionComponent } from 'react'
import {
    Icon
} from 'antd'

type Props = {
    currentUser?: string,
}

const ConversationHeader: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className='conversation-header'>
            <div>{props.currentUser || ''}</div>
            <div>
                <Icon className='settings-button' type='setting' theme='filled' />
            </div>
        </div>
    )
}

export default ConversationHeader