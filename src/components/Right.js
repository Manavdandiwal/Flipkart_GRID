import React from "react";
import Show from "./Show.js";

function Right({ RelatedText, RelData }) {
    return (
        <div>
            <h3>{RelatedText}</h3>
            <Show data={RelData}>Realted Products</Show>
        </div>
    );
}

export default Right;
