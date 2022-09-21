import React from "react"

import './ItemSlug.css'

const ItemSlug = ({item, navToEdit, gpTypes})=>{
	const [isExpended, setIsExpended] = React.useState(false);
	return (
		<div className="ItemSlug" >
			<div className="ItemSlug-nav">
				<header className="ItemSlug-header fbox">
					<h2>{item.name}</h2>
					<h4>{item.price}</h4>
				</header>
				<img 
					src="/svg/edit.svg" 
					className="ItemSlug-btn ItemSlug-editBtn"
					onClick={navToEdit(item)}/>
				<img 
					src="/svg/expand.svg" 
					className={`ItemSlug-btn ItemSlug-expandBtn ${isExpended ? "ItemSlug-expanded" : "ItemSlug-notexpanded"}`}
					onClick={()=>setIsExpended(prev =>!prev)}/>
			</div>
			{isExpended && <div className="ItemSlug-body">
				{gpTypes.map(gpType => (
					<div key={gpType}>{gpType} : {item[gpType]}</div>
					))
				}
			</div>}
		</div>
	)
}
export default ItemSlug