// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"

function Characters() {
    
    const [character, setCharacter] = useState([]);

    useEffect(() => {
    
        axios
            .get('https://swapi.dev/api/people')
            .then((res) =>
            { setCharacter(res.data.results); console.log(res.data.results)
            })
            .catch((err) =>{ console.log(err)});
    }, []);
    
return (

        <div className="character">
            {character.length && character.map((character) => {
                return <CharacterCard key={Math.random()} character= {character} />
            })}
        </div>
    );
}

export default Characters;