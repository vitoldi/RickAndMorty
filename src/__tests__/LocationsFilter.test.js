import React from 'react'
import { render, screen } from '@testing-library/react'
import LocationsFilter from '../component/Locations/LocationsFilter/LocationsFilter'

const testFunc = (arg) => arg

const filter = {
    name: 'earth',
	dimension: 'true',
	type: 'planet'
}

test('renders EpisodesFilter elements', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole } = render(
        <LocationsFilter
        onChangeFilter={testFunc}
		onLocations={testFunc}
	    filter={filter}
            />)
    const locationName = screen.getByDisplayValue('earth')
    const locationDimension = screen.getByDisplayValue('true')
    const locationType = screen.getByDisplayValue('planet')
    const locationNameLabel = screen.getByLabelText('Location name:')
    const locationDimensionLabel = screen.getByLabelText('Dimension:')
    const locationTypeLabel = screen.getByLabelText('Type:')
    const namePlaceholder = screen.getByPlaceholderText('name...')
    const dimensionPlaceholder = screen.getByPlaceholderText('dimension...')
    const typePlaceholder = screen.getByPlaceholderText('type...')
    const submitButton = screen.getByRole('button', { type: 'submit' })
})