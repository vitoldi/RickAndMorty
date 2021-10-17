import React from 'react'
import { render, screen } from '@testing-library/react'
import CharacterInfo from '../CharacterInfo'
import { BrowserRouter } from 'react-router-dom'

const characterInfo = {
    name: 'rick',
    image: '',
    origin: {
        name: 'originName',
        url: 'url/1'
    },
    location: {
        name: 'locationName',
        url: 'url/2'
    },
    status: 'alive',
    gender: 'male'
}

const characterEpisodes = ['s01e01', 's02e02']

const testFunc = (arg) => arg


test('renders CharacterInfo elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <CharacterInfo 
            characterInfo={characterInfo}
            characterEpisodes={characterEpisodes}
            onChangeLocation={testFunc}
            onChangeEpisode={testFunc}
            />
        </BrowserRouter>)
    const characterName = screen.getByText(/rick/i)
    const originName = screen.getByText(/originName/i)
    const locationName = screen.getByText(/locationName/i)
    const status = screen.getByText(/alive/i)
    const gender = screen.getByText(/male/i)
})