import React from 'react'
import { render, screen } from '@testing-library/react'
import Locations from '../component/Locations/Locations'
import { BrowserRouter } from 'react-router-dom'

const allLocations = {
    info: {
		count: 50
    },
    results: [{
        id: 1,
        name: 'earth',
        type: 'planet',
        dimension: 'true'
    },
    {
        id: 2,
        name: 'sun',
        type: 'star',
        dimension: 'false'
    },
    ]
}

const testFunc = (arg) => arg

const filter = {
    name: '',
	dimension: '',
	type: ''
}

test('renders Locations elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Locations
            allLocations={allLocations}
            currentPage={1}
            onChangePage={testFunc}
            onLocations={testFunc}
            onChangeLocation={testFunc} 
            filter={filter}
            onChangeFilter={testFunc}
            />
        </BrowserRouter>)
    const locationName1 = screen.getByText('Name: earth')
    const locationName2 = screen.getByText('Name: sun')
    const type1 = screen.getByText('Type: planet')
    const type2 = screen.getByText('Type: star')
    const dimension1 = screen.getByText('Dimension: true')
    const dimension2 = screen.getByText('Dimension: false')
})