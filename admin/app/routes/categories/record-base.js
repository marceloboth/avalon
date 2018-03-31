import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  notify: service('notify'),

  setupController(controller, model) {
    this._super();
    set(controller, 'category', model);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      let model = get(controller, 'category');

      if (get(model, 'isNew')) {
        model.destroyRecord();
      } else if(!get(model, 'isDeleted')) {
        model.rollbackAttributes();
      }
    }
  },

  actions: {
    async save(changeset) {
      try {
        await changeset.save();
        this.transitionTo('categories.edit', get(changeset, 'id'));
        get(this, 'notify').info('Cadastro salvo');
      } catch (e) {
        const errors = get(changeset._content, 'errors');

        errors.forEach(({ attribute, message}) => {
          changeset.pushErrors(attribute, message.split(" - ")[1]);
        });
      }
    }
  }
});
