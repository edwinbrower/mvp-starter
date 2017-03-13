// import $ from 'jquery';
require('jquery');

var searchGiphy = ({key, query}, callback) => {
  $.get('http://api.giphy.com/v1/gifs/search', {
    q: query,
    limit: 100,
    api_key: key,
  })
  .done(({data}) => {
    if (callback) {
      callback(data);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


module.exports = searchGiphy;
// export default searchGiphy;