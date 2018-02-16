import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  classNames: 'field',

  actions: {
    validateProperty(changeset, property){
      return changeset.validate(property);
    }
  }
});
