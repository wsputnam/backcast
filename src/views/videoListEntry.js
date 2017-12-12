var VideoListEntryView = Backbone.View.extend({
  // url: 'src/data/exampleVideoData.js',
  title: '.video-list-entry-title',
  detail: '.video-list-entry-detail',
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log('list entry', this);
    return this.$el;
  },
  template: templateURL('src/templates/videoListEntry.html')

});
