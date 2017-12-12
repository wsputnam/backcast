var VideoListView = Backbone.View.extend({

  url: window.exampleVideoData,
  // url: 'src/data/exampleVideoData.js',
  el: '#video-list',
 
  // render: function() {
    // this.$el.children().detach();
    // this.$el.html(this.template());
  //   return this.$el;
  // },
  
  initialize: function() {
    // debugger;
    this.videos = new Videos(window.exampleVideoData);
    // console.log('collection', this.videos.models);
  },
  
  render: function() {
    // this.$el.empty();
    this.$el.children().detach();
    // this.$el.html(this.template());
    // console.log('render', this);
    // var videoArray = _.map(window.exampleVideoData, function(video) {
    //   return video.url;
    // });
    // console.log('empty', this);
    // this.$el.append(this.collection.map(function(video) {
    //   return new VideoListEntryView({model: video}).render().el;
    // }));
    // _.each(this.url, this.renderVideo, this);
    // console.log('example data', this.url);
    _.each(this.videos.models, function(video) {
      this.renderVideo(video);
    }, this);
    
    return this.$el;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    console.log('for each', video);
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
