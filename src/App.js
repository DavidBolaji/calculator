import React, { useState } from 'react';
import Container from './Components/Container';
import Head from './Components/Head';
import { useSelector, useDispatch } from 'react-redux';
import STYLE from './Styles/style.module.css';
import STYLETWO from './Styles/stylestwo.module.css';
import STYLETHREE from './Styles/style-three.module.css';
import Screen from './Components/Screen';
import Keypad from './Components/Keypad';
import Button from './Components/Button';
import btnData from './Data/BtnData';
import { showNum, setSign, clearAct, setTotal } from './Store/Action/calcAction';

// define  arr
let arr = [];

let newArr = [];

let newTotal = '';


const sorted = (list) => {
     // create a variable temp
    let temp = ''

    console.log(arr);
    // loop through array
    for (let i = 0; i < list.length; i++) {

        // checking one step ahead in list to find if next number is an operator
        if (list[i + 1] === '+' || list[i + 1] === '-' || list[i + 1] === '/' || list[i + 1] === '*' || list[i + 1] === '=') {

            // check if the variable temp is not empty
            if (temp !== '') {

                // add the current element
                temp += list[i]
                    // push temp into array
                newArr.push(temp)

                // reset temp
                temp = ''

            } else { // if temp is empty

                // check if current element is not an arithmetic operator 
                if (list[i] !== '+' && list[i] !== '-' && list[i] !== '/' && list[i] !== '*') {
                    // push current element to listay
                    newArr.push(list[i])
                }
            }

        } else { // if the next element is a number

            // concat it to temp variable
            temp += list[i]
        }
    }
}

const getSome = (newArr) => {

    let sum = 0;

     newArr.forEach(el => {
        // check if element has a plus sign before number or minus sign or is a number
        if (String(el.split()[0][0]) === '+' || String(el.split()[0][0]) === '-' || '0123456789'.split('').includes(el.split()[0][0])) {

            // add the number to sum
            sum += Number(el)

        } else if (el.split()[0][0] === '*') { // if number has a multiply sign

            // multiply sum after removing the sign
            sum *= Number(el.split()[0].replace('*', ''))

        } else {
            // divide sum after removing sign
            sum /= Number(el.split()[0].replace('/', ''))
        };

    })
    return sum;
}



function App() {
    const [clear, setClear] = useState(false)

   
    // load theme with redux
    const Theme = useSelector(state => state.theme);
    // load calculator with redux
    const calc = useSelector(state => state.calc);
    // redux dispatch action
    const dispatch = useDispatch()

    // initialize style variable
    let ACTUAL_STYLE;

    const newTheme = window.localStorage.getItem('THEME')

    if(newTheme) {
        if (newTheme === '1') {
            ACTUAL_STYLE = STYLE
        } else if (newTheme === '2') {
            ACTUAL_STYLE = STYLETWO
        } else {
            ACTUAL_STYLE = STYLETHREE
        }
        
    } else {
        if (Theme === 1) {
            ACTUAL_STYLE = STYLE
        } else if (Theme === 2) {
            ACTUAL_STYLE = STYLETWO
        } else {
            ACTUAL_STYLE = STYLETHREE
        }
    }


    // Destructure style
    const { buttons, special, equal } = ACTUAL_STYLE;

    // calculator click handler(fuction to sort calculator values)
    const clickHandler = (val) => {

       

        // check if click is = sign
        if (val === '=') {
            setClear(true)
            // push the value to arr
            arr.push(val)

           sorted(arr)

            // set sum to zero
            let sum = getSome(newArr);
            // loop through generated array
            getSome(newArr)

            // set array back to empty
            arr = []

            // dispatch action to set the sum to total in redux
            dispatch(setTotal(sum));



            // end code in block
            return;

        } else if (val === '+' || val === '-' || val === 'x' || val === '/') { // if any of the signs 

            setClear(false)    

            // dispatch action for sign display on screen
            dispatch(showNum(val))

            arr.push(val)

        } else if (val === 'DEL') { // if DEL is pressed

            if(!clear) {

                if (newArr.length === 0) {
                    arr.pop()
                } else {
                    arr.pop()
                }


                if (calc.total.length <= 1) {
                    return dispatch(clearAct())
                }

                // loop through array to find current element
                for (let i = 0; i < calc.total.length - 1; i++) {

                    newTotal += calc.total[i];

                    // dispatch(clear())

                    dispatch(setSign(newTotal));


                }

                newTotal = '';

            } else {

                arr = [];

                newArr = [];

                setClear(false)

                return dispatch(clearAct());

            }

            // remove last element from arr
            

            

        } else if (val === 'RESET') { // if RESET is pressed

            arr = [];

            newArr = [];

            return dispatch(clearAct());

        } else { // if its not a sign

            // dispatch action for number display
            dispatch(showNum(val))

            arr.push(val)
        }


        // console.log(arr.join().split());


    }

    


    const btnLists = btnData(buttons, special, equal).map(list => {
        return ( <
            Button buttons = { list.style }
            key = { list.id }
            id = { list.id }
            value = { list.value }
            special = { list.special }
            equal = { list.equal }
            onClick = {
                () => clickHandler(list.value)
            }
            />
        )
    })


    return (<div className = { ACTUAL_STYLE.container } >
        <Container className = { ACTUAL_STYLE.holder } >
            <Head head = { ACTUAL_STYLE.head }
                title = { ACTUAL_STYLE.title }
                theme = { ACTUAL_STYLE.theme }
                tracker = { ACTUAL_STYLE.track }
                togglerCont = { ACTUAL_STYLE.togglerCont }
                togglerGrp = { ACTUAL_STYLE.togglerGrp }
                spanGrp = { ACTUAL_STYLE.spanGrp }
                label = { ACTUAL_STYLE.label }
                tog = { ACTUAL_STYLE.tog }
            />

        <Screen screen = { ACTUAL_STYLE.screen }
        />

        <Keypad casein = { ACTUAL_STYLE.casein } > { btnLists } <
        
        /Keypad>


        <
        /Container> < /
        div >
    );
}

export default App;