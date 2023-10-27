import React, { useState } from 'react'

const BHome = () => {
    const [inputValue, setInputValue] = useState(0)

    console.log(inputValue);

    // const changeHandler = (e) => {
    //     inputValue = e.target.value;
    //     console.log(inputValue);
    // };


    const increment = () => {
        setInputValue(inputValue + 1)
    }
    const decrement = () => {
        setInputValue(inputValue - 1)
    }

    const btnstyle = {
        padding: 20,
        border: "none",
        backgroundColor: "#f1f1f1",
        margin: 10,
    }
    return (
        <>
            <input style={{ padding: 20, border: "1px solid rgba(o,0,0,0.4" }}
                type='number'
                placeholder='enter something'
                // onChange={changeHandler}     
                value={inputValue}
            ></input >

            <button style={btnstyle} onClick={increment}>+</button>
            <button style={btnstyle} onClick={decrement}>-</button>
        </>
    )
}

export default BHome;