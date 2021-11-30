import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { themeActionNext } from './../Store/Action/ThemeAction';
const Head = (props) => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth)
        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler);
    }, [width])

    const dispatch = useDispatch()

    let realStyle;

    const large = {position:'absolute',right:'-5px',top: '56px',zIndex:3, transform: 'translateY(10px)'}
    const small = {position:'absolute',right:'3px',top: '66px',zIndex:3, transform: 'translateY(10px)'}

    console.log(width);

    if(width < 800){
        realStyle = small;
    } else {
        realStyle = large;
    }

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
                <div className={props.tracker} style={{position:'absolute',right:'6px',top: '19px',zIndex:5, opacity:1}}>
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
                    <label htmlFor="toggler" className={props.labelGrp} className={props.label} style={realStyle}></label>
                </div>
            </div>
        </div>
    )
}

export default Head
