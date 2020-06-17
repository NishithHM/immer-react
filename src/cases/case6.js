import React, { useState } from "react";
import produce from 'immer'
const Case6 = (props) => {
    const [hello, setHello] = useState([])
    const addHello = ()=>{
        setHello(produce(draft=> {
            draft.push('hello')
        }))
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

export default Case6;
