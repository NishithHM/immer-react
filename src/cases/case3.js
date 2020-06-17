import React, { useState } from "react";
import produce from 'immer'

const Case3 = (props) =>{
    const initialState = {
        name:'Abc',
        occupations:{
            sureify:{
                designation: 'Software Engineer',
                role:'Front end developer',
            },
            abc:{
                designation: "Trainee",
                role:'Fresher'
            }
        },
        residence:{
            permanent:'Bangalore',
            temporary:'Hyderabad'
        }
    }

    const [person, setPerson] = useState(initialState)

    

    const promote = ()=>{
       const promoted =  produce(person, draft => {
            draft.occupations.sureify.designation = 'Senior Software Engineer' })

        setPerson(promoted)
    }
    const promoteAndTransfer = ()=>{
        const promoted =  produce(person, draft => {
             draft.occupations.sureify.designation = 'Senior Software Engineer'
             draft.residence.temporary = 'Noida'
             })
 
         setPerson(promoted)
     }

    return(
        <>
        <p>
            Person Details
        </p>
        <br/>
        <p>
            {person.name}
        </p>
        <br/>
        <p>
            {person.occupations.sureify.designation}
        </p>
        <br/>
        <p>
            {person.occupations.sureify.role}
        </p>
        <br/>
        <p>
            {person.residence.temporary}
        </p>
        <br/>
        <button title='Add Hello' onClick={promote}>Promote Person</button>
        <button title='Add Hello' onClick={promoteAndTransfer}>Promote And Person </button>
        </>
    )

}

export default Case3;

