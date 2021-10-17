import React from 'react'
import { render, screen } from '@testing-library/react'
import CharactersFilter from '../CharactersFilter'

const testFunc = (arg) => arg

const filter = {
    name: 'rick',
    status: 'alive',
    species: 'primary',
    gender: '',
    type: ''
}

test('renders CharactersFilter elements', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole } = render(
        <CharactersFilter
        onChangeFilter={testFunc}
        onCharacters={testFunc}
        filter={filter}
            />)
    const characterName = screen.getByDisplayValue('rick')
    const speciesName = screen.getByDisplayValue('primary')
    const characterNameLabel = screen.getByLabelText('Character name:')
    const speciesNameLabel = screen.getByLabelText('Species:')
    const genderNameLabel = screen.getByLabelText('Gender:')
    const statusNameLabel = screen.getByLabelText('Status:')
    const characterPlaceholder = screen.getByPlaceholderText('name...')
    const speciesPlaceholder = screen.getByPlaceholderText('species...')
    const submitButton = screen.getByRole('button', { type: 'submit' })
})