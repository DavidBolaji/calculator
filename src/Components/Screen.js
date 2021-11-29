import React from 'react'
import { useSelector } from 'react-redux';


const Screen = (props) => {
    const calc = useSelector(state => state.calc);
    console.log(calc);
    return (
        <div className={props.screen}>
            <p>{calc.total}</p> 
        </div>
    )
}

export default Screen
