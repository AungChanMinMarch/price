import React from "react"

import './Loading.css'

const Loading = ({description})=>{
	// const { promiseInProgress, promiseCanceler } = usePromiseTracker();
	return (
		<div className="Loading">
			{/*{onCancel && <img 
				src="/img/close.svg" 
				alt="cancel btn"
				className="load-closer"
				onClick={onCancel}
			/>}*/}
			<div className="loader"></div>
			<div className="load-description">{description || "Loading please wait..."}</div>
		</div>
	)
}
export default Loading