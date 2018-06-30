import React, { Component } from 'react';

import ArticleList from '../components/ArticleList'
import * as api from '../api';

class ArticlesPage extends Component {

    state = {
        articles: [],
        loading: true,
        topic: ''
    }

    fetchArticlesByTopic = (topic) => {
        return api
            .fetchTopicArticles(topic)
            .then(articles => {
                this.setState({ articles, topic, loading: false })
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
                    <ArticleList topic={this.state.topic.topic} articles={this.state.articles} />
                }
            </div>
        );
    }
}

export default ArticlesPage;
