import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from '../components/ArticleList'
import {fetchAllArticles} from '../dataFunctions/api';

class MainPage extends Component {

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

MainPage.propTypes = {
  history: PropTypes.object.isRequired
}

export default MainPage;
