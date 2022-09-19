import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import { getApp } from "app/api"
import './Home.css'

const Home = ()=>{
	const [items, setItems] = React.useState(null);
	const navigate = useNavigate();

	const setFn = (res)=>{
		console.log(res);
		setItems(res.data.items)
	}
	React.useEffect(()=>{
		getApp(setFn);
	}, []);
	return (
		<div>
			{
				items?.map(item => <div key={item._id}>{item.name}</div>)
			}
			<div>This is Home page</div>
			<div 
				className="add-icon"
				onClick={()=>navigate("/add")}
			></div>
		</div>
	)
}
export default Home