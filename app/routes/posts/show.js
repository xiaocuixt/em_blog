import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord("post", params.post_id)
  },
  setupController: function(controller, model){
    controller.set('post', model);
    controller.set('comments', model.get("comments"));
    controller.set('newComment', this.store.createRecord('comment'));
  },
  actions: {
    save() {
      var self = this;
      var comment = self.controller.get('newComment');
      var post = self.controller.get('post');
      comment.set('post', post)
      comment.save().then((post) => {

      });
      return false;
    }
  }
});
