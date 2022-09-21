import React from "react"
import { Link } from "react-router-dom"

import './Nav.css'
import { signOut } from 'app/api/auth'

const Nav = ({ onLogOut })=>{
	return (
		<nav className="Nav fbox">
			<Link to="/" className='Nav-title'>Prices</Link>
			<button onClick={()=>signOut(onLogOut)}>SignOut</button>
		</nav>
	)
}
export default Nav