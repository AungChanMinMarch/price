import React from "react"

import './Input.css'

const RadiosInput = ({radios, label, name, state, setter})=>{
	const [text, setText] = React.useState();
	const changeHandler = (e)=>{
		setter(prev => ({...prev, [name]: e.target.value}))
	}
	const changeText = (e)=>{
		setText(e.target.value);
		changeHandler(e);
	}
	return (
		<fieldset className="RadiosInput">
			<legend>{label}</legend>
			{radios?.length > 0 && radios.map(radio => (
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
			<input 
				className="add-new-radio"
				type="text" 
				value={text}
				placeholder={`Add New ${label}`}
				onChange={changeText}/>
		</fieldset>
	)
}
export default RadiosInput