import React from 'react';
import Votes from '../components/Votes';

const Article = ({article}) => {

    return (
        <div>
            <p>{article._id}</p>
             <h4>{article.title}</h4> 
            <div>topic:{article.belongs_to.title}</div>
     <p>created by: {article.created_by.username}</p>
          <p>{article.body}</p>
          <p>comments: {article.comments}</p>
          <Votes votes={article.votes} id={article._id} route="articles"/> 
        </div>

    )
}

export default Article;