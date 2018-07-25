import React, { Component } from 'react';

import PropTypes from 'prop-types';
import '../styling/pages/MainPage.css'

import { ArticleList} from '../components'
import { fetchAllArticles } from '../dataFunctions/api';

class MainPage extends Component {

  state = {
    articles: [],
    loading: true,
    page: this.props.location.search ? this.props.location.search.match(/\d+\b/) : 1,
    index: this.props.location.search ? this.props.location.search.match(/\d+\b/) - 1 : 0,
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
    console.log('this.props.history', this.props.history)
    this.props.history.push({
      pathname: '/articles',
      search: `?page=${this.state.page + 1}`
    })
    this.setState({ index: this.state.index + 1, page: this.state.page + 1 })
    console.log('this.state.index', this.state.index)
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
  }


  render() {
    return (
      <div>
        {this.state.loading ? <div>Loading...</div>
          :
          <div className='page-container'>
          <div className='paginator' >
          <div className='paginator-container'>
          <div className="paginator-1"><p>Page {`${this.state.page}`} of {`${this.state.articles.length}`}</p></div>
          <div className="paginator-2"><button className='paginator-button' onClick={this.handleDownClick} disabled={this.state.page < 2 ? true : false}> down </button></div>
          <div className="paginator-3"><button className='paginator-button' onClick={this.handleUpClick} disabled={this.state.page > this.state.articles.length - 1 ? true : false} > up</button></div>
            </div>
            </div>
            <div className='article-list'>
          <ArticleList topic='' articles={this.state.articles[this.state.index]} history={this.props.history}/>
          </div>
          </div>
        }
         </div>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  })
}

export default MainPage;
