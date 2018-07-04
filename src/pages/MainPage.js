import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ArticleList, Navbar } from '../components'
import { fetchAllArticles } from '../dataFunctions/api';

class MainPage extends Component {

  state = {
    articles: [],
    loading: true,
    page: this.props.location.search ? /^\d+$/.exec(this.props.location.search) : 1,
    index: this.props.location.search ? /^\d+$/.exec(this.props.location.search) - 1 : 0,
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

  handleUpClick = (event) => {
    this.props.history.push({
      pathname: '/articles',
      search: `?page=${this.state.page + 1}`
    })
    this.setState({ index: this.state.index + 1, page: this.state.page + 1 })
  }

  handleDownClick = (event) => {
    this.props.history.push({
      pathname: '/articles',
      search: `?page=${this.state.page - 1}`
    })
    this.setState({ index: this.state.index - 1, page: this.state.page - 1 })
  }

  componentDidMount() {
    this.fetchArticles()
    .then(articles => {
      console.log('this.state.articles.length', this.state.articles.length, 'this.state.page', this.state.index)
      if (this.state.index > this.state.articles.length -1 || this.state.index < 0 || !/^\d+$/.test(this.state.index) ){
      this.props.history.push('/404')
    }
  })
  }


  render() {
    return (
      <div>

        <Navbar />
        {this.state.loading ? <div>Loading...</div>
          :
          <div>
            <button onClick={this.handleDownClick} disabled={this.state.page < 2 ? true : false}> Down one page...</button>
            <button onClick={this.handleUpClick} disabled={this.state.page > this.state.articles.length - 1 ? true : false} > Up one page...</button>
            <p>Page {`${this.state.page}`} of {`${this.state.articles.length}`}</p>
            <ArticleList topic='' articles={this.state.articles[this.state.index]} history={this.props.history}/>
          </div>
        }
      </div>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.object.isRequired
}

export default MainPage;
