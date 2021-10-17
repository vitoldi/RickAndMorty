import React from 'react'
import { render, screen } from '@testing-library/react'
import LocationInfo from '../LocationInfo'
import { BrowserRouter } from 'react-router-dom'

const locationInfo = {
    name: 'earth',
    type: 'planet',
    dimension: 'true'
}

const residents = [
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


test('renders LocationInfo elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <LocationInfo 
            locationInfo={locationInfo}
            onChangeLocation={testFunc}
            allLocations={50}
            onLocationInfo={testFunc}
            residents={residents}
            onChangeCharacter={testFunc}
            />
        </BrowserRouter>)
    const locationName = screen.getByText('Name: earth')
    const episodeAir_date = screen.getByText('Type: planet')
    const episodeCode = screen.getByText('Dimension: true')
    const characterName1 = screen.getByText('rick')
    const characterName2 = screen.getByText('morty')
})