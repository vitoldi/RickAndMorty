import React, { Suspense } from 'react'
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
import { useSelector } from 'react-redux'
import Preloader from './component/Preloader/Preloader'

const EpisodesContainer = React.lazy(() => import('./component/Episodes/EpisodesContainer'))
const EpisodesInfoContainer = React.lazy(() => import('./component/EpisodeInfo/EpisodeInfoContainer'))

const App = () => {
	const characterId = useSelector(state => state.charinfoPage.currentCharacter)
	const locationId = useSelector(state => state.locationInfoPage.currentLocation)
	const episodeId = useSelector(state => state.episodeInfoPage.currentEpisode)
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
					<div className='content'>
						<Suspense fallback={Preloader}>
							<Switch>
								<Route exact path='/characters' render={() => <CharactersContainer />} />
								<Route exact path={`/characters/:${characterId}`} render={() => <CharacterInfoContainer />} />
								<Route exact path={`/locations/:${locationId}`} render={() => <LocationInfoContainer />} />
								<Route exact path='/locations' render={() => <LocationsContainer />} />
								<Route exact path={`/episodes/:${episodeId}`} component={EpisodesInfoContainer} />
								<Route exact path='/episodes' component={EpisodesContainer} />
								<Route path='/' render={() => <Content />} />
							</Switch>
						</Suspense>
					</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
} 

export default App
