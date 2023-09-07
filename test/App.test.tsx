import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App1 from '../src/App'
import React from 'react';
import { fireEvent, getByText } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'
import userEvent  from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect"
describe('<App />', () => {
    
 
    test('Click the about router link', async () => {
        render(<App1 />, {wrapper: BrowserRouter})
    
        expect(screen.getByText('About')).toBeInTheDocument()
        
        const user = userEvent.setup()
        const about = vi.spyOn(user, 'click')
        const aboutLink = screen.getByText(/About/i)
    
        await user.click(aboutLink)
        expect(about).toHaveBeenCalledTimes(1)
    })

});