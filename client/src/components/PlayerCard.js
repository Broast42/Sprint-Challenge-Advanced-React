import React from 'react';

const PlayerCard = props =>{
    return(
        <div className="playerCard">
            <h3>{props.data.name}</h3>
            <h4>{props.data.country}</h4>
            <p>Searches: {props.data.searches}</p>
        </div>
    );
}

export default PlayerCard;