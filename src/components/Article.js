import React from 'react';
import Votes from '../components/Votes';
import User from './User';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const Article = ({article}) => {

    return (
        <div>
           <Link key={article._id} to={`/articles/${article._id}`}>  <p>{article._id}</p> < /Link>
             <h4>{article.title}</h4> 
           <div>  created by: </div> <User name={article.created_by.username} avatar={article.created_by.avatar_url} /> 
            <div>topic:{article.belongs_to.title}</div>
          <p>{article.body}</p>
          <p>comments: {article.comments}</p>
          <Votes votes={article.votes} id={article._id} route="articles"/> 
        </div>

    )
}

Article.propTypes = {

    article: PropTypes.object.isRequired

}

export default Article;

