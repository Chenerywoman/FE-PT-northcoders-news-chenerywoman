import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {ArticleBox, Navbar} from '../components';
import {postArticleText} from '../dataFunctions/api';


class PostArticlePage extends Component {

    state = {
        new_article: {},
    }

    postArticle = (title, article, topic) => {
        return postArticleText(this.props.username, title, article, topic) 
        .then(res => { 
            if (res.error) {
                return res.error
            } else { 
                this.setState({new_article: res.new_article}) }}
        )   
}
render() {
    return (
    <React.Fragment>
    <ArticleBox postArticle={this.postArticle}/>
    {this.state.newArticle ?  <div>Your article has been posted!</div> : <div></div>}
    <Link to={`/articles/${this.state.new_article._id}`} >  <p>{this.state.new_article.title}</p> </Link>
    </React.Fragment>
    )

}

}

PostArticlePage.propTypes = {
    username: PropTypes.string.isRequired
}
export default PostArticlePage;