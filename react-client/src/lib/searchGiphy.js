import $ from 'jquery';

var searchGiphy = ({key, query}, callback) => {
  //API KEY: dc6zaTOxFJmzC
  $.get('http://api.giphy.com/v1/gifs/search', {
    // part: 'snippet',
    q: query,
    limit: 4,
    api_key: key,
    // videoEmbeddable: 'true'
  })
  .done(({data}) => {
    if (callback) {
      console.log('data in search: ', data);
      callback(data);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


// // window.searchGiphy = searchGiphy; 

export default searchGiphy;