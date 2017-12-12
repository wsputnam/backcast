var VideoPlayerView = Backbone.View.extend({

  el: '#video-player',
  
  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
