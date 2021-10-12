import React from 'react'
import classes from './Search.module.css'
import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { charactersFilterActionCreator} from '../../../redux/charactersReducer'
import { locationsFilterActionCreator } from '../../../redux/locationsReducer'
import { episodesFilterActionCreator } from '../../../redux/episodesReducer'
import { getSearchThunkCreator } from '../../../redux/searchReducer'
import { debounce } from "debounce"

class Search extends React.Component {
	render () {
		const searchRequest = ({ name, type }) => {
			if (type === '/characters' && name) {
				this.props.onSearchFilterCharacters({name})
				this.props.props.history.replace({ pathname: `/search` })
				this.props.props.history.replace({ pathname: `/characters` })
			} else if (type === '/locations' && name) {
				this.props.onSearchFilterLocations({ name })
				this.props.props.history.replace({ pathname: `/search` })
				this.props.props.history.replace({ pathname: `/locations` })
			} else if (type === '/episodes' && name) {
				this.props.onSearchFilterEpisodes({ name })
				this.props.props.history.replace({ pathname: `/search` })
				this.props.props.history.replace({ pathname: `/episodes` })
			}
		}

		const searchField = ({name, type}) => {
			if (name.length > 2) {
				this.props.onChangeSearchField(1, { name }, type)
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
								{this.props.result && this.props.result.results.map((el) => {
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
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchFilterCharacters: (filter) => {
			dispatch(charactersFilterActionCreator(filter))
		},
		onSearchFilterLocations: (filter) => {
			dispatch(locationsFilterActionCreator(filter))
		},
		onSearchFilterEpisodes: (filter) => {
			dispatch(episodesFilterActionCreator(filter))
		},
		onChangeSearchField: (currentPage, filter, type) => {
			dispatch(getSearchThunkCreator(dispatch, currentPage, filter, type))
		}
	}
}

const mapStateToProps = state => {
	return {
		result: state.searchPage.result
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)