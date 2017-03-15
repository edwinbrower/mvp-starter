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
      loves: 0
    }
  }

// This should be getting just 2 random gifs from the db.
// then should be testing from id
// will try to get favorites working again

  componentDidMount() { 
    $.ajax({
      // url: '/gifs', 
      url: '/randomGifs',
      success: (data) => {
        console.log('did mount', data);
        this.setState({
          gifs: [data, data]
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  // getGifs(query) {
  //   var options = {
  //     key: 'dc6zaTOxFJmzC',
  //     query: query
  //   };
  //   searchGiphy(options, (gifs) => {
  //     this.setState({
  //       gifs: gifs,
  //       currentGif: gifs[0],
  //       gifIndex0: 0,
  //       gifIndex1: 1,
  //       gif0: gifs[0],
  //       gif1: gifs[1]
  //     });
  //   });
  // }

  handleListItemEntryTitleClick(gif) {
    // Here should do a post request // might not need to with how it's set up.
    $.ajax({
      url: 'http://localhost:3000/randomGif',
      type: 'GET',
      success: (data) => {
        // var random = Math.floor(Math.random() * 100);
        if (gif === this.state.gifs[0]) {
          console.log('data then gifs', data, this.state.gifs);
          this.setState({
            gifs: [data[0], this.state.gifs[1] ]
          });
        } else {
          this.setState({
            gifs: [this.state.gifs[0], data[0]]
          });
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleGifLoveClick(gif) {
    // $.ajax({
    //   url: 'http://localhost:3000/gif/like',
    //   type: 'POST',
    //   success: (callback) => {
    //     callback(gif);
    //     // this.setState({
    //     //   loves: ++this.state.loves
    //     // });
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });

    // needs to update favorite get the gifs again
    this.setState({
      loves: ++this.state.loves
    });
  }

  render () {
    return (<div className="background">
      <h1>Puppy Party</h1>
      {console.log('app ', this.state)}
      {this.state.gifs && <List gifs={this.state.gifs} handleListItemEntryTitleClick={this.handleListItemEntryTitleClick.bind(this)} handleGifLoveClick={this.handleGifLoveClick.bind(this)}/>}
      Total love count: {this.state.loves}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));