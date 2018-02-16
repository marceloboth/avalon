import Component from '@ember/component';
import { set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

export default Component.extend({
  _createChangeset(model, validation) {
    const changeset = new Changeset(model, lookupValidator(validation), validation);
    set(this, 'changeset', changeset);
  }
})
