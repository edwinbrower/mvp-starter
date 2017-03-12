import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import searchGiphy from './lib/searchGiphy.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      gifs: null,
      currentGifIndex: 0,
      currentGif: null,
      gif0Index: 0,
      gif1Index: 1
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
      this.setState({
        gifs: gifs,
        currentGif: gifs[0],
        currentGifIndex: Math.floor(Math.random() * 100),
        gifIndex0: Math.floor(Math.random() * 100),
        gifIndex1: Math.floor(Math.random() * 100)
      });
    });
  }

  handleListItemEntryTitleClick(gif) {
    this.setState({
      currentGif: gif,
      currentGifIndex: Math.floor(Math.random() * 100),
    });
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/gifs', 
  //     success: (data) => {
  //       this.setState({
  //         gifs: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>Puppy Party</h1>
      {this.state.gifs && <List gifs={this.state.gifs} currentGifIndex={this.state.currentGifIndex} gifIndex0={this.state.gifIndex0} gifIndex1={this.state.gifIndex1} handleListItemEntryTitleClick={this.handleListItemEntryTitleClick.bind(this)}/>}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));