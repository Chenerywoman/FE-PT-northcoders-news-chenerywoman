import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import { ArticleList, Navbar } from '../components'
import { fetchTopicArticles } from '../dataFunctions/api';

class ArticlesPage extends Component {

    state = {
        articles: [],
        loading: true,
        page: this.props.location.search ? /^\d+$/.exec(this.props.location.search) : 1,
        index: this.props.location.search ? /^\d+$/.exec(this.props.location.search) - 1 : 0,
    }

    fetchArticlesByTopic = (topic) => {

        return fetchTopicArticles(topic)
            .then(articles => {
                this.setState({ articles, loading: false })
            })
            .catch(error => {
                this.props.history.push('/404');
            });
    }

    handleUpClick = (event) => {
        this.props.history.push({
            pathname: `/articles/${this.props.match.params.topic}`,
            search: `?page=${this.state.page + 1}`
        })
        this.setState({ index: this.state.index + 1, page: this.state.page + 1 })
    }

    handleDownClick = (event) => {
        this.props.history.push({
            pathname: `/articles/${this.props.match.params.topic}`,
            search: `?page=${this.state.page - 1}`
        })
        this.setState({ index: this.state.index - 1, page: this.state.page - 1 })
    }

    componentDidMount() {
        const topic = this.props.match.params.topic
        this.fetchArticlesByTopic(topic)
    }

    componentDidUpdate(prevProps) {

        const currTopic = this.props.match.params.topic
        const prevTopic = prevProps.match.params.topic

        if (currTopic !== prevTopic) {
            this.setState({ loading: true })
            this.fetchArticlesByTopic(currTopic)
        }
    }

    render() {
        return (
            <div>
                <Navbar username={this.props.username} page={this.props.match.params.topic}/>
                {this.state.loading ? <div>Loading...</div>
                    :
                    <div>
                        <button onClick={this.handleDownClick} disabled={this.state.page < 2 ? true : false}> Down one page...</button>
                        <button onClick={this.handleUpClick} disabled={this.state.page > this.state.articles.length - 1 ? true : false} > Up one page...</button>
                        <p>Page {`${this.state.page}`} of {`${this.state.articles.length}`}</p>
                        <ArticleList topic={this.props.match.params.topic} articles={this.state.articles[this.state.index]} username={this.props.username}/>
                    </div>
                }
            </div>
        );
    }
}

ArticlesPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            topic: PropTypes.string.isRequired
        })
    }),

    history: PropTypes.object.isRequired,

    location: PropTypes.shape({
        search: PropTypes.string.isRequired
    }),

    username: PropTypes.string.isRequired
}

export default ArticlesPage;
