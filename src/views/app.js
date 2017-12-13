var AppView = Backbone.View.extend({

  el: '#app',
  
  // collection: this.videos,

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.search('hackreactor');
    console.log('new movies', this.videos.search('hackreactor'));
    this.videos.on('all', this.render, this);
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    
    new SearchView({
      el: this.$('#search-view'),
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('#video-player'),
      model: this.videos.at(0) // automatically selects the first video without invoking model.select
    }).render();
    
    new VideoListView({
      el: this.$('#video-list'),
      collection: this.videos
    }).render();
    
    return this.$el;
  },
  

  template: templateURL('src/templates/app.html')
  


});
