import React from 'react';
import Votes from '../components/Votes';

const Article = ({article}) => {

    return (
        <div>
            <h4>{article.title}</h4>
          <div>picture</div>
          <div>{article.body}</div>
          <Votes votes={article.votes} id={article._id} route="articles"/>
        </div>

    )
}

export default Article;