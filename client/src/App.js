import _ from "lodash";
import React, { PropTypes, Component } from 'react';
import axios from 'axios';
// import classnames from 'classnames';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
const API_KEY = '9396f0f67b27407e972c968357c232c3';

Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd
  ].join('');
};




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    // this.articleSearch(this.topic, this.startYear, this.endYear);
  }



  articleSearch(topic, startYear, endYear) {
    let that = this;
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': API_KEY,
        'q': topic,
        'begin_date': startYear || '19000101',
        'end_date': endYear || new Date().yyyymmdd()
      }
    })
      .then(function (articles) {
        console.log(articles);
        that.setState({
          articles: articles.data.response.docs
        });
        console.log(that.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const articleSearch = _.debounce((topic, startYear, endYear) => {
      this.articleSearch(topic, startYear, endYear);
    }, 300);


    return (
      <div>
        <div className="page-header">
          <h1 className="text-center">New York Times Article Scrubber</h1>
        </div>
        <Search onFormSubmit={articleSearch} />
        <Results articleList={this.state.articles} />
      </div>
    );
  }
}

export default App;
