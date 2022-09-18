import React from "react"

import { Input, RadioInput, InputFooter } from 'app/components';
import { addMemory } from 'app/api/memories.js';
import './AddMemory.css';

const initialAddMemoryForm = { name: "", addMemoryType: "price"};

const AddMemory = ()=>{
	const [addMemoryForm, setAddMemoryForm] = React.useState(initialAddMemoryForm);
	const submitAddMemoryForm = ()=>{
		addMemory(addMemoryForm)
	}
	return (
		<div className="AddMemory">
			<h2>Create New Memory</h2>
			<Input label="Memory Name" name="name" state={addMemoryForm} setter={setAddMemoryForm}/>

			
			<RadioInput
				radios={[
					{ value:'price', label: "Price Memory" }, 
					{ value:'todo', label: "To Do Memory" }, 
				]}
				name="addMemoryType"
				state={addMemoryForm}
				setter={setAddMemoryForm} />
			
			<InputFooter submitHandler={submitAddMemoryForm}/>
		</div>
	)
}
export default AddMemory