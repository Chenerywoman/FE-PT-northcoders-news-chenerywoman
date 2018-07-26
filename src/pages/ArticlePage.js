import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Article, CommentBox, CommentsList, FilterComments } from '../components';
import { fetchArticleById, fetchCommentsForArticle, postCommentText, deleteText } from '../dataFunctions/api'
import { mostRecent, mostVoted} from '../dataFunctions/helpers'

class ArticlePage extends Component {

    state = {
        article: {},
        comments: [],
        filtered: '',
        loading: true
    }

    fetchArticle = (id) => {
        return fetchArticleById(id)
            .then(({ article }) => {
            if (!article) throw new Error()
            this.setState({ article })
            })
            .catch(error => this.props.history.push('/404'))

    }

    fetchComments = (id) => {
        return fetchCommentsForArticle(id)
            .then(res => {
            if (res.comments) this.setState({ comments: res.comments, loading: false })
            else if (res.error) this.setState({loading: false })
            })
            .catch(error => this.props.history.push('/404'))

    }

    filterComments = (filter) => {
        if (filter === 'recent') {
            const mostRecentComments = mostRecent(this.state.comments)
            this.setState({ comments: mostRecentComments, filtered: 'recent' })
        }

        else if (filter === 'voted') {
            const mostVotedComments = mostVoted(this.state.comments)
            this.setState({ comments: mostVotedComments, filtered: 'voted' })
        }
    }

    postComment = (created_by, comment) => {
        return postCommentText(created_by, comment, this.props.match.params.id)
            .then(res => {
                const amendedComments = [res.new_comment, ...this.state.comments]
                this.setState({ comments: amendedComments })
            })
            .catch(error => {
                this.props.history.push('/404') 
               })
    }

    deleteComment = (id, username) => {
        return deleteText(id, username)
            .then(({ deleted_comment }) => {
                const amendedComments = this.state.comments.filter(comment => comment._id !== deleted_comment._id)
                this.setState({ comments: amendedComments })
            })
            .catch(error => {
             this.props.history.push('/404') 
            })
    }

    componentDidMount() {

        const articleId = this.props.match.params.id;
        return this.fetchArticle(articleId)
            .then(() => this.fetchComments(articleId))
            .then(res => {
                if (res) return this.filterComments('recent')
            })
            .catch(() => this.props.history.push('/404') )
    }

    render() {
        const { loading, article } = this.state
        return (
            <div>
                {loading ? <p>Loading...</p> :
                        <React.Fragment>
                            <Article key={article._id} article={article} />
                        </React.Fragment>
                }
                <CommentBox postComment={this.postComment} username={this.props.username} />
                {loading ? <p>Loading...</p> :
                        <React.Fragment>
                            {this.state.comments.length > 0 ?
                                <div>
                                    <FilterComments filterComments={this.filterComments} filtered={this.state.filtered} />
                                    <CommentsList comments={this.state.comments} deleteComment={this.deleteComment} username={this.props.username} />
                                </div>
                                : <div> </div>
                            }
                        </React.Fragment>
                }
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

    history: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
}

export default ArticlePage;