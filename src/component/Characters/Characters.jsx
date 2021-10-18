import React from 'react'
import Paginator from '../paginator/Paginator'
import classes from './Characters.module.css'
import CharactersFilter from './CharactersFilter/CharactersFilter'
import {
	NavLink,
	useRouteMatch
} from "react-router-dom"

const Characters = (props) => {
	let match = useRouteMatch()
		if (props.allCharacters.results) {
			return (
				<div className={classes.wrapper}>
					<CharactersFilter 
						onChangeFilter={props.onChangeFilter}
						onCharacters={props.onCharacters}
						filter={props.filter}/>
						<div className={classes.content}>
							{props.allCharacters.results.map(char => {
								return (
									<NavLink to={`${match.url}/:${char.id}`} className={classes.characterCard}
									onClick={props.onChangeCharacter.bind(null, char.id)}
									key = {char.id}>
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
								info={props.allCharacters.info}
								currentPage={props.currentPage}
								onChangePage={props.onChangePage} 
								onCharacters={props.onCharacters}
								filter={props.filter}
							/>
						</div>
						)
					} else {
						return <div></div>
					}
}

export default Characters