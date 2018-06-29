import React from 'react';
import Article from './Article';

const ArticleList = ({articles}) => {


    return (
        <div>
            <h2>Article List</h2>
            {articles.map(article => 
              <Article key={article._id} article={article}/>
            )}
        </div>

    )
}

export default ArticleList;