import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  email: DS.attr('string'),
  content: DS.attr('string')
});
