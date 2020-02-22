import React from 'react';
import { render } from "@testing-library/react";
import PlayerCard from './PlayerCard';

test("Check if all elements of player cards render to the screen", () =>{
    const dummyData = {name: "Test", country: "USA", searches: 100}; 
    const { getByText } = render(<PlayerCard data={dummyData} />);

    getByText(/test/i);
    getByText(/usa/i)
    getByText(/searches: 100/i)
    
    
});