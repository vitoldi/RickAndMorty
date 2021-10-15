import React from 'react'
import classes from './Search.module.css'
import { Formik, Field, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { charactersFilterActionCreator} from '../../../redux/charactersReducer'
import { locationsFilterActionCreator } from '../../../redux/locationsReducer'
import { episodesFilterActionCreator } from '../../../redux/episodesReducer'
import { getSearchThunkCreator } from '../../../redux/searchReducer'
import { debounce } from "debounce"
import { useHistory } from 'react-router-dom'

const Search = (props) => {
	const result = useSelector(state => state.searchPage.result)

	const dispatch = useDispatch()

	const onSearchFilterCharacters = (filter) => {
			dispatch(charactersFilterActionCreator(filter))
			}
	const onSearchFilterLocations = (filter) => {
			dispatch(locationsFilterActionCreator(filter))
			}
	const onSearchFilterEpisodes = (filter) => {
			dispatch(episodesFilterActionCreator(filter))
			}
	const onChangeSearchField = (currentPage, filter, type) => {
			dispatch(getSearchThunkCreator(dispatch, currentPage, filter, type))
			}

	const history = useHistory()
	
	const searchRequest = ({ name, type }) => {
		if (type === '/characters' && name) {
			onSearchFilterCharacters({name})
			history.replace(`/search`)
			history.replace(`/characters`)
		} else if (type === '/locations' && name) {
			onSearchFilterLocations({ name })
			history.replace(`/search`)
			history.replace(`/locations`)
		} else if (type === '/episodes' && name) {
			onSearchFilterEpisodes({ name })
			history.replace(`/search`)
			history.replace(`/episodes`)
		}
	}

	const searchField = ({name, type}) => {
		if (name.length > 2) {
			onChangeSearchField(1, { name }, type)
		}
	}

	return (
		<div>
			<Formik initialValues={{ name: '', type: '/characters'}}
				onSubmit = {(values) => searchRequest(values)}
				validate= {debounce((values) => searchField(values), 400)}>
				{({ values }) => (
				<Form className={classes.search}>
					<div className={classes.searchInput}>
						<Field id="name" name="name" placeholder="Search..." list="searchName" />
						<datalist id="searchName">
							{result && result.results.map((el) => {
								return <option value={el.name} />
							})}
						</datalist>

						<button type="submit">Search</button>
					</div>
					
					<div className={classes.searchRadio}>
						<div className={values.type === "/characters"
							? classes.radioActive
							: classes.radioItem}>
							<label>
								<Field type="radio" name="type" value="/characters" />
							Character</label>
						</div>
							<div className={values.type === "/locations"
								? classes.radioActive
								: classes.radioItem}>
							<label>
								<Field type="radio" name="type" value="/locations" />
							Location</label>
						</div>
							<div className={values.type === "/episodes"
								? classes.radioActive
								: classes.radioItem}>
								
							<label>
								<Field type="radio" name="type" value="/episodes" />
							Episode</label>
						</div>
					</div>
					
					</Form>)}
			</Formik>
		</div>
	)
}

export default Search