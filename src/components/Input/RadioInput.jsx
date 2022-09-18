import React from "react"

import './Input.css'

const RadioInput = ({radios, name, state, setter})=>{
	const changeHandler = (e)=>{
		setter(prev => ({...prev, [name]: e.target.value}))
	}
	return (
		<>
		{radios.map(radio => (
			<div className="Input radio" key={radio.value}>
				<label htmlFor={radio.value}>{radio.label}</label>
				<input 
					type="radio"
					id={radio.value}
					name={name}
					value={radio.value}
					checked={radio.value === state[name]}
					onChange={changeHandler}/>
			</div>
		))}
		</>
	)
}
export default RadioInput