import React, { Component } from 'react';
import ArticleList from '../components/ArticleList'

class Homepage extends Component {

  state = {
    articles: [],

  }

  componentDidMount(){

    fetch('https://chenerywoman-northcoders-news.herokuapp.com/api/articles')
    .then(res => {
      return res.json()
    })
    .then(res => {
      this.setState({articles: res.articles})
    })
    .catch(err => { 
      console.log(err)
      if (err) {throw new Error('new error')}
    }
    )

  }

  render() {
    return (
      <div>
        <header>
          <h1>Northcoders News</h1>
          <ArticleList articles={this.state.articles}/>
        </header>
      </div>
    );
  }
}

export default Homepage;
