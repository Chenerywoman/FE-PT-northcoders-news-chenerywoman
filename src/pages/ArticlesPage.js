import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ArticleList } from '../components'
import { fetchAllArticles, fetchTopicArticles } from '../dataFunctions/api';
import {mostPopular, chunkArray} from '../dataFunctions/helpers';
import '../styling/pages/ArticlesPage.css'

class ArticlesPage extends Component {

    state = {
        articles: [],
        loading: true,
        page: this.props.location.search ? this.props.location.search.match(/\d+\b/) : 1,
        index: this.props.location.search ? this.props.location.search.match(/\d+\b/) - 1 : 0,
    }

    fetchArticles = () => {
        return fetchAllArticles()
        .then(({ articles }) => {
            const sortedArticles = mostPopular(articles)
            return chunkArray(sortedArticles, 10)
        })
            .then(articles => {
                this.setState({ articles, loading: false })
            })
            .catch(error => {
                this.props.history.push('/404');
            });
    };

    fetchArticlesByTopic = (topic) => {

        return fetchTopicArticles(topic)
        .then(({ articles }) => {
            const sortedArticles = mostPopular(articles)
            return chunkArray(sortedArticles, 10)
        })
            .then(articles => {
                this.setState({ articles, loading: false })
            })
            .catch(error => {
                this.props.history.push('/404');
            });
    }

    handleUpClick = (event) => {

        this.props.history.push({
            pathname: this.props.match.params.topic ? `/articles/topic/${this.props.match.params.topic}` : '/articles',
            search: `?page=${this.state.page + 1}`
        })
        this.setState({ index: this.state.index + 1, page: this.state.page + 1 })
    }


    handleDownClick = (event) => {
        this.props.history.push({
            pathname: this.props.match.params.topic ? `/articles/topic/${this.props.match.params.topic}` : '/articles',
            search: `?page=${this.state.page - 1}`
        })
        this.setState({ index: this.state.index - 1, page: this.state.page - 1 })
    }

    componentDidMount() {
        if (this.props.match.params.topic) {
            const topic = this.props.match.params.topic
            this.fetchArticlesByTopic(topic)
        }
        else this.fetchArticles()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.topic) {
            const currTopic = this.props.match.params.topic;
            const prevTopic = prevProps.match.params.topic;

            if (currTopic !== prevTopic) {
                this.setState({ loading: true })
                this.fetchArticlesByTopic(currTopic)
            }
        } else {
            const currPath = this.props.location.pathname;
            const prevPath = prevProps.location.pathname;

            if (currPath !== prevPath) {
                this.setState({ loading: true })
                this.fetchArticles()
            }
        }
    }

    render() {
        return (
            <div className='articlespage-container'>
                {this.state.loading ? <div>Loading...</div>
                    :
                    <React.Fragment>
                        <div className='paginator-container'>
                        <div className='paginator'>
                        <p className='paginator-page'>Page {`${this.state.page}`} of {`${this.state.articles.length}`}</p>
                        <button className='paginator-button-down' onClick={this.handleDownClick} disabled={this.state.page < 2 ? true : false}> down</button>
                        <button className='paginator-button-up' onClick={this.handleUpClick} disabled={this.state.page > this.state.articles.length - 1 ? true : false} > up</button>
                        </div>
                        </div>
                        <div className='article-list'><ArticleList topic={this.props.match.params.topic ? this.props.match.params.topic : ''} articles={this.state.articles[this.state.index]} history={this.props.history} /></div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

ArticlesPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            topic: PropTypes.string
        })
    }),

    history: PropTypes.object.isRequired,

    location: PropTypes.shape({
        search: PropTypes.string.isRequired
    }),

}

export default ArticlesPage;
