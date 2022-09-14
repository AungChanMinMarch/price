import React from "react"
import { Link } from "react-router-dom"

import './Memories.css'
import { Auth, Loading } from "@app/views"

const Memories = ()=>{
	const [openAdd, setOpenAdd] = React.useState(false);
	const toggleOpenAdd = ()=>setOpenAdd(prev=>!prev)
	return (
		<>
			<div>This is Memories page</div>
			<div className="add-memory-container">
				{openAdd && <div className="memory-types">
					<Link to="/memories/add">Create New Memory</Link>
					<Link to="/memories/join">Join Memory</Link>
				</div>}
				<div 
					className="add-icon add-memory"
					onClick={toggleOpenAdd}
				></div>
			</div>
		</>
	)
}
export default Memories