import React from 'react'
import { render, screen } from '@testing-library/react'
import Paginator from '../Paginator'

const allLocations = {
    info: {
		pages: 3
    }
}

const testFunc = (arg) => arg

test('renders paginator elements', () => {
    const { getByText } = render(
        <Paginator
            info={allLocations.info}
            currentPage={1}
            onChangePage={testFunc} 
            onCharacters={testFunc}
            filter={{}}
            />)
    const allPages = screen.getByText('3 pages')
    const page1 = screen.getByText('1')
    const page2 = screen.getByText('2')
    const page3 = screen.getByText('3')
})