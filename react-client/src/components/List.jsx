import React from 'react';
import ListItem from './ListItem.jsx';
import maxResults from '../lib/searchGiphy.js'

const List = (props) => (
  <div>
    <h4> List Component </h4>
    {console.log('hello', props)}
    <ListItem item={props.gifs[ Math.floor(Math.random() * 50)]}/>
    <ListItem item={props.gifs[ Math.floor(Math.random() * 50)]}/>
  </div>
)

export default List;
    // {
    //   ( ()=> {
    //     var results = [];
    //     var numberOfGifsWanted = 2;
    //     var maxResults = 4;
    //     for (var i = 0; i < numberOfGifsWanted; i++) {
    //       var index = Math.floor(Math.random() * maxResults);
    //       console.log(index);
    //       results.push(props.gifs[index]);
    //     }
    //     return results;
    //   }).map( (item) => {<ListItem key={item.id} item={item}/>})
    // }


  //   {
  //     ()=> {
  //       var results = [];
  //       var numberOfGifsWanted = 2;
  //       var maxResults = 4;
  //       for (var i = 0; i < numberOfGifsWanted; i++) {
  //         var index = Math.floor(Math.random() * maxResults);
  //         console.log(index);
  //         results.push(props.gifs[index]);
  //       }
  //       console.log('iii');
  //       return results.map( (item) => {<ListItem key={item.id} item={item}/>})
  //   }
  // }




        // { props.gifs.map(item => <ListItem key={item.id} item={item}/>)}
      // <ListItem item={props.gifs[0]}/>



    // <ListItem item={props.gifs}/>

    // { 

      // for (var i = 0; i < 2; i++) {
      // } 
      
    // }
    // There are { props.gifs.length } gifs.
