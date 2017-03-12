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
      gifIndex0: 0,
      gifIndex1: 1,
      gif0: null,
      gif1: null
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
        gifIndex0: 0,
        gifIndex1: 1,
        gif0: gifs[0],
        gif1: gifs[1]
      });
    });
  }

  handleListItemEntryTitleClick(gif) {
    console.log('passed gif', gif);
    console.log('state', this.state);
    var random = Math.floor(Math.random() * 100);
    if (gif === this.state.gif0) {
      this.setState({
        // currentGif: gif,
        // currentGifIndex: Math.floor(Math.random() * 100),
        // gif0: this.state.gifs[Math.floor(Math.random() * 100)],
        gifIndex0: random,
        gif0: this.state.gifs[random]
      });
    } else {
      this.setState({
        // currentGif: gif,
        // currentGifIndex: Math.floor(Math.random() * 100),
        // gif1: this.state.gifs[Math.floor(Math.random() * 100)],
        gifIndex1: random,
        gif1: this.state.gifs[random]
      });
    }
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
      {console.log('app ', this.state)}
      {this.state.gifs && <List gifs={this.state.gifs} currentGif={this.state.currentGif} currentGifIndex={this.state.currentGifIndex} gifIndex0={this.state.gifIndex0} gifIndex1={this.state.gifIndex1} handleListItemEntryTitleClick={this.handleListItemEntryTitleClick.bind(this)}/>}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));