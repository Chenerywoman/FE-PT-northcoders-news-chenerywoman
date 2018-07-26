import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {ArticleBox} from '../components';
import {postArticleText} from '../dataFunctions/api';


class PostArticlePage extends Component {

    state = {
        new_article: {},
    }

    postArticle = (title, article, topic) => {
        return postArticleText(this.props.username, title, article, topic) 
        .then(res => { 
            console.log('res in postArticle', res)
            if (res.error) {
                return res.error
            } else { 
                this.setState({new_article: res.new_article}) 
                return res.new_article
            }
        }
        )   
}
render() {
    return (
    <React.Fragment>
    <ArticleBox postArticle={this.postArticle}/>
    {
    this.state.new_article && 
     <Link to={`/articles/${this.state.new_article._id}`} > <span>{this.state.new_article.title}</span> </Link>
    }
    </React.Fragment>
    )
}
}



PostArticlePage.propTypes = {
    username: PropTypes.string.isRequired
}
export default PostArticlePage;