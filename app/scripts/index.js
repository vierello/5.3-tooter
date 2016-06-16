var $ = require('jquery');
var PostView = require('./views.js');
var Post = require('./models.js');


$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();

  $('.input-form').on('submit', function(event){
    event.preventDefault();
    $(document).trigger('create:post', [{'title': "Cool", "body": "Cooler"}]);
  });

});
