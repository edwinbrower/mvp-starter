import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   // url: '/items', 
    //   url: gitGifs('cute puppies'),
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
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
    this.props.searchGiphy(options, (gifs) => {
      this.setState({
        items: gifs
      });
    });
  }

  // searchGiphy({'dc6zaTOxFJmzC', 'cute puppies'}, callback);


  render () {
    return (<div>
      <h1>Puppy Gif List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
// searchGiphy={searchGiphy}