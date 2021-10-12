import React from 'react'
import Header from './component/Header/Header'
import Content from './component/Content/Content'
import Footer from './component/Footer/Footer'
import {
	BrowserRouter,
	Redirect,
	Route
} from 'react-router-dom'
import CharactersContainer from './component/Characters/CharactersContainer'
import CharacterInfoContainer from './component/CharacterInfo/CharacterInfoContainer'
import LocationsContainer from './component/Locations/LocationsContainer'
import LocationInfoContainer from './component/LocationInfo/LocationInfoContainer'
import EpisodesContainer from './component/Episodes/EpisodesContainer'
import EpisodesInfoContainer from './component/EpisodeInfo/EpisodeInfoContainer'

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='container'>
					<Route path='' render={(props)=> <Header props={props}/>} />
					<div className='content'>
						<Route path='/main' render={() => <Content />} />
						<Route path='/characters' render={() => <CharactersContainer />} />
						<Route path='/charinfo' render={() => <CharacterInfoContainer />} />
						<Route path='/locations' render={() => <LocationsContainer />} />
						<Route path='/locinfo' render={() => <LocationInfoContainer />} />
						<Route path='/episodes' render={() => <EpisodesContainer />} />
						<Route path='/epinfo' render={() => <EpisodesInfoContainer />} />
						<Redirect from='' to='/main' />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}  
