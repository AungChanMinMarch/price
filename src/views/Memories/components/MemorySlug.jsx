import React from "react"

import './MemorySlug.css'

const MemorySlug = ({memory})=>{
	return (
		<a 
			className={`MemorySlug ${memory.memoryType}`}
			href={`/memory/${memory.memoryType}/${memory.memory}`}
		>
			{memory.name}
		</a>
	)
}
export default MemorySlug