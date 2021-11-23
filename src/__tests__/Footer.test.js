import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../component/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

test('renders Footer elements', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>)
    const contacts = screen.getByText('Contacts:')
    const git = screen.getByText('GitHub')
    const linkedin = screen.getByText('Linkedin')
    const author = screen.getByText('V.Logvin, 2021')
})