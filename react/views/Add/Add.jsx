import React from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { Input, RadiosInput, InputFooter } from 'app/components';
import { addNewItem, updateItem } from 'app/api';
import './Add.css';

const AddItem = ()=>{
	const { state } = useLocation();
	const { id } = useParams();
	const navigate = useNavigate();

	const [itemForm, setItemForm] = React.useState(state?.item || {});
	const cb=()=>{
		navigate("/");
	}
	const submitItem = ()=>{
		if(!itemForm.name || itemForm.name == ""){
			return toast.error("Item Name cannot be empty");
		}
		if(!itemForm.price || itemForm.price == 0){
			return toast.error("Item price cannot be empty");
		}
		if(id) {
			return updateItem(state?.item, itemForm,cb)
		}
		addNewItem(itemForm, cb);
	}
	React.useEffect(()=>{
		if(!state) navigate("/") // don't navigate ask to backend
	}, []);
	const today = new Date().toISOString().substring(0, 10);
	return (
		<div className="AddMemory">
			{id
				? <h2>{state?.item?.name}</h2>
				: <h2>Add New Item</h2>
			}
			{!id && <Input label="Name" name="name" state={itemForm} setter={setItemForm}/>}
			<Input label="Price" name="price" state={itemForm} setter={setItemForm} type="number"/>

			{state && <RadiosInput
				label="Shop You Bought"
				name="from"
				state={itemForm}
				setter={setItemForm} 
				radios={state?.froms?.map((from)=>({value: from, label: from}))}
				/>}

			{state && <RadiosInput
				label="Place"
				name="place"
				state={itemForm}
				setter={setItemForm} 
				radios={state.places?.map((place)=>({value: place, label: place}))} />}

			<fieldset>
				<legend>Interest</legend>
				<Input label="Interest" name="interest" state={itemForm} setter={setItemForm} type="number"/>
				<Input label="Amount" name="amount" state={itemForm} setter={setItemForm} type="number"/>
			</fieldset>

			<Input label="Date" name="date" state={itemForm} setter={setItemForm} type="date" defaultValue={today}/>
			
			<InputFooter submitHandler={submitItem} />
		</div>
	)
}
export default AddItem