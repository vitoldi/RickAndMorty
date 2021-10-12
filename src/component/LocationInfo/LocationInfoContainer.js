import LocationInfo from './LocationInfo'
import { connect } from 'react-redux'
import { getLocationInfoThunkCreator, currentLocationActionCreator} from '../../redux/locationInfoReducer'
import { currentCharacterActionCreator } from '../../redux/charinfoReducer'
import React from 'react'
import Preloader from '../Preloader/Preloader'

class LocationInfoContainer extends React.Component {
	componentDidMount() {
		this.props.onLocationInfo(this.props.currentLocation)
	}

	render () {
		if (this.props.loading) {
			return <Preloader />
		}
		return (
			<LocationInfo
				locationInfo={this.props.locationInfo}
				onChangeLocation={this.props.onChangeLocation}
				allLocations={this.props.allLocations}
				onLocationInfo={this.props.onLocationInfo}
				residents={this.props.residents}
				onChangeCharacter={this.props.onChangeCharacter}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocationInfo: (currentLocation) => {
			dispatch(getLocationInfoThunkCreator(dispatch, currentLocation))
		},
		onChangeLocation: (location) => {
			dispatch(currentLocationActionCreator(location))
		},
		onChangeCharacter: (character) => {
			dispatch(currentCharacterActionCreator(character))
		}
	}
}

const mapStateToProps = state => {
	return {
		locationInfo: state.locationInfoPage.locationInfo,
		currentLocation: state.locationInfoPage.currentLocation,
		allLocations: state.locationsPage.allLocations,
		residents: state.locationInfoPage.residents,
		loading: state.locationInfoPage.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfoContainer)
 