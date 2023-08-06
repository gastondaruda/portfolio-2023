import React from "react"
import "./tags.scss"

function TopTags(){
    return(
        <div className="tagsContainer"> 
            <span className="tags font-secondary p-minus6">&lt;html&gt;</span>
            <br />
                <span className="tags font-secondary p-minus4">&lt;body&gt;</span>
                <br />
                <span className="tags font-secondary p-minus2">&lt;h1&gt;</span>
                <br />
        </div>
    )
}

export default TopTags