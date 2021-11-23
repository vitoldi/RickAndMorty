import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from '../component/Header/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

test('renders Footer elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>)
    const navTitle = screen.getByText('Navigation')
    const navItem1 = screen.getByText('Main')
    const navItem2 = screen.getByText('Characters')
    const navItem3 = screen.getByText('Locations')
    const navItem4 = screen.getByText('Episodes')
})