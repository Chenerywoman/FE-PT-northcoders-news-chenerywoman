import React, { Component } from 'react';

import ArticleList from '../components/ArticleList'
import * as api from '../api';

class Homepage extends Component {

  state = {
    articles: [],
    loading: true
  }

  fetchArticles = () => {
    return api
      .fetchAllArticles()
      .then(articles => {
        this.setState({ articles, loading: false })
      })
      .catch(error => {
        this.props.history.push('/404');
      });
  };
q
  componentDidMount() {
    this.fetchArticles()
  }

  render() {
    return (
      <div>
        <header>
          <h1>Northcoders News</h1>
          {this.state.loading ? <div>Loading...</div>
            :
            <ArticleList topic='' articles={this.state.articles} />
          }
        </header>
      </div>
    );
  }
}

export default Homepage;
