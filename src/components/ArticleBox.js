import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/components/ArticleBox.css'

class ArticleBox extends Component {

    state = {
        title: '',
        article: '',
        topic: '',
        userHasPosted: false,
    }

    handleTitleChange = event => {
        this.setState({ title: event.target.value })
    }

    handleArticleChange = event => {
        this.setState({ article: event.target.value })
    }

    handleTopicChange = event => {
        this.setState({ topic: event.target.value })
    }

    handleClick = event => {
        event.preventDefault();
        this.props.postArticle(this.state.title, this.state.article, this.state.topic)
            .then(res => {
                if (res.new_article) this.setState({ topic: '', title: '', article: '', err: '' })
                else { this.setState({ topic: '', title: '', article: '', err: '' }) }
            })
            .catch(err => this.setState({ err: err.statusText }))
    }

    render() {
        return (<form id='article-box'onSubmit={this.handleClick}>
            <div id='article-box-title'>Add an article</div>
            {this.state.err && <div> {this.state.err} </div>}
            <label id='topic-select'>Topic:</label>
                <select id='topic-select-box' value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="football">football</option>
                    <option value="coding">coding</option>
                    <option value="cooking">cooking</option>
                </select>
            <label id='add-title'> Title:</label>
    <textarea name="title" id="title-box" cols="52" rows="1" onChange={this.handleTitleChange} value={this.state.title} placeholder='write your title here...' />
            <label id='add-article'> Article:</label>
    <textarea name="article" id="add-article-box" cols="52" rows="15" onChange={this.handleArticleChange} value={this.state.article} placeholder='add your article here...' />
            <button id='post-button' type="submit" disabled={!this.state.title || !this.state.article || !this.state.topic ? true : false} >Submit</button>
        </form>
        )
    }
}

ArticleBox.propTypes = {
    postArticle: PropTypes.func.isRequired
}

export default ArticleBox;