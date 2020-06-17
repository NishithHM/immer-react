import React, { useState } from "react";

const Case2 = (props) =>{
    const inittialState = {
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

    const [person, setPerson] = useState(inittialState)

    

    const promote = ()=>{
        const promoted = {
            ...person,
            occupations:{
                ...person.occupations,
                sureify:{
                    ...person.occupations.sureify,
                    designation: 'Senior Software Engineer'
                }
            },
        }

        setPerson(promoted)
    }

    const promoteAndTransfer = ()=>{
        const promoted = {
            ...person,
            occupations:{
                ...person.occupations,
                sureify:{
                    ...person.occupations.sureify,
                    designation: 'Senior Software Engineer'
                }
            },
            residence:{
                ...person.residence,
                temporary:'Noida'
            }
        }

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
        <p>
            {person.residence.temporary}
        </p>
        <br/>
        <button title='Add Hello' onClick={promote}>Promote Person</button>
        <button title='Add Hello' onClick={promoteAndTransfer}>Promote And Person </button>
        </>
    )

}

export default Case2;

