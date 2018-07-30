import React from 'react';
import Votes from '../components/Votes';
import User from './User';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../styling/components/Article.css'

const Article = ({article}) => {

    return (
        <div id='article-container'>
          <div id='article-title'> <Link style={{'text-decoration': 'none'}} key={article._id} to={`/articles/${article._id}`} >  <p id='article-title-wording' >{article.title}</p> </Link></div>
          <div id='user'><User name={article.created_by.username} avatar={article.created_by.avatar_url} /></div>
            <div id='topic' >topic: {article.belongs_to.title}</div>
            <p id='article'><Link style={{'text-decoration': 'none'}} key={article._id} to={`/articles/${article._id}`} >{article.body}</Link></p>
          <div id='comments'>comments: {article.comments}</div>
          <div id='votes'><Votes votes={article.votes} id={article._id} route="articles"/></div>
         </div>

    )
}

Article.propTypes = {

    article: PropTypes.object.isRequired

}

export default Article;

