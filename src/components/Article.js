import React from 'react';
import Votes from '../components/Votes';

const Article = ({article}) => {

    return (
        <div>
            <h4>{article.title}</h4> 
            <div>topic:{article.belongs_to.title}</div>
          <p>by:{article.created_by.username}</p>
          <p>when created - author attribution???</p>
          <p>{article.body}</p>
          <p>comments: {article.comments}</p>
          <Votes votes={article.votes} id={article._id} route="articles"/>
        </div>

    )
}

export default Article;