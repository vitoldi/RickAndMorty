import Characters from './Characters'
import { useSelector, useDispatch } from 'react-redux'
import { charactersFilterActionCreator, currentPageActionCreator, getAllCharactersThunkCreator } from '../../redux/charactersReducer'
import React, { useEffect} from 'react'
import { currentCharacterActionCreator } from '../../redux/charinfoReducer'
import NotFound from '../NotFound/NotFound'
import CharactersFilter from './CharactersFilter/CharactersFilter'
import Preloader from '../Preloader/Preloader'

const CharactersContainer = () => {

	const allCharacters = useSelector(state => state.charactersPage.allCharacters)
	const currentPage = useSelector(state => state.charactersPage.currentPage)
	const filter = useSelector(state => state.charactersPage.filter)
	const error = useSelector(state => state.charactersPage.error)
	const loading = useSelector(state => state.charactersPage.loading)

	const dispatch = useDispatch()

	const onCharacters = (currentPage, filter) => {
		dispatch(getAllCharactersThunkCreator(dispatch, currentPage, filter))
	}
	const	onChangePage = (page) => {
			dispatch(currentPageActionCreator(page))
		}
	const	onChangeCharacter = (character) => {
				dispatch(currentCharacterActionCreator(character))
			}
	const onChangeFilter = (filter) => {
					dispatch(charactersFilterActionCreator(filter))
			}

	useEffect(() => {
		onCharacters(currentPage, filter)
	}, [currentPage, filter.name, filter.status, filter.species, filter.gender, filter.type])

		if (loading) {
			return <Preloader />
		}

		if (error) {
			return (
			<div>
					<CharactersFilter
						onChangeFilter={onChangeFilter}
						onCharacters={onCharacters}
						filter={filter} />
					<NotFound />
			</div>
			)
		} else {
			return (
				<Characters
					allCharacters={allCharacters}
					currentPage={currentPage}
					onChangePage={onChangePage}
					onCharacters={onCharacters}
					onChangeCharacter={onChangeCharacter}
					onChangeFilter={onChangeFilter}
					filter={filter} />
			)
		}
}

export default CharactersContainer
 