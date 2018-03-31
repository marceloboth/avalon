import Component from '@ember/component';

export default Component.extend({
  classNames: 'field',

  actions: {
    validateProperty(changeset, property){
      return changeset.validate(property);
    }
  }
});
