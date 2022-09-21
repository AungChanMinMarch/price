import React from "react"
import { Link } from "react-router-dom"

import './Nav.css'
import { signOut } from 'app/api/auth'

const Nav = ({ onLogOut })=>{
	return (
		<nav className="Nav">
			<Link className='Nav-title' to="/">Prices</Link>
			<button className='Nav-btn' onClick={()=>signOut(onLogOut)}>SignOut</button>
		</nav>
	)
}
export default Nav