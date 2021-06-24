import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [Keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function Search() {
        //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
    event.preventDefault();
    Search();

}


function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    Search();
}


if  (loaded) {
return (
<div className="Dictionary">
    <section> 
    <form onSubmit={handleSubmit}>  
        <input type="search" 
        placeholder="Search for a word"
        onChange={handleKeywordChange} />  
     </form>
     <div className="hint">
      suggested words: sunset, yoga, forest, sea...

     </div>
     </section>
     <Results results={results}/>
</div>
);
} else {
    load();
    return "Loading";
}
}
