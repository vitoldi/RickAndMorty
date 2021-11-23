import LocationInfo from './LocationInfo'
import { useSelector, useDispatch } from 'react-redux'
import { getLocationInfoThunkCreator, currentLocationActionCreator} from '../../redux/locationInfoReducer'
import { currentCharacterActionCreator } from '../../redux/charinfoReducer'
import React, { useEffect } from 'react'
import Preloader from '../Preloader/Preloader'

const LocationInfoContainer = () => {
	const locationInfo = useSelector(state => state.locationInfoPage.locationInfo)
	const currentLocation = useSelector(state => state.locationInfoPage.currentLocation)
	const allLocations = useSelector(state => state.locationsPage.allLocations)
	const residents = useSelector(state => state.locationInfoPage.residents)
	const loading = useSelector(state => state.locationInfoPage.loading)

	const dispatch = useDispatch()

	const onLocationInfo = (currentLocation) => {
			dispatch(getLocationInfoThunkCreator(dispatch, currentLocation))
			}
	const	onChangeLocation = (location) => {
			dispatch(currentLocationActionCreator(location))
			}
	const onChangeCharacter = (character) => {
			dispatch(currentCharacterActionCreator(character))
			}

	useEffect(() => {
		onLocationInfo(currentLocation)
	}, [currentLocation])

		if (loading) {
			return <Preloader />
		}

		return (
			<LocationInfo
				locationInfo={locationInfo}
				onChangeLocation={onChangeLocation}
				allLocations={allLocations}
				onLocationInfo={onLocationInfo}
				residents={residents}
				onChangeCharacter={onChangeCharacter}
			/>
		)
}

export default LocationInfoContainer
 