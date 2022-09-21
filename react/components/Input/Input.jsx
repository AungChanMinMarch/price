import React from "react"

import './Input.css'

const Input = ({label, type, name, state, setter, defaultValue})=>{
	const changeHandler = (e)=>{
		setter(prev => ({...prev, [name]: e.target.value}))
	}
	return (
		<div className="Input">
			<label htmlFor={name}>{label}</label>
			<input 
				type={type ||"text"} 
				id={name} 
				value={state[name]}
				onChange={changeHandler}
				defaultValue={defaultValue}
				/>
		</div>
	)
}
export default Input