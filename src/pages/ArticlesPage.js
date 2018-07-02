import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from '../components/ArticleList'
import {fetchTopicArticles} from '../dataFunctions/api';

class ArticlesPage extends Component {

    state = {
        articles: [],
        loading: true,
    }

    fetchArticlesByTopic = (topic) => {
       
        return fetchTopicArticles(topic)
            .then(articles => {
                console.log(articles)
                this.setState({articles, loading: false })
            })
            .catch(error => {
                this.props.history.push('/404');
            });
    }

    componentDidMount() {
        const topic = this.props.match.params.topic
        this.fetchArticlesByTopic(topic)
    }

    componentDidUpdate(prevProps) {
       
        const currTopic = this.props.match.params.topic
        const prevTopic = prevProps.match.params.topic

        if (currTopic !== prevTopic) {
            this.setState({loading: true})
            this.fetchArticlesByTopic(currTopic)
        }
    }

    render() {
        const queryString =  /\d/.exec(this.props.location.search);
        const page = this.props.location.search ? queryString[0] - 1: 0;
        return (
            <div>
                {this.state.loading ? <div>Loading...</div>
                    :
                    <ArticleList topic={this.props.match.params.topic} articles={this.state.articles[page]} />
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
    history: PropTypes.object.isRequired
}

export default ArticlesPage;
