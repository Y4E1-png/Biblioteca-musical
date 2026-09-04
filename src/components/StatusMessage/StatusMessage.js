import React from "react";
import { Message } from "./styles";

const StatusMessage = (props) => {
    return (
        <Message $error={props.error}>
            {props.children}
        </Message>
    );
};

export default StatusMessage;