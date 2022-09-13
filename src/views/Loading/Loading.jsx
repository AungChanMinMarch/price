import React from "react"

import './Loading.css'

const Loading = ({onCancel, description})=>{
	// const { promiseInProgress, promiseCanceler } = usePromiseTracker();
	return (
		<div className="Loading">
			{onCancel && <div className="load-closer" onClick={onCancel}>close btn</div>}
			<div className="loader"></div>
			<div className="load-description">{description || "Loading please wait..."}</div>
		</div>
	)
}
export default Loading