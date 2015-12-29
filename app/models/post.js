import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comments'),
  title: DS.attr('string'),
  content: DS.attr('string'),
});
