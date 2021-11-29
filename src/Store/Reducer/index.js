import { combineReducers } from 'redux';
import themeReducer from './ThemeReducer';
import calcReducer from './CalculatorReducer';

const allReducers = combineReducers({
    theme: themeReducer,
    calc: calcReducer
})

export default allReducers;