var VideoListEntryView = Backbone.View.extend({

  url: 'src/data/exampleVideoData.js',
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
