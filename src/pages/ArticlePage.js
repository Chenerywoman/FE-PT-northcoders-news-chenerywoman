import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from '../components/Article';
import InputBox from '../components/InputBox';
import CommentsList from '../components/CommentsList';

import { fetchArticleById, fetchCommentsForArticle, postText, deleteText } from '../api'

class ArticlePage extends Component {

    state = {
        article: {},
        comments: [],
        loading: true
    }

    fetchArticle = (id) => {
        return fetchArticleById(id)
            .then(article => {
                this.setState({ article})
            })
            .catch(error => this.props.history.push('/404'))

    }

    fetchComments = (id) => {
        return fetchCommentsForArticle(id)
        .then(comments => {
            this.setState({comments, loading: false})
        })
        .catch(error => this.props.history.push('/404'))
    }

    postComment = (created_by, comment ) => {
       return  postText(created_by, comment, 'articles', this.props.match.params.id, 'comments' )
        .then(res => { 
            const amendedComments = [res.new_comment, ...this.state.comments]
            this.setState({comments: amendedComments})
        })
    }

    deleteComment = (id, username) => {
        return deleteText(id, username)
        .then(({deleted_comment}) => {
            const indexToDelete = this.state.comments.findIndex(comment => comment._id === deleted_comment._id)
            const amendedComments = [...this.state.comments]
            amendedComments.splice(indexToDelete, 1)
         
            this.setState({
                comments: amendedComments
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        const articleId = this.props.match.params.id;
        return this.fetchArticle(articleId)
        .then(() => this.fetchComments(articleId));
    }


    render() {
        const { loading, article } = this.state
        return (<div>
            {loading ? <p>Loading...</p> :
            <Article key={article._id} article={article} />
            }
            <InputBox  postComment={this.postComment}/>
            {loading ? <p>Loading...</p> :
            <CommentsList  comments={this.state.comments} deleteComment={this.deleteComment}/>
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

    history: PropTypes.object.isRequired
}

export default ArticlePage;