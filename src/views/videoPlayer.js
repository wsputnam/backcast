var VideoPlayerView = Backbone.View.extend({

  el: '#video-player',
  
//   template: _.template(`<div class="video-player">
//   <div class="embed-responsive embed-responsive-16by9">
//     <iframe class="embed-responsive-item" src=<%- videourl %> allowFullScreen></iframe>
//   </div>
//   <div class="video-player-details">
//     <h3><%- title %> Video Title</h3>
//     <div><%- detail %> Video Description</div>
//   </div>
// </div>`),

  
  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
