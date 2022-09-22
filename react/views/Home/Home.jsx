import React from "react"
import { useNavigate } from "react-router-dom"

import ItemSlug from "./ItemSlug.jsx"

import { getApp } from "app/api"
import './Home.css'

const Home = ()=>{
	const [items, setItems] = React.useState(null);
	const [places, setPlaces] = React.useState(null);
	const [froms, setFroms] = React.useState(null);
	const [active, setActive] = React.useState(null);

	const navigate = useNavigate();

	const noGpProperties = ["name", "_id", "owner"];
	const setFn = (res)=>{
		const resItems = res.data.items;
		let Places = [];
		let Froms = [];
		resItems.forEach((item) =>{
			if(Places.indexOf(item.place) === -1 && item.place !== undefined){
				Places.push(item.place);
			}
			if(Froms.indexOf(item.from) === -1 && item.from !== undefined){
				Froms.push(item.from);
			}
		})
		setPlaces(Places);
		setFroms(Froms);
		setItems(resItems);
	}
	React.useEffect(()=>{
		getApp(setFn);
	}, []);

	function groupItems(){
		if(!items) return ;
		let gps = {};
		places.map(placeName => {
			gps[placeName] = [];
		})
		gps.undefined = [];
		items.map(item => {
			if(item.place) //item[activeGp] is not undefined
				gps[item.place].push(item)
			else gps.undefined.push(item)
		})
		return gps
	}
	const itemsGrouped = groupItems();
	const navToEdit = (item) => ()=>navigate(`/edit/${item._id}`, { state: { item, froms, places }});
	const onClick = (newValue) => ()=>setActive(newValue);
	return (
		<div>
			{
				items?.length === 0
				? <h1>There is No Item... Please Add...</h1>
				: <main>
					{places?.length > 0 && <nav>
						<button className={active === null && "active-btn"} onClick={onClick(null)}>All</button>
						{places.map(placeName => (
							<button className={active === placeName && "active-btn"} key={placeName} onClick={onClick(placeName)}>{placeName}</button>
						))
						}
					</nav>}
					{(active != null)
					? <div className="group">
						{itemsGrouped[active]?.map(item => <ItemSlug key={item._id} item={item} navToEdit={navToEdit}/>)}
						<ItemSlug key={item._id} item={item} navToEdit={navToEdit}/>
					</div>
					: itemsGrouped && Object.keys(itemsGrouped)?.map(placeName => (
						<fieldset key={placeName} className="group">
							<legend>{placeName}</legend>
							<div className="ItemSlug-container">
							{itemsGrouped[placeName].map(item => <ItemSlug key={item._id} item={item} navToEdit={navToEdit}/>)
							}
							</div>
						</fieldset> 
					))
					}
				</main>
			}
			<div 
				className="add-icon add-item-icon"
				onClick={()=>navigate("/add", { state: { froms, places}})}
			></div>
		</div>
	)
}
export default Home