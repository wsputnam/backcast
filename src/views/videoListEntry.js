var VideoListEntryView = Backbone.View.extend({
  // url: 'src/data/exampleVideoData.js',
  template: _.template(`<div id ="video-entry" class="video-list-entry media"> 
    <div class="media-left">
      <img class="media-object" src=<%- image %> />
    </div>
    <div class="media-body">
      <div class="video-list-entry-title"><%- title %></div>
      <div class="video-list-entry-detail"><%- detail %></div>
    </div>
  </div>`),
  // template: _.template('<div class="movie"> \
  //                         <div class="like"> \
  //                           <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
  //                         </div> \
  //                         <span class="title"><%- title %></span> \
  //                         <span class="year">(<%- year %>)</span> \
  //                         <div class="rating">Fan rating: <%- rating %> of 10</div> \
  //                       </div>'),
  render: function() {
    // this.$el.html(this.get(exampleVideoData));
    this.$el.html(this.template(this.model.attributes));
    // console.log('list entry', this);
    return this.$el;
  },

});
