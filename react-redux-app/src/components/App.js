import { connect } from "react-redux";
import { increment, decrement, reset } from "../store/action";
import Steps from "./Steps";

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