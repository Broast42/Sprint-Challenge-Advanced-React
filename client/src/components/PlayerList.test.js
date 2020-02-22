import React from 'react';
import { render } from "@testing-library/react";
import PlayerList from './PlayerList';

test("Check if data renders to the screen", () => {
    const dummyData = [
        {name: "name1", country: "country1", searches: 100}, 
        {name: "name2", country: "country2", searches: 10},
        {name: "name3", country: "country3", searches: 1}
    ]
    const { getByText, findByText } = render(<PlayerList data={dummyData} />);

    getByText(/name1/i);
    getByText(/name2/i);
    getByText(/name2/i);
    getByText(/country2/i);
    
});