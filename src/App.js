import React from 'react'
import Header from './component/Header/Header'
import Content from './component/Content/Content'
import Footer from './component/Footer/Footer'
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom'
import CharactersContainer from './component/Characters/CharactersContainer'
import CharacterInfoContainer from './component/CharacterInfo/CharacterInfoContainer'
import LocationsContainer from './component/Locations/LocationsContainer'
import LocationInfoContainer from './component/LocationInfo/LocationInfoContainer'
import EpisodesContainer from './component/Episodes/EpisodesContainer'
import EpisodesInfoContainer from './component/EpisodeInfo/EpisodeInfoContainer'
import { useSelector } from 'react-redux'

const App = () => {
	const characterId = useSelector(state => state.charinfoPage.currentCharacter)
	const locationId = useSelector(state => state.locationInfoPage.currentLocation)
	const episodeId = useSelector(state => state.episodeInfoPage.currentEpisode)
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
					<div className='content'>
						<Switch>
							<Route path={`/characters/:${characterId}`} render={() => <CharacterInfoContainer />} />
							<Route path='/characters' render={() => <CharactersContainer />} />
							<Route path={`/locations/:${locationId}`} render={() => <LocationInfoContainer />} />
							<Route path='/locations' render={() => <LocationsContainer />} />
							<Route path={`/episodes/:${episodeId}`} render={() => <EpisodesInfoContainer />} />
							<Route path='/episodes' render={() => <EpisodesContainer />} />
							<Route path='/' render={() => <Content />} />
						</Switch>
					</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
} 

export default App
