import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from '../Search'
import store from '../../../../redux/store'
import { Provider } from 'react-redux'

test('renders EpisodesFilter elements', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole } = render(
        <Provider store={store}>
			<Search />
		</Provider>
        )

    const namePlaceholder = screen.getByPlaceholderText('Search...')
    const submitButton = screen.getByRole('button', { type: 'submit' })
    const labelCharacter = screen.getByLabelText('Character')
    const labelLocation = screen.getByLabelText('Location')
    const labelEpisode = screen.getByLabelText('Episode')
})