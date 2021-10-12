import React from 'react'
import { NavLink } from 'react-router-dom'
import Paginator from '../paginator/Paginator'
import classes from './Locations.module.css'
import LocationsFilter from './LocationsFilter/LocationsFilter'

export default class Locations extends React.Component {
	
	render() {
		if (this.props.allLocations.results) {
			return (
				<div className={classes.wrapper}>
					<LocationsFilter
						onChangeFilter={this.props.onChangeFilter}
						onLocations={this.props.onLocations}
						filter={this.props.filter} />

						<div className={classes.content}>
							{this.props.allLocations.results.map(loc => {
								return (
									<NavLink to='locinfo' className={classes.characterCard}
									onClick={this.props.onChangeLocation.bind(null, loc.id)}>
										<div className={classes.characterInfo}>
											<div className={classes.characterName}>
												Name: {loc.name}
											</div>
											<div className={classes.characterSpecies}>
												Type: {loc.type}
											</div>
											<div className={classes.characterSpecies}>
												Dimension: {loc.dimension}
											</div>
										</div>
									</NavLink>)
								})}
							</div >
						<Paginator 
							info={this.props.allLocations.info}
							currentPage={this.props.currentPage}
							onChangePage={this.props.onChangePage} 
							onCharacters={this.props.onLocations}
							filter={this.props.filter}
						/>
						</div>	
						)
					} else {
						return <div></div>
					}
	}
}