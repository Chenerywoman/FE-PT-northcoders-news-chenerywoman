import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ArticleBox, Navbar} from '../components';
import {postArticleText} from '../dataFunctions/api';


class PostArticlePage extends Component {

    state = {
        newArticle: false,
    }

    postArticle = (title, article, topic) => {
        return postArticleText(this.props.username, title, article, topic) 
        .then(res => { 
            if (res.error) {
                return res.error
            } else { 
                console.log('res', res)
                this.setState({newArticle: true})
                return res }}
        )   
}
render() {
    return (
    <React.Fragment>
    <Navbar username={this.props.username}/>
    <ArticleBox postArticle={this.postArticle}/>
    {this.state.newArticle ?  <div>Your article has been posted!</div> : <div></div>}
    <Link to='/articles'> <p> Go to articles </p></Link> 
    </React.Fragment>
    )

}

}
export default PostArticlePage;