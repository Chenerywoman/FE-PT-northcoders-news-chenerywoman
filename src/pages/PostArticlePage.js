import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ArticleBox} from '../components';
import {postArticleText} from '../dataFunctions/api';
import '../styling/pages/PostArticlePage.css'


class PostArticlePage extends Component {

    state = {
        new_article: {},
        posted: false,
    }

    postArticle = (title, article, topic) => {
        return postArticleText(this.props.username, title, article, topic) 
        .then(res => { 
            console.log('res in postArticle', res)
            if (res.error) {
                return res.error
            } else { 
                this.setState({new_article: res.new_article, posted: true}) 
                return res.new_article
            }
        }
        )   
}
render() {
    return !this.state.posted ?
    <ArticleBox id='post-article-box' postArticle={this.postArticle}/> 
    :
    <React.Fragment>
    <p id='posted-success-title'>Your posted article:</p>
     <Link id='posted-article-link' to={`/articles/${this.state.new_article._id}`} > <span id='posted-article'>{this.state.new_article.title}</span> </Link>
    </React.Fragment>
    }


}



PostArticlePage.propTypes = {
    username: PropTypes.string.isRequired
}
export default PostArticlePage;