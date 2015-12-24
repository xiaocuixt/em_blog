import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');

    this.route('show', {
      path: ':post_id'
    });
  });
});

export default Router;
