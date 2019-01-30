// Test away!
import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Display from './Display'

afterEach(cleanup);

describe("<Display/>", () => {
    it('renders the correct display detail', () => {
        const { debug, getByTestId } = await render(<Display />);
        debug();
        const locker = getByTestId("locker");
        const closeable = getByTestId("closeable");

        //getByClassName('lockedClass');
        //getByClassName("closedClass");

        expect(locker).toHaveTextContent(/unlocked/i);
        expect(closeable).toHaveTextContent(/open/i);
    });

    it("displays closed if closed is a true statment", () => {
        const { getByText } = render(<Display closed={true} />);

        getByText(/closed/i);

    });

    it("shold display the locked if locked prop is true", () => {
        const shouldBeLocked = render(<Display locked={true} />).getByText;

        shouldBeLocked(/locked/i);

    });


});
