var SearchView = Backbone.View.extend({

  el: '#search-view',
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  events: {
    'click button': 'handleClick',
    'keyup #searchForm': 'handleClick'
  },
  
  handleClick: function(e) {
    var toSearch = $('input').val();
    console.log('search val:', toSearch);
    this.collection.search(toSearch);
  },

  template: templateURL('src/templates/search.html')

});
