import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [Keyword, setKeyword] = useState("");

    function Search(event) {
    event.preventDefault();
    alert(`Searching for ${Keyword}`);
}

function handlKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
}

return (
<div className="Dictionary">
    <form onSubmit={Search}>  
        <input type="search" onChange={handlKeywordChange} />  
     </form>
</div>
);
}
  
