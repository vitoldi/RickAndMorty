import React from 'react'
import { render, screen } from '@testing-library/react'
import EpisodeInfo from '../EpisodeInfo'
import { BrowserRouter } from 'react-router-dom'

const episodeInfo = {
    name: 'beth episode',
    air_date: '01.01.01',
    episode: 'e01s01'
}

const episodeCharacters = [
    {
        name: 'rick',
        image: ''
    },
    {
        name: 'morty',
        image: ''
    }
]

const testFunc = (arg) => arg


test('renders EpisodeInfo elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <EpisodeInfo 
            episodeInfo={episodeInfo}
            onChangeEpisode={testFunc}
            countEpisodes={40}
            onEpisodeInfo={testFunc}
            episodeCharacters={episodeCharacters}
            onChangeCharacter={testFunc}
            />
        </BrowserRouter>)
    const episodeName = screen.getByText('Name: beth episode')
    const episodeAir_date = screen.getByText('Air date: 01.01.01')
    const episodeCode = screen.getByText('Episode code: e01s01')
    const characterName1 = screen.getByText('rick')
    const characterName2 = screen.getByText('morty')
})