import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import { NewsContainer } from '../NewsContainer/NewsContainer';
import { Menu } from '../Menu/Menu'
import entertainment from '../../data/entertainment';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';

class App extends Component {
  constructor() {
    super();
    this.state = {articles: {
      local: local,
      technology: technology,
      science: science,
      health: health,
      entertainment: entertainment
  },

    selected: local
  }
}

  changeNews = (newsArticles) => {
    let newsType = this.state.articles[newsArticles];
    this.setState({selected: newsType})
  }

  render() {
    return (
    <main>
      <div className="app">
        <Menu changeNews={this.changeNews}/>
        <NewsContainer newsArticles={this.state.selected}/>
      </div>
    </main>
    )
  }
};

export default App;
