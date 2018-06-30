import React from 'react';
import Article from './Article';

const ArticleList = ({articles, topic}) => {
console.log('topic', topic)
    return (
        <div>
            <h2>Articles {topic ? <span> about {topic} </span> : '' } </h2>
            {articles.map(article => 
              <Article key={article._id} article={article}/>
            )}
        </div>

    )
}

export default ArticleList;