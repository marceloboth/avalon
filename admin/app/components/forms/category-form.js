import BaseFormComponent from 'admin/components/base/form';
import CategoryValidations from 'admin/validations/category';
import { get } from '@ember/object';

export default BaseFormComponent.extend({
  init() {
    this._super();
    this._createChangeset(get(this, 'category'), CategoryValidations);
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
