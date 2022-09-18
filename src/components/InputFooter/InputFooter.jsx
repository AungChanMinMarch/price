import React from "react"

import './InputFooter.css'

const InputFooter = ({submitHandler})=>{
	return (
		<div className="InputFooter fbox">
			<button onClick={()=>history.back()}>Cancel</button>
			<button onClick={submitHandler}>Ok</button>
		</div>
	)
}
export default InputFooter