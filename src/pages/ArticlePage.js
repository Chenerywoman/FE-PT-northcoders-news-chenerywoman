import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Article from '../components/Article';
import InputBox from '../components/InputBox'
import { fetchArticleById } from '../api'

class ArticlePage extends Component {

    state = {
        article: {},
        loading: true
    }

    fetchArticle = (id) => {
        return fetchArticleById(id)
            .then(article => {
                this.setState({ article, loading: false })
            })
            .catch(error => this.props.history.push('/404'))

    }

    componentDidMount() {
        const articleId = this.props.match.params.id;
        this.fetchArticle(articleId)
    }

    render() {
        const { loading, article } = this.state
        return (<div>
            {loading ? <p>Loading...</p> :
                <Article key={article._id} article={article} />
            }
            <InputBox route='articles' id={this.props.match.params.id} endpoint='comments' />
            <p>commentsList</p>
        </div>
        )
    }
}

ArticlePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),

    history: PropTypes.object.isRequired
}

export default ArticlePage;