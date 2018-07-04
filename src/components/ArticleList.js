import React from 'react';
import {Redirect} from 'react-router-dom';

import Article from './Article';

const ArticleList = ({articles, topic, }) => {
    return (
        !articles ? <Redirect to='/404' /> :
        <div>
            <h2>Articles {topic ? <span> about {topic} </span> : '' } </h2>
            {articles.map(article => 
             <Article key={article._id} article={article}/>
            )}
        </div>

    )
}

export default ArticleList;