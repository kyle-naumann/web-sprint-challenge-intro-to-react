// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios"

function Characters() {
    const [character, setCharacter] = useState("");

    useEffect(() => {
    const fetchData = () => {
        axios
            .get('https://swapi.dev/api/people')
            .then((res) => {console.log(res.data)})
            .catch((err) =>{ console.log(err)});
    };
    fetchData();})
return (
    <div className="characters">
    <h1>  </h1>
    </div>

)
}

export default Characters;