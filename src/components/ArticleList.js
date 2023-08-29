// ArticleList
// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop called post to ArticleList)
// make sure to assign a unique key prop to each Article

import React from "react";
import Article from "./Article";

function ArticleList({posts}){

    return(
        <main>
            
            {posts.map((p)=>
            { return <Article title= {p.title} date= {p.date} preview={p.preview}key ={p.id} />})}
        </main>

    )
}
export default ArticleList;

