var AppView = Backbone.View.extend({

  el: '#app',
  


  initialize: function() {
    this.videos = new Videos();
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
      model: this.video
    }).render();
    
    new VideoListView({
      el: this.$('#video-list'),
      collection: this.videos
    }).render();
    
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
