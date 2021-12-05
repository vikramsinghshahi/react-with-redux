import { connect } from "react-redux"
import "../style/style.css"
import { updateMax } from "../store/action"

function Max(props)
{

    console.log(props)

    function handlemax(max)
    {
        props.dispatch(
            updateMax(max)
        )
    }

    return <>
        <button
            onClick={() => { handlemax(15) }}
            className={props.max === 15 ? "active" : ""}>15</button>
        <button
            onClick={() => { handlemax(100) }}
            className={props.max === 100 ? "active" : ""}>100</button>
        <button
            onClick={() => { handlemax(200) }}
            className={props.max === 200 ? "active" : ""}>200</button>
    </>
}

function mapMaxToProps(state)
{
    return ({
        max: state.max
    })
}

export default connect(mapMaxToProps)(Max);