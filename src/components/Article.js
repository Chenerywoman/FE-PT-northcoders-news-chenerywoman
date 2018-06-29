import React from 'react';
import Votes from '../components/Votes';

const Article = ({article}) => {

    return (
        <div>
            <h4>{article.title}</h4>
          <div>picture</div>
          <div>{article.body}</div>
          <Votes />
        </div>

    )
}

export default Article;