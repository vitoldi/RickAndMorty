import React from 'react'
import classes from './Navbar.module.css'
import arrow from '../../../images/navarrow.png'
import { NavLink } from 'react-router-dom'

const displayNav = () => {
	const navMenu = document.getElementById('navMenu')
	if (navMenu.classList.contains(classes.navShow)) {
		navMenu.classList.remove(classes.navShow)
	} else {
		navMenu.classList.add(classes.navShow)
	}
}

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<button className={classes.navButton} onClick={displayNav}>Navigation <img src={arrow} alt="Oops" /></button>
			<div className={classes.navMenu} id='navMenu'>
				<div className={classes.navItem}>
					<NavLink to='/' onClick={displayNav}>Main</NavLink>
				</div>
				<div className={classes.navItem}>
					<NavLink to='/characters' onClick={displayNav}>Characters</NavLink>
				</div>
				<div className={classes.navItem}>
					<NavLink to='/locations' onClick={displayNav}>Locations</NavLink>
				</div>
				<div className={classes.navItem}>
					<NavLink to='/episodes' onClick={displayNav}>Episodes</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar