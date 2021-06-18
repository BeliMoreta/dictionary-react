import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
function Search(event) {
    event.preventDefault()
alert("Searching");
}


return (
<div className="Dictionary">
    <form onSubmit={Search}>  
        <input type="search" autoFocus={true} />  
     </form>
</div>
);
}
  
