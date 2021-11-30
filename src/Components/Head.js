import React from 'react';
import { useDispatch } from 'react-redux';
import { themeActionNext } from './../Store/Action/ThemeAction';
const Head = (props) => {
    const dispatch = useDispatch()

    const clickHandler = (num) => {
        window.localStorage.setItem('THEME', num)
        dispatch(themeActionNext(num))
    }
    return (
        <div className={props.head}>

            <div className={props.title}>
                <p>calc</p>
            </div>
            <div className={props.theme}>
                <p>theme</p>
            </div>
            <div className={props.togglerCont} style={{position: 'relative'}}>
                <div className={props.tracker} style={{position:'absolute',right:'10px',top: '19px',zIndex:5, opacity:1}}>
                    <span  className={props.spanGrp} onClick={() => clickHandler(1)}>1</span>
                    <span  className={props.spanGrp} onClick={() => clickHandler(2)}>2</span>
                    <span  className={props.spanGrp} onClick={() => clickHandler(3)}>3</span>
                </div>
                <div className={props.tracker} style={{position:'absolute',right:'10px',top: '34px',zIndex:5, opacity:0}}>
                    <span  className={props.spanGrp} onClick={() => clickHandler(1)}>1</span>
                    <span  className={props.spanGrp} onClick={() => clickHandler(2)}>2</span>
                    <span  className={props.spanGrp} onClick={() => clickHandler(3)}>3</span>
                </div>
                
                <div className={props.togglerGrp} style={{position: 'relative'}}>
                    <input type="checkbox" name="toggler" id="toggler" className={props.tog} />
                    <label htmlFor="toggler" className={props.labelGrp} className={props.label} style={{position:'absolute',right:'-5px',top: '55px',zIndex:3, transform: 'translateY(10px)'}}></label>
                </div>
            </div>
        </div>
    )
}

export default Head
