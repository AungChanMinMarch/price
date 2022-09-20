import React from "react"
import { useNavigate } from "react-router-dom"

import ItemSlug from "./ItemSlug.jsx"

import { getApp } from "app/api"
import './Home.css'

const Home = ()=>{
	const [items, setItems] = React.useState(null);
	const [groupObj, setGroupObj] = React.useState({});
	const [activeGp, setActiveGp] = React.useState(false);
	const navigate = useNavigate();

	const gpTypes = Object.keys(groupObj);
	const noGpProperties = ["name", "_id", "owner"];
	const setFn = (res)=>{
		const resItems = res.data.items;
		let gpObj = {};
		resItems.forEach((item) =>{
			for(let property in item){
				if(noGpProperties.indexOf(property) > -1) continue;
				if(!gpObj[property]) gpObj[property]=[];
				if(gpObj[property].indexOf(item[property]) === -1 && item[property] !== undefined){
					gpObj[property].push(item[property]);
				}
			}
		})
		setGroupObj(gpObj);
		setItems(resItems);
	}
	React.useEffect(()=>{
		getApp(setFn);
	}, []);
	const changeHandler = (e)=> {
		setActiveGp(e.target.value);
	}
	function groupItems(){
		if(!activeGp || activeGp === "false") return items;
		let gps = {};
		groupObj[activeGp].map(gpName => {
			gps[gpName] = [];
		})
		items.map(item => {
			gps[item[activeGp]].push(item)
		})
		return gps
	}
	const itemsGrouped = groupItems();
	const navToEdit = (item) => ()=>navigate(`/edit/${item._id}`, { state: {item: item, froms: groupObj.from, places: groupObj.place}}) 
	return (
		<div>
			{
				items?.length === 0
				? <h1>There is No Item... Please Add</h1>
				: <main>
					<nav>
						<label htmlFor="selectGp">Group By</label>
						<select value={activeGp} id="selectGp" onChange={changeHandler}>
							<option value={false}> ---- </option>
							{gpTypes?.map(gpType=>(
								<option key={gpType} value={gpType}>
									{gpType}
								</option>
							))}
						</select>
					</nav>
					{(activeGp && groupObj[activeGp])
					? groupObj[activeGp].map(gpName => (
						<fieldset key={gpName} className="group">
							<legend>{gpName}</legend>
							{itemsGrouped[gpName].map(item => <ItemSlug key={item._id} item={item} navToEdit={navToEdit} gpTypes={gpTypes}/>)
							}
						</fieldset> 
					))
					: items?.map(item => <ItemSlug key={item._id} item={item} navToEdit={navToEdit} gpTypes={gpTypes}/>)
					}
				</main>
			}
			<div 
				className="add-icon"
				onClick={()=>navigate("/add", { state: { froms: groupObj.from, places: groupObj.place}})}
			></div>
		</div>
	)
}
export default Home