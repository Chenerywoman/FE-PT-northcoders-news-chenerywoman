import React, {Component} from 'react';

import ArticleBox from '../components/ArticleBox';
import {postArticleText} from '../dataFunctions/api';


class PostArticlePage extends Component {

    postArticle = (title, article, topic) => {
        return postArticleText(this.props.username, title, article, topic) 
        .then(res => { 
            console.log('res in postArticle', res)
            if (res.error) {
                return res.error
            } else { 
                return res }}
        )   
}
render() {
    return (
    <ArticleBox postArticle={this.postArticle}/>
    )

}

}
export default PostArticlePage;