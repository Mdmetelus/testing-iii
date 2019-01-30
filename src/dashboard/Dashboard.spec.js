// Test away
import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';


describe('That it should show both Display and Controls', () => {
    it('should show the display component', ()=> {
        const {container} = render(<Dashboard />)
        expect(container.firstChild).toHaveClass('display')
    }) 
    it('should show the controls component next', ()=> {
        const {container} = render(<Dashboard />)

        expect(container.firstChild.nextSibling).toHaveClass('controls')
    })
}) 