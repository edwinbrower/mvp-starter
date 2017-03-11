import $ from 'jquery';

var searchGiphy = ({key, query}, callback) => {
  $.get('http://api.giphy.com/v1/gifs/search', {
    q: query,
    limit: 50,
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

export default searchGiphy;