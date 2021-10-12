import Locations from './Locations'
import { connect } from 'react-redux'
import { currentPageActionCreator, getAllLocationsThunkCreator, locationsFilterActionCreator } from '../../redux/locationsReducer'
import React from 'react'
import { currentLocationActionCreator } from '../../redux/locationInfoReducer'
import NotFound from '../NotFound/NotFound'
import LocationsFilter from './LocationsFilter/LocationsFilter'
import Preloader from '../Preloader/Preloader'

class LocationsContainer extends React.Component {
	componentDidMount() {
		this.props.onLocations(this.props.currentPage, this.props.filter)
	}

	render () {
		if (this.props.loading) {
			return <Preloader />
		}
		if (this.props.error) {
			return (
				<div>
					<LocationsFilter
						onChangeFilter={this.props.onChangeFilter}
						onLocations={this.props.onLocations}
						filter={this.props.filter} />
					<NotFound />
				</div>
			)
		} else {	return (
			<Locations
				allLocations={this.props.allLocations}
				currentPage={this.props.currentPage}
				onChangePage={this.props.onChangePage}
				onLocations={this.props.onLocations}
				onChangeLocation={this.props.onChangeLocation} 
				filter={this.props.filter}
				onChangeFilter={this.props.onChangeFilter}
				/>
		)
	}}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocations: (currentPage, filter) => {
			dispatch(getAllLocationsThunkCreator(dispatch, currentPage, filter))
		},
		onChangePage: (page) => {
			dispatch(currentPageActionCreator(page))
		},
		onChangeLocation: (location) => {
			dispatch(currentLocationActionCreator(location))
		},
		onChangeFilter: (filter) => {
			dispatch(locationsFilterActionCreator(filter))
		}
	}
}

const mapStateToProps = state => {
	return {
		allLocations: state.locationsPage.allLocations,
		currentPage: state.locationsPage.currentPage,
		filter: state.locationsPage.filter,
		error: state.locationsPage.error,
		loading: state.locationsPage.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer)
 