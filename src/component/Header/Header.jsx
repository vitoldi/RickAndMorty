import React from 'react'
import headerLogo from '../../images/headerLogo.png'
import classes from './Header.module.css'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.navbar}>
				<Navbar />
			</div>
			<div className={classes.imgLogo}>
				<NavLink to='/RickAndMorty/'>
					<img src={headerLogo} width='310px' height='100px' alt="Oops" />
				</NavLink>
			</div>
			<div className={classes.search}>
				<Search />
			</div>
		</div>
	)
}

export default Header