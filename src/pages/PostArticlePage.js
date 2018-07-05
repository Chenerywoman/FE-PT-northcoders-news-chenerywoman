import React, {Component} from 'react';

import {ArticleBox, Navbar} from '../components';
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
    <React.Fragment>
    <Navbar username={this.props.username}/>
    <ArticleBox postArticle={this.postArticle}/>
    </React.Fragment>
    )

}

}
export default PostArticlePage;