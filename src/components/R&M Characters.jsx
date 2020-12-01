// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "./Card";

// function Characters() {
//   const [character, setCharacter] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://swapi.py4e.com/api/")
//       .then((res) => {
//         setCharacter(res.data.data);
//         console.log(res);
//       })
//       .catch((e) => {
//         console.log("errer", e);
//       });
//   });

//   return (
//     <div>
//       {/* <div className="character">
//         {character.map((character) => {
//           return <Card key={Math.random()} character={character} />;
//         })}
//       </div>
//       ); */}
//     </div>
//   );
// }

// export default Characters;
