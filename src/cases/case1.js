import React, { useState } from "react";

const Case1 = (props) => {
    const [hello, setHello] = useState([])
    const addHello = ()=>{
        const newHello = hello
        newHello.push('hello')
        setHello(newHello)
    }

    

    return(
        <>
        {
            hello.map(text=><p>{text}</p>)
        }
        <button title='Add Hello' onClick={addHello}>Add hello</button>
        </>
    )
};

export default Case1;
