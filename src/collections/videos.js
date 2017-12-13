var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) {
    
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      dataType: 'JSON',
      contentType: 'application/json',
      data: 
      { 'maxResults': '5',
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'key': window.YOUTUBE_API_KEY,
        'videoEmbeddable': true
      },
      success: function(data) {
        // get items back that match search criteria
  
        // this.set(data.items);
        
        console.log(data.items);
        return data.items;
      },
      error: function(data) {
        console.log('error: ' + data);
      }
    });

  },
  
  parse: function(obj) {
    // puts data object into collection form
    if (_.isObject(obj.items)) {
      return obj.items;
    } else {
      return obj;
    }
  }
  
  // parse: function (response, xhr) {
  //   if (_.isObject(response.items)) {
  //     return response.items;
  //   } else {
  //     return response;
  //   }

  
});



// var response = collection.parse({ items: fakeVideoData });
//       expect(response).to.be.equal(fakeVideoData);