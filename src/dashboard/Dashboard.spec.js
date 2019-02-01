// Test away
import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';


describe('That it should show both Display and Controls', () => {
    it('should show the display component', async ()=> {
        const {container} = await render(<Dashboard />)
        expect(container.firstChild).toHaveClass('display')
    }) 
    it('should show the controls component next', async ()=> {
        const {container} = await render(<Dashboard />)

        expect(container.firstChild.nextSibling).toHaveClass('controls')
    })
});
