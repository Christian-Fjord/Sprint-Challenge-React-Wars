
import React from "react";

const Character = props => {
  return (
    <div className='char-container'>
    <div className="character">
      <div className="character-name"> 
      
      <p>{props.character.name}</p>
      

      </div>
      <div className="character-data">
       
       <span>Gender:</span> {props.character.gender}<br>
       </br>
       
       <span>Birth Year:</span> {props.character.birth_year}<br>
       </br>
       
       <span>Height:</span> {props.character.height}<br>
       </br>
      
       <span>Mass:</span> {props.character.mass}<br>
       </br>
       
       <span>Eye Color:</span> {props.character.eye_color}
      </div>
    </div>
    </div>

  );
};
export default Character;