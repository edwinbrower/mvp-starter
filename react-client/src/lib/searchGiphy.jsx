var searchGiphy = ({key, query}, callback) => {
  //API KEY: dc6zaTOxFJmzC
  $.get('http://api.giphy.com/v1/gifs/search', {
    // part: 'snippet',
    q: query,
    limit: 4,
    key: key,
    // videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


window.searchGiphy = searchGiphy; 