import { connect } from "react-redux";
import { increment, decrement, reset } from "../store/action";
import Steps from "./Steps";
import Max from "./Max"

function App(props)
{
    // console.log(props, increment, decrement, reset)
    // function handleIncrement()
    // {
    //     props.dispatch({
    //         type: 'increment'
    //     })
    // }
    // function handleDecrement()
    // {
    //     props.dispatch({
    //         type: 'decrement'
    //     })
    // }

    // function handleReset()
    // {
    //     props.dispatch({
    //         type: 'reset'
    //     })
    // }


    return <>
        <h1>{props.count}</h1>
        <button onClick={() =>
        {
            props.dispatch(increment())
        }}>Increment</button>
        <button onClick={() => { props.dispatch(decrement()) }}>Decrement</button>
        <button onClick={() => { props.dispatch(reset()) }}>Reset</button>
        <div>
            <Steps />
        </div>
        <div>
            <Max />
        </div>
    </>
}

function getState(state)
{
    return {
        // ...state
        count: state.value,
    }
}
export default connect(getState)(App);

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import Header from './Header';
// import { handleIncrement, handleDecrement, reset } from '../store/action.js';
// function App(props)
// {
//     const [step, setStep] = useState(5);
//     const [limit, setLimit] = useState(Infinity);
//     function handleStep(event)
//     {
//         var num = Number(event.target.innerText);
//         setStep(num);
//     }
//     function handleLimit(event)
//     {
//         var num = Number(event.target.innerText);
//         setLimit(num);
//     }
//     return (
//         <>
//             <Header />
//             <button onClick={() => props.dispatch(handleIncrement(step, limit))}>
//                 Increment
//             </button>
//             <button onClick={() => props.dispatch(handleDecrement(step, limit))}>
//                 Decrement
//             </button>
//             <button onClick={() => props.dispatch(reset())}>Reset</button>

//             <div>
//                 <button onClick={handleStep}>5</button>
//                 <button onClick={handleStep}>10</button>
//                 <button onClick={handleStep}>15</button>
//             </div>
//             <div>
//                 <button onClick={handleLimit}>15</button>
//                 <button onClick={handleLimit}>100</button>
//                 <button onClick={handleLimit}>200</button>
//             </div>
//         </>
//     );
// }

// export default connect()(App);