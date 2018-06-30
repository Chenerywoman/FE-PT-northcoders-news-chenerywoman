import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from '../components/ArticleList'
import {fetchAllArticles} from '../api';

class HomePage extends Component {

  state = {
    articles: [],
    loading: true
  }

  fetchArticles = () => {
    return fetchAllArticles()
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
          {this.state.loading ? <div>Loading...</div>
            :
            <ArticleList topic='' articles={this.state.articles} />
          }
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired
}

export default HomePage;
