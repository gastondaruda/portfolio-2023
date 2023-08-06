import React from "react"
import "./tags.scss"

function H1Tag({component}){
    return(
        <div className="tagsContainer d-flex flex-column">
            <span className="tags font-secondary p-minus2">&lt;h1&gt;</span>
                {component}
            <span className="tags font-secondary p-minus2">&lt;/h1&gt;</span>
        </div>
    )
}

export default H1Tag