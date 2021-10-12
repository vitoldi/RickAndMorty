import React from 'react'
import { NavLink } from 'react-router-dom'
import Paginator from '../paginator/Paginator'
import classes from './Characters.module.css'
import CharactersFilter from './CharactersFilter/CharactersFilter'

export default class Characters extends React.Component {
	
	render() {
		if (this.props.allCharacters.results) {
			return (
				<div className={classes.wrapper}>
					<CharactersFilter 
						onChangeFilter={this.props.onChangeFilter}
						onCharacters={this.props.onCharacters}
						filter={this.props.filter}/>
						<div className={classes.content}>
							{this.props.allCharacters.results.map(char => {
								return (
									<NavLink to='charinfo' className={classes.characterCard}
									onClick={this.props.onChangeCharacter.bind(null, char.id)}>
										<div className={classes.characterImg}>
											<img src={char.image} alt="Oops" width='200px' height='200px' />
										</div>
										<div className={classes.characterInfo}>
											<div className={classes.characterName}>
												Name: {char.name}
											</div>
											<div className={classes.characterSpecies}>
												Species: {char.species}
											</div>
											<div className={classes.characterStatus}>
												Status: {char.status}
											</div>
										</div>
									</NavLink>)
								})}
							</div >
						<Paginator 
							info={this.props.allCharacters.info}
							currentPage={this.props.currentPage}
							onChangePage={this.props.onChangePage} 
							onCharacters={this.props.onCharacters}
							filter={this.props.filter}
						/>
						</div>	
						)
					} else {
						return <div></div>
					}
	}
}