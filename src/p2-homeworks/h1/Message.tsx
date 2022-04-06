import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
            <div className={classes.wrapper}>
                    <img className={classes.avatar} src={props.avatar} alt={'avatar'}/>
                    <div className={classes.angle}/>

                <div className={classes.messageContent}>
                    <div className={classes.NameUser}>{props.name}</div>
                    <div className={classes.message}>{props.message}</div>
                    <div className={classes.time}>{props.time}</div>
                </div>
            </div>
    )
}

export default Message
