import React from "react"
import { Link } from "react-router-dom"

import { getMemories } from "app/api/memories.js"
import MemorySlug from "./components/MemorySlug.jsx"
import './Memories.css'

const Memories = ()=>{
	const [openAdd, setOpenAdd] = React.useState(false);
	const [memories, setMemories] = React.useState([]);

	const toggleOpenAdd = ()=>setOpenAdd(prev=>!prev);

	const setFn = (res)=>{
		setMemories(res.data.memories)
	}
	React.useEffect(()=>{
		getMemories(setFn)
	}, []);
	return (
		<>
			<div>This is Memories page</div>
			<div className="MemorySlug-container">{
				memories?.map(memory => (
					<MemorySlug key={memory._id} memory={memory}/>
				))
			}</div>
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