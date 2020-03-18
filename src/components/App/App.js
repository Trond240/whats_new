import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import { NewsContainer } from '../NewsContainer/NewsContainer';
// import entertainment from '../../data/entertainment';
// import technology from '../../data/technology';
// import science from '../../data/science';
// import health from '../../data/health';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local
  }
}

  render() {
    return (
    <main>
      <div className="app">
        <NewsContainer localArticles={this.state.local}/>
      </div>
    </main>
    )
  }
};

export default App;
