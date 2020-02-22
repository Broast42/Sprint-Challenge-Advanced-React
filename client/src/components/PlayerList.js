import React, { useEffect } from 'react';
import PlayerCard from './PlayerCard';
import useLocalStorage from '../hooks/useLocalStorage';


const PlayerList = props =>{

    return(
        <div className="playerFlex">
            {props.data.map((x,i) => (
                <PlayerCard key={i} data={x} />
            ))}
        </div>
    );
}

export default PlayerList;