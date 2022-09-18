import React from "react"

import './Nav.css'
import { signOut } from 'app/api/auth'

const Nav = ({ onLogOut })=>{
	return (
		<nav className="Nav fbox">
			<div className='Nav-title'>Memories</div>
			<button onClick={()=>signOut(onLogOut)}>SignOut</button>
		</nav>
	)
}
export default Nav