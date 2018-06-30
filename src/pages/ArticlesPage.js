import React, { Component } from 'react';

import ArticleList from '../components/ArticleList'
import * as api from '../api';

class ArticlesPage extends Component {

    state = {
        articles: [],
        loading: true
    }

    fetchArticlesByTopic = (topic) => {
        return api
            .fetchTopicArticles(topic)
            .then(articles => {
                console.log('articles', articles)
                this.setState({ articles, loading: false })
                console.log('articles state', this.state.articles)
                })
    }

    componentDidMount() {
        const topic = this.props.match.params
        this.fetchArticlesByTopic(topic)        
    }

    render() {
        return (
            <div>
                <h1>Northcoders News</h1>
                {this.state.loading ? <div>Loading...</div>
                    :
                    <ArticleList articles={this.state.articles} />
                }
            </div>
        );
    }
}

export default ArticlesPage;
