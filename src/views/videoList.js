var VideoListView = Backbone.View.extend({

  url: window.exampleVideoData,
  el: '#video-list',
 
  // render: function() {
    // this.$el.children().detach();
    // this.$el.html(this.template());
  //   return this.$el;
  // },
  
  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
  },
  
  render: function() {
    this.$el.empty();
    // this.$el.children().detach();
    // this.$el.html(this.template());
    // console.log('render', this);
    // var videoArray = _.map(window.exampleVideoData, function(video) {
    //   return video.url;
    // });
    _.each(window.exampleVideoData, this.renderVideo, this);
    return this.$el;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    // console.log('for each', this);
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
