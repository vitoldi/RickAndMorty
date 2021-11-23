import React from 'react'
import { render, screen } from '@testing-library/react'
import Characters from '../component/Characters/Characters'
import { BrowserRouter } from 'react-router-dom'

const allCharacters = {
    info: {
		count: 671
    },
    results: [{
        id: 1,
        name: 'rick',
        species: 'primary',
        image: '',
        status: 'alive',
    },
    {
        id: 2,
        name: 'morty',
        species: 'secondary',
        image: '',
        status: 'dead',
    },
    ]
}

const testFunc = (arg) => arg

const filter = {
    name: '',
    status: '',
    species: '',
    gender: '',
    type: ''
}

test('renders Characters elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Characters 
            allCharacters={allCharacters}
            currentPage={1}
            onChangePage={testFunc}
            onCharacters={testFunc}
            onChangeCharacter={testFunc}
            onChangeFilter={testFunc}
            filter={filter}
            />
        </BrowserRouter>)
    const characterName1 = screen.getByText(/rick/i)
    const characterName2 = screen.getByText(/morty/i)
    const characterSpecies1 = screen.getByText(/Species: primary/i)
    const characterSpecies2 = screen.getByText(/Species: secondary/i)
    const characterStatus1 = screen.getByText(/Status: alive/i)
    const characterStatus2 = screen.getByText(/Status: dead/i)
})