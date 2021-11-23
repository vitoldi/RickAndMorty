import React from 'react'
import { render, screen } from '@testing-library/react'
import PageForm from '../component/paginator/PageForm/PageForm'

const testFunc = (arg) => arg

test('renders PageForm elements', () => {
    const { getByRole, getByText } = render(
        <PageForm
            changeCharactersPage={testFunc}
            currentPage={2}
            pages={3}
            />)
    const submitButton = screen.getByRole('button', { type: 'submit' })
    const label = screen.getByText('Page:')
})