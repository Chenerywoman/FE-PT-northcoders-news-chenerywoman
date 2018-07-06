import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Article, CommentBox, CommentsList, FilterComments, Navbar} from '../components';
import { fetchArticleById, fetchCommentsForArticle, postCommentText, deleteText } from '../dataFunctions/api'
import {mostRecent, mostVoted, isEmpty} from '../dataFunctions/helpers'

class ArticlePage extends Component {

    state = {
        article: {},
        comments: [],
        filtered: '',
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
                this.setState({ comments, loading: false });
                return comments;
            })
            .catch(error => {
                if (error.status === 404) {this.setState({loading: false })}
                else {this.props.history.push('/404')}
            }
            )
            
    }

    filterComments = (filter) => {   
    if (filter === 'recent') {
        const mostRecentComments = mostRecent(this.state.comments)
        this.setState({comments: mostRecentComments, filtered: 'recent'})
    }

    else if (filter === 'voted') {
   const mostVotedComments = mostVoted(this.state.comments)
   this.setState({comments: mostVotedComments, filtered: 'voted'})
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
                this.setState({comments: amendedComments})
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
 
        const articleId = this.props.match.params.id;
        return this.fetchArticle(articleId)
            .then(() => this.fetchComments(articleId))
            .then(res => {
                if (res) return this.filterComments('recent')
            })
        }
    
    render() {
        const { loading, article } = this.state
        console.log('empty article', isEmpty(article))
        return (
        <div>
            {loading ? <p>Loading...</p> :
            isEmpty(article) ? <Redirect to='/404' /> :
            <React.Fragment>
            <Navbar username={this.props.username} topic={article.belongs_to.title.toLowerCase()} page='article'/>
                <Article key={article._id} article={article} />
            </React.Fragment>
            }
            <CommentBox postComment={this.postComment} username={this.props.username} />
            {loading ? <p>Loading...</p> :
              isEmpty(article) ? <Redirect to='/404' /> :
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