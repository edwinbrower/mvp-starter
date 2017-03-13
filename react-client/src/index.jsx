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
      gif1: null,
      loves: 0
    }
  }

// This should be getting just 2 random gifs from the db.
// then should be testing from id
// will try to get favorites working again

  componentDidMount() { 
    this.getGifs('cute puppies');
    $.ajax({
      url: '/gifs', 
      success: (data) => {
        console.log('did mount', data);
        // this.getGifs('cute puppies');
        // this.setState({
        //   gifs: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
    // $.ajax({
    //   url: '/gifs',
    //   type: 'GET',
    //   success: (redditData) => {
    //     redditData = (JSON.parse(redditData)).data.children;
    //     console.log(redditData[0], 'this is what I hoped to be an array', 'is it?', Array.isArray(redditData));
    //     this.setState({
    //       items: redditData
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err from inside componentDidMount', err);
    //   }
    // });
  
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
    // Here should do a post request
    // $.ajax({
    //   url: 'http://localhost:3000/',
    //   type: 'POST',
    //   success: () => {
    //     var random = Math.floor(Math.random() * 100);
    //     if (gif === this.state.gif0) {
    //       this.setState({
    //         // currentGif: gif,
    //         // currentGifIndex: Math.floor(Math.random() * 100),
    //         gifIndex0: random,
    //         gif0: this.state.gifs[random]
    //       });
    //     } else {
    //       this.setState({
    //         // currentGif: gif,
    //         // currentGifIndex: Math.floor(Math.random() * 100),
    //         gifIndex1: random,
    //         gif1: this.state.gifs[random]
    //       });
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });


    console.log('passed gif', gif);
    console.log('state', this.state);
    var random = Math.floor(Math.random() * 100);
    if (gif === this.state.gif0) {
      this.setState({
        // currentGif: gif,
        // currentGifIndex: Math.floor(Math.random() * 100),
        gifIndex0: random,
        gif0: this.state.gifs[random]
      });
    } else {
      this.setState({
        // currentGif: gif,
        // currentGifIndex: Math.floor(Math.random() * 100),
        gifIndex1: random,
        gif1: this.state.gifs[random]
      });
    }
  }

  handleGifLoveClick(gif) {
    // $.ajax({
    //   url: 'http://localhost:3000/',
    //   type: 'POST',
    //   success: () => {
    //     this.setState({
    //       loves: ++this.state.loves
    //     });
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
    this.setState({
      loves: ++this.state.loves
    });
  }


  render () {
    return (<div className="background">
      <h1>Puppy Party</h1>
      {console.log('app ', this.state)}
      {this.state.gifs && <List gifs={this.state.gifs} currentGif={this.state.currentGif} currentGifIndex={this.state.currentGifIndex} gifIndex0={this.state.gifIndex0} gifIndex1={this.state.gifIndex1} handleListItemEntryTitleClick={this.handleListItemEntryTitleClick.bind(this)} handleGifLoveClick={this.handleGifLoveClick.bind(this)} loves={this.state.loves}/>}
      Total love count: {this.state.loves}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));