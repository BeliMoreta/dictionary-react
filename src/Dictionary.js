import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [Keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0])
    }


    function Search(event) {
    event.preventDefault();

//documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
}


function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

return (
<div className="Dictionary">
    <form onSubmit={Search}>  
        <input type="search" 
        placeholder="Search for a word"
        onChange={handleKeywordChange} />  
     </form>
     <Results results={results}/>
</div>
);
}
  
