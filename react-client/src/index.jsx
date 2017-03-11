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
    // $.ajax({
    //   url: 'http://api.giphy.com/v1/gifs/search?q=cute+puppies&limit=2&api_key=dc6zaTOxFJmzC',
    //   // url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+puppies',
    //   // url: gitGifs('cute puppies'),
    //   success: (data) => {
    //     console.log("success Data", data);
    //     this.setState({
    //       gifs: data.data
    //     }, () => {console.log(this.state.gifs);})
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // }); 
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
      }, () => {console.log('this state: ', this.state)});
    });
  }

  // searchGiphy({'dc6zaTOxFJmzC', 'cute puppies'}, callback);


  render () {
    return (<div>
      <h1>Puppy Gif List</h1>
      {this.state.gifs && <List gifs={this.state.gifs}/>}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
// searchGiphy={searchGiphy}