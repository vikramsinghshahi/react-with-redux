import { connect } from "react-redux"
import { handleStep } from "../store/action"
import "../style/style.css"
function Steps(props)
{
    console.log(props)
    // function handleSteps()
    // {
    //     props.dispatch({
    //         action
    //     })
    // }

    function handleClick(step)
    {
        props.dispatch(
            handleStep(step)
        )
    }


    return <>
        <button
            onClick={() => { handleClick(5) }}
            className={props.steps === 5 ? "active" : ""}>5</button>
        <button
            onClick={() => { handleClick(10) }}
            className={props.steps === 10 ? "active" : ""}>10</button>
        <button
            onClick={() => { handleClick(15) }}
            className={props.steps === 15 ? "active" : ""}>15</button>
        {/* <button onClick={() =>
        {
            props.dispatch({
                step: 5
            })

        }}>5</button>
        <button onClick={() =>
        {
            props.dispatch({
                step: 10
            })

        }}>10</button>
        <button onClick={() =>
        {
            props.dispatch({
                step: 15
            })

        }}>15</button> */}
    </>
}

function mapStateToprops(state)
{
    // console.log(state.step)

    return {
        steps: state.step
    }
}

export default connect(mapStateToprops)(Steps);