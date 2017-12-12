var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView({
      el: this.$('#search-view'),
      collection: this.collection
    }).render();
    new VideoPlayerView({
      el: this.$('#video-player'),
      model: this.model
    }).render();
    new VideoListView({
      el: this.$('#video-list'),
      collection: this.collection
    }).render();
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
