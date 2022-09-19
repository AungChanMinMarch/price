import React from "react"

import { Input, RadioInput, InputFooter } from 'app/components';
import { addNewItem } from 'app/api';
import './Add.css';

const initialForm = { name: "", price:  0, from: "", time: new Date(), place: 'PriceMemory' };

const AddItem = ()=>{
	const [newItemForm, setNewItemForm] = React.useState({});
	const submitItem = ()=>{
		addNewItem(newItemForm);
	}

	return (
		<div className="AddMemory">
			<h2>Add New Item</h2>
			<Input label="Name" name="name" state={newItemForm} setter={setNewItemForm}/>
			<Input label="Price" name="price" state={newItemForm} setter={setNewItemForm} type="number"/>

			<RadioInput
				radios={[
					{ value:'PriceMemory', label: "Price Memory" }, 
					{ value:'ScheduleMemory', label: "To Do Memory" }, 
				]}
				name="Place"
				state={newItemForm}
				setter={setNewItemForm} />

			<Input label="Buy From" name="from" state={newItemForm} setter={setNewItemForm}/>
			<Input label="Time" name="time" state={newItemForm} setter={setNewItemForm} type="date"/>
			
			<InputFooter submitHandler={submitItem} />
		</div>
	)
}
export default AddItem