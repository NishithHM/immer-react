import React  from "react"

function Suggestion(props){

    const {city, onChange, options} = props
    return(
        <div>
        <input type='text' value={city} onChange={(e)=>onChange(e)}></input>
        <div>
            {options.map(city=>{
                return(
                    <div key={city}>{city}</div>
                )
            })}
        </div>
        </div>
    )
}

export default Suggestion