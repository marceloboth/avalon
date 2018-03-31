import DS from 'ember-data';

export default DS.Model.extend({
  title:      DS.attr('string'),
  slug:       DS.attr('string'),
  body:       DS.attr('string'),
  publicated: DS.attr('boolean'),

  category:   DS.belongsTo('category')
});
