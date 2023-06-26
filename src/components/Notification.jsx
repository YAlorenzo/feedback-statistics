import React from "react";
import css from "./notification.module.css"

class Notification extends React.Component{
    render() {
        return (
            <p className={css.text}>{this.props.message}</p>
        )
    }
}

export default Notification;