import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import { getApp } from "app/api"
import './Home.css'

const Home = ()=>{
	const navigate = useNavigate();
	React.useEffect(()=>{
		// getApp(setFn)
	}, []);
	return (
		<>
			<div>This is Home page</div>
			<div 
				className="add-icon"
				onClick={()=>navigate("/add")}
			></div>
		</>
	)
}
export default Home