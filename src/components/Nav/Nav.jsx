import React from "react"

import './Nav.css'
import { signOut } from '@app/api/auth'

const Nav = ({ onLogOut })=>{
	return (
		<div>
			<button onClick={()=>signOut(onLogOut)}>SignOut</button>
		</div>
	)
}
export default Nav