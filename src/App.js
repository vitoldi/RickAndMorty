import React, { Suspense } from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Preloader from './component/Preloader/Preloader'

const EpisodesContainer = React.lazy(() => import('./component/Episodes/EpisodesContainer'))
const EpisodesInfoContainer = React.lazy(() => import('./component/EpisodeInfo/EpisodeInfoContainer'))
const Content = React.lazy(() => import('./component/Content/Content'))
const CharactersContainer = React.lazy(() => import('./component/Characters/CharactersContainer'))
const CharacterInfoContainer = React.lazy(() => import('./component/CharacterInfo/CharacterInfoContainer'))
const LocationsContainer = React.lazy(() => import('./component/Locations/LocationsContainer'))
const LocationInfoContainer = React.lazy(() => import('./component/LocationInfo/LocationInfoContainer'))

const App = () => {
	const characterId = useSelector(state => state.charinfoPage.currentCharacter)
	const locationId = useSelector(state => state.locationInfoPage.currentLocation)
	const episodeId = useSelector(state => state.episodeInfoPage.currentEpisode)
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
					<div className='content'>
						<Suspense fallback={<Preloader />}>
							<Switch>
								<Route exact path='/characters' render={() => <CharactersContainer />} />
								<Route exact path={`/characters/:${characterId}`} render={() => <CharacterInfoContainer />} />
								<Route exact path={`/locations/:${locationId}`} render={() => <LocationInfoContainer />} />
								<Route exact path='/locations' render={() => <LocationsContainer />} />
								<Route exact path={`/episodes/:${episodeId}`} render={() => <EpisodesInfoContainer />} />
								<Route exact path='/episodes' render={() => <EpisodesContainer />} />
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
