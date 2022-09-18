import React from "react"
import { useParams } from "react-router-dom"

import './Memory.css'

import { getMemory } from "app/api/memories.js"

const Memory = ()=>{
	const {type, id} = useParams();
	const cb = (res)=>{
		console.log(res);
	}
	React.useEffect(()=>{
		getMemory(type, id, cb)
	}, []);
	return (
		<div>Memory</div>
	)
}
export default Memory