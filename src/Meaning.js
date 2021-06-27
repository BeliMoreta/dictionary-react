import React from "react";
import Synonyms from "./Synonyms";
import './Meaning.css';

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
               <div className="Definition"> 
              {definition.definition}
              <br />
              </div> 
              <br />
              <div className="Example"> 
              <em>{definition.example}</em>
              <br />
              </div> 
              <Synonyms synonyms={definition.synonyms} />
             
            </p>
          </div>
        );
      })}
    </div>
  );
}