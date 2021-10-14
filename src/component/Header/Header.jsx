import React from 'react'
import headerLogo from '../../images/headerLogo.png'
import classes from './Header.module.css'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
	return (
		<div className={classes.header}>
			<div className={classes.navbar}>
				<Navbar />
			</div>
			<div className={classes.imgLogo}>
				<NavLink to='/main'>
					<img src={headerLogo} width='310px' height='100px' />
				</NavLink>
			</div>
			<div className={classes.search}>
				<Search props={props.props} />
			</div>
		</div>
	)
}

export default Header