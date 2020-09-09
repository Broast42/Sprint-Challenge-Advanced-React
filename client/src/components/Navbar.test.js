import React from 'react';
import { render } from "@testing-library/react";
import Navbar from './Navbar';

test("Test if navbar renders heading text", () => {
    const { getByText } = render(<Navbar />);

    getByText(/Woman's World Cup Players/i);
    getByText(/Ranked by search intrest from Google Trends/i);
});

