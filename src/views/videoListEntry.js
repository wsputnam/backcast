var VideoListEntryView = Backbone.View.extend({
  template: _.template(`<div id ="video-entry" class="video-list-entry media"> 
    <div class="media-left">
      <img class="media-object" src=<%- image %> />
    </div>
    <div class="media-body">
      <div class="video-list-entry-title"><%- title %></div>
      <div class="video-list-entry-detail"><%- detail %></div>
    </div>
  </div>`),
  
  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos = new Videos(this.videos.search('hackreactor'));
    
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  events: {
    'click #video-entry': 'handleClick'
  },
  
  handleClick: function() {
    this.model.select();
    new VideoPlayerView({
      el: $('#video-player'),
      model: this.model,
      collection: this.model.collection
    }).render();
  }

});