import React from 'react'
import { render, screen } from '@testing-library/react'
import EpisodesFilter from '../component/Episodes/EpisodesFilter/EpisodesFilter'

const testFunc = (arg) => arg

const filter = {
    name: 'rick episode',
	episode: 'e01s01'
}

test('renders EpisodesFilter elements', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole } = render(
        <EpisodesFilter
        onChangeFilter={testFunc}
		onEpisodes={testFunc}
		filter={filter}
            />)
    const episodeName = screen.getByDisplayValue('rick episode')
    const episodeCode = screen.getByDisplayValue('e01s01')
    const episodeNameLabel = screen.getByLabelText('Episode name:')
    const episodeCodeLabel = screen.getByLabelText('Episode code:')
    const namePlaceholder = screen.getByPlaceholderText('name...')
    const codePlaceholder = screen.getByPlaceholderText('episode...')
    const submitButton = screen.getByRole('button', { type: 'submit' })
})