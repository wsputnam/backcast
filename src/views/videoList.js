var VideoListView = Backbone.View.extend({

  url: window.exampleVideoData,

  el: '#video-list',
 
  initialize: function(data) {
    this.videos = new Videos(window.exampleVideoData);
  },
 
  render: function() {
    this.$el.children().detach();
    _.each(this.videos.models, function(video) {
      this.renderVideo(video);
    }, this);
    
    return this.$el;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
