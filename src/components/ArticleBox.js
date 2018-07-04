import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleBox extends Component { 

state = {
    title: '',
    article: '',
    topic: '',
    userHasPosted: false,
}

handleTitleChange = event => {
  this.setState({title:event.target.value})
}

handleArticleChange = event => {
  this.setState({article:event.target.value})
}

handleTopicChange = event => {
    console.log('event.target.value', event.target.value)
  this.setState({topic:event.target.value})
}

handleClick = event => {
    event.preventDefault();
    this.props.postArticle(this.state.title, this.state.article, this.state.topic)
    .then(res => {
        if (res.new_article) {
            console.log('res in handleclick', res)
            this.setState({topic: '', title:'', article: '', err: ''})
        }
        else {this.setState({topic: '', title:'', article: '', err: ''})}
})
    .catch(err => {
        this.setState({err: err.statusText})
    }
    )
}

render(){
return (<form onSubmit={this.handleClick}>
<h5>Add an article</h5>
{this.state.err ? <div> {this.state.err} </div> : <div></div> }
 <label>
          Pick your favorite flavor:
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="football">football</option>
            <option value="coding">coding</option>
            <option value="cooking">cooking</option>
          </select>
        </label>
    <label> Title:
    <textarea name="title" id="textbox" cols="52" rows="5" onChange={this.handleTitleChange} value={this.state.title} placeholder='add text' /> 
    </label>
    <label> Article:
    <textarea name="article" id="textbox" cols="52" rows="5" onChange={this.handleArticleChange} value={this.state.article} placeholder='add text' /> 
    </label>
    <button type="submit" disabled={!this.state.title || !this.state.article || !this.state.topic ? true : false} >Submit</button>
    </form>
)
}
}

ArticleBox.propTypes = {
    postArticle: PropTypes.func.isRequired
}

export default ArticleBox;