import React, { Component } from 'react';

import ArticleList from '../components/ArticleList'
import * as api from '../api';

class ArticlesPage extends Component {

    state = {
        articles: [],
        loading: true,
    }

    fetchArticlesByTopic = (topic) => {
        return api
            .fetchTopicArticles(topic)
            .then(articles => {
                this.setState({ articles, loading: false })
            })
            .catch(error => {
                this.props.history.push('/404');
            });
    }

    componentDidMount() {
        const topic = this.props.match.params
        this.fetchArticlesByTopic(topic)
    }

    componentDidUpdate(prevProps) {
        const currTopic = this.props.match.params
        const prevTopic = prevProps.match.params

        if (currTopic !== prevTopic) {
            this.fetchArticlesByTopic(currTopic)
        }

    }

    render() {
        return (
            <div>
                <h1>Northcoders News</h1>
                {this.state.loading ? <div>Loading...</div>
                    :
                    <ArticleList topic={this.props.match.params.topic} articles={this.state.articles} />
                }
            </div>
        );
    }
}

export default ArticlesPage;
