import React from 'react'

const Button = (props) => {
    if (props.equal) {
        return <button onClick={props.onClick} className={props.equal}>{props.value}</button>
    } else if (props.special){
        return <button onClick={props.onClick} className={props.special}>{props.value}</button>
    } else {
        return <button onClick={props.onClick} className={props.buttons}>{props.value}</button>
    }
    
}

export default Button
