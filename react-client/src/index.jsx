import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import searchGiphy from './lib/searchGiphy.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      gifs: null
    }
  }

  componentDidMount() { 
    this.getGifs('cute puppies');
  }
  
  getGifs(query) {
    var options = {
      key: 'dc6zaTOxFJmzC',
      query: query
    };
    searchGiphy(options, (gifs) => {
      console.log('gifs: ', gifs);
      this.setState({
        gifs: gifs
      });
    });
  }

  render () {
    return (<div>
      <h1>Puppy Party</h1>
      {this.state.gifs && <List gifs={this.state.gifs}/>}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));