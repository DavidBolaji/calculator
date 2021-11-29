import React from 'react'

const Keypad = (props) => {
    return (
        <div className={props.casein}>
            {props.children}
        </div>
    )
}

export default Keypad;
