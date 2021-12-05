
export function increment()
{
    return {
        type: 'increment'
    }
}
export function decrement()
{
    return {
        type: 'decrement'
    }
}

export function reset()
{
    return {
        type: 'reset'
    }
}

export function handleStep(step)
{
    return {
        type: 'changeStep',
        payload: step,
    }
}

export function updateMax(max)
{
    return {
        type: "updateMax",
        payload: max
    }
}

// export function handleIncrement(step, limit)
// {
//     return {
//         type: 'increment',
//         step: step,
//         limit: limit,
//     };
// }
// export function handleDecrement(step, limit)
// {
//     return {
//         type: 'decrement',
//         step: step,
//         limit: limit,
//     };
// }
// export function reset()
// {
//     return {
//         type: 'reset',
//     };
// }