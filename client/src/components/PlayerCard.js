import React from 'react';

const PlayerCard = props =>{
    return(
        <div className="playerCard">
            <h2>{props.data.name}</h2>
            <h3>{props.data.country}</h3>
            <p>Searches: {props.data.searches}</p>
        </div>
    );
}

export default PlayerCard;