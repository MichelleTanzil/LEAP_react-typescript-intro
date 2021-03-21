import React from 'react';
import MessageHoc from "./Hoc";

//interface IUserMessage {
//    name: string;
//    message: string;
//}

//const Message = (props: IUserMessage): any => {
//    return (
//        <p> {props.name}, {props.message} </p>
//    )
//}

//const Message = ({ name, message }: UserMessage): any => {
//    return (
//        <p> {name}, {message} </p>
//    )
//}

const example = (props: any) => <p>{props.name}, {props.message}</p>
const Message = MessageHoc(example);

export default Message;