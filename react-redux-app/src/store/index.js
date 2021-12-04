import { createStore } from 'redux';


function counterReducer(state = { value: 0, step: 5 }, action)
{
    switch (action.type)
    {
        case 'increment':
            return { ...state, value: state.value + (state.step) }
        case 'decrement':
            return { ...state, value: state.value - (state.step) }
        case 'reset':
            return { ...state, value: 0 }
        case 'changeStep':
            return { ...state, step: action.payload }
        default:
            return state
    }
}

let store = createStore(counterReducer)

export default store