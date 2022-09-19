import React from "react"

import { Input, RadioInput, InputFooter } from 'app/components';
import { addNewItem } from 'app/api';
import './Add.css';

const initialForm = { name: "", addMemoryType: "PriceMemory"};

const AddItem = ()=>{
	const [newItemForm, setNewItemForm] = React.useState(initialForm);
	const submitItem = ()=>{
		addMemory(newItemForm)
	}
	return (
		<div className="AddMemory">
			<h2>Add New Item</h2>
			<Input label="Memory Name" name="name" state={newItemForm} setter={setNewItemForm}/>

			
			<RadioInput
				radios={[
					{ value:'PriceMemory', label: "Price Memory" }, 
					{ value:'ScheduleMemory', label: "To Do Memory" }, 
				]}
				name="addMemoryType"
				state={newItemForm}
				setter={setNewItemForm} />
			
			<InputFooter submitHandler={submitItem} />
		</div>
	)
}
export default AddItem