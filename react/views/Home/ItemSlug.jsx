import React from "react"

import './ItemSlug.css'

const ItemSlug = ({item, navToEdit, gpTypes})=>{
	const [isExpended, setIsExpended] = React.useState(false);
	return (
		<div className="ItemSlug" >
			<div className="ItemSlug-nav">
				<header className="ItemSlug-header fbox" onClick={navToEdit(item)}>
					<h2>{item.name}</h2>
					<h4>{item.price}</h4>
				</header>
				<div onClick={()=>setIsExpended(prev =>!prev)}>{isExpended ? "Up" : "Down"}</div>
			</div>
			{isExpended && <div>
				{gpTypes.map(gpType => (
					<div key={gpType}>{gpType} : {item[gpType]}</div>
					))
				}
			</div>}
		</div>
	)
}
export default ItemSlug