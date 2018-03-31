import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import BaseFormComponent from 'admin/components/base/form';
import PageValidations from 'admin/validations/page';

export default BaseFormComponent.extend({
  store: service(),

  init() {
    this._super();
    this._createChangeset(get(this, 'page'), PageValidations);

    const store = get(this, 'store');
    const categories = store.findAll('category');
    set(this, 'categories', categories);
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
