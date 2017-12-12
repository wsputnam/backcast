var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('detail', video.snippet.description);
    this.set('image', video.snippet.thumbnails.default.url);
    // this.set('videourl', 'https://www.youtube.com/embed/' + video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
