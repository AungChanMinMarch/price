import React from "react"
import { Routes, Route } from "react-router-dom"

import Memories from "./Memories.jsx"
import AddMemory from "./AddMemory.jsx"
import JoinMemory from "./JoinMemory.jsx"

const MemoriesRoute = ()=>{
	return (
		<Routes>
			<Route index element={ <Memories /> }/>
			<Route path="/add" element={ <AddMemory />} />
			<Route path="/join" element={ <JoinMemory />} />
		</Routes>
	)
}
export default MemoriesRoute