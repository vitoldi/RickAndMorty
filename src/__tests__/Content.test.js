import React from 'react'
import { render, screen } from '@testing-library/react'
import Content from '../component/Content/Content'

test('renders Content slider', () => {
    const { getByText } = render(<Content />)
    const slide1 = screen.getAllByText(/Rick and Morty is/i)
    const slide2 = screen.getAllByText(/The show revolves/i)
    const slide3 = screen.getAllByText(/Rick is an eccentric/i)
})