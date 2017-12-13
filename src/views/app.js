var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },
  
  collection: this.videos,

  render: function() {
    this.$el.html(this.template());
    
    new SearchView({
      el: this.$('#search-view'),
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('#video-player'),
      model: this.videos.at(0)
    }).render();
    
    new VideoListView({
      el: this.$('#video-list'),
      collection: this.videos
    }).render();
    
    return this.$el;
  },

  template: templateURL('src/templates/app.html')
  


});
