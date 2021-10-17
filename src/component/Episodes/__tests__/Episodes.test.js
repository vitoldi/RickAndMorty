import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from '../Episodes'
import { BrowserRouter } from 'react-router-dom'

const allEpisodes = {
    info: {
		count: 41
    },
    results: [{
        id: 1,
        name: 'rick episode',
        air_date: '01.01.01',
        episode: 'e01s01',
    },
    {
        id: 2,
        name: 'morty episode',
        air_date: '02.02.02',
        episode: 'e02s02',
    },
    ]
}

const testFunc = (arg) => arg

const filter = {
    name: '',
	episode: ''
}

test('renders Episodes elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Episodes
            allEpisodes={allEpisodes}
			currentPage={1}
			onChangePage={testFunc}
			onEpisodes={testFunc}
			onChangeEpisode={testFunc}
			filter={filter}
			onChangeFilter={testFunc}
            />
        </BrowserRouter>)
    const episodeName1 = screen.getByText('Name: rick episode')
    const episodeName2 = screen.getByText('Name: morty episode')
    const air_date1 = screen.getByText('Air date: 01.01.01')
    const air_date2 = screen.getByText('Air date: 02.02.02')
    const episodeCode1 = screen.getByText('Episode: e01s01')
    const episodeCode2 = screen.getByText('Episode: e02s02')
})