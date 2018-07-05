import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Article, CommentBox, CommentsList, FilterComments, Navbar} from '../components';
import { fetchArticleById, fetchCommentsForArticle, postCommentText, deleteText } from '../dataFunctions/api'
import {mostRecent, mostVoted} from '../dataFunctions/helpers'

class ArticlePage extends Component {

    state = {
        article: {},
        comments: [],
        loading: true
    }

    fetchArticle = (id) => {
        return fetchArticleById(id)
            .then(article => {
                this.setState({ article })
            })
            .catch(error => this.props.history.push('/404'))

    }

    fetchComments = (id) => {
        return fetchCommentsForArticle(id)
            .then(comments => {
                this.setState({ comments, loading: false })
            })
            .catch(error => this.props.history.push('/404'))
    }

    filterComments = (filter) => {
        console.log('filter', filter)
    
    if (filter === 'recent') {
        const mostRecentComments = mostRecent(this.state.comments)
        this.setState({comments: mostRecentComments})
    }

    else if (filter === 'voted') {
   const mostVotedComments = mostVoted(this.state.comments)
   this.setState({comments: mostVotedComments})
    }
}


    postComment = (created_by, comment) => {
        return postCommentText(created_by, comment, 'articles', this.props.match.params.id, 'comments')
            .then(res => {
                if (res.error) {
                    return res.error
                } else {
                    const amendedComments = [res.new_comment, ...this.state.comments]
                    this.setState({ comments: amendedComments })
                }
            })
    }

    deleteComment = (id, username) => {
        return deleteText(id, username)
            .then(({ deleted_comment }) => {
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
            <React.Fragment>
            <Navbar username={this.props.username} />
            <Link to='/'> <p>Return to Homepage</p></Link>
            <Link to='/articles'><p>Return to All Articles</p></Link>
            {article.belongs_to.title.toLowerCase() === 'coding' ? <Link to='/articles/topic/coding' > <p> return to all coding articles </p> </Link> : 
           article.belongs_to.title.toLowerCase() === 'football' ? <Link to='/articles/topic/football' > <p>  return to all football articles </p></Link>  : 
            <Link to='/articles/topic/cooking' > return to all cooking articles </Link> }
                <Article key={article._id} article={article} />
                </React.Fragment>
            }
            <CommentBox postComment={this.postComment} username={this.props.username} />
            {loading ? <p>Loading...</p> :
            <React.Fragment>
            <FilterComments filterComments={this.filterComments} />
            <CommentsList comments={this.state.comments} deleteComment={this.deleteComment} username={this.props.username}/>
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

    history: PropTypes.object.isRequired
}

export default ArticlePage;