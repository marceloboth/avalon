import { get } from '@ember/object';
import BaseFormComponent from 'admin/components/base/form';
import PageValidations from 'admin/validations/page';

export default BaseFormComponent.extend({
  init() {
    this._super();
    this._createChangeset(get(this, 'page'), PageValidations);
  },

  actions: {
    async save(){
      const changeset = get(this, 'changeset');

      await changeset.validate();

      if (get(changeset, 'isValid')) {
        get(this, 'save')(changeset);
      }
    }
  }
})
