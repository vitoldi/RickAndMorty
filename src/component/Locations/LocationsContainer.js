import Locations from './Locations'
import { useSelector, useDispatch } from 'react-redux'
import { currentPageActionCreator, getAllLocationsThunkCreator, locationsFilterActionCreator } from '../../redux/locationsReducer'
import React, { useEffect } from 'react'
import { currentLocationActionCreator } from '../../redux/locationInfoReducer'
import NotFound from '../NotFound/NotFound'
import LocationsFilter from './LocationsFilter/LocationsFilter'
import Preloader from '../Preloader/Preloader'

const LocationsContainer = (props) => {
	const allLocations = useSelector(state => state.locationsPage.allLocations)
	const currentPage = useSelector(state => state.locationsPage.currentPage)
	const filter = useSelector(state => state.locationsPage.filter)
	const error = useSelector(state => state.locationsPage.error)
	const loading = useSelector(state => state.locationsPage.loading)

	const dispatch = useDispatch()

	const onLocations = (currentPage, filter) => {
			dispatch(getAllLocationsThunkCreator(dispatch, currentPage, filter))
		}
	const	onChangePage = (page) => {
			dispatch(currentPageActionCreator(page))
		}
	const onChangeLocation = (location) => {
			dispatch(currentLocationActionCreator(location))
			}
	const onChangeFilter = (filter) => {
				dispatch(locationsFilterActionCreator(filter))
			}

	useEffect(() => {
		onLocations(currentPage, filter)
	}, [currentPage, filter.name, filter.dimension, filter.type])
	
	if (loading) {
			return <Preloader />
		}
		if (error) {
			return (
				<div>
					<LocationsFilter
						onChangeFilter={onChangeFilter}
						onLocations={onLocations}
						filter={filter} />
					<NotFound />
				</div>
			)
		} else {	return (
			<Locations
				allLocations={allLocations}
				currentPage={currentPage}
				onChangePage={onChangePage}
				onLocations={onLocations}
				onChangeLocation={onChangeLocation} 
				filter={filter}
				onChangeFilter={onChangeFilter}
				/>
		)
	}
}

export default LocationsContainer
 