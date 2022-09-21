import React from "react"

import './ItemSlug.css'

const gpTypes = ["from", "interest", "amount"]

const ItemSlug = ({item, navToEdit})=>{
	const [isExpended, setIsExpended] = React.useState(false);
	return (
		<div className="ItemSlug" >
			<div className="ItemSlug-nav fbox">
				<header className="ItemSlug-header fbox">
					<h3>{item.name}</h3>
					<h4 className="ItemSlug-price">{item.price}</h4>
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