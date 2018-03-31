import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    async delete(category) {
      if(confirm('Deseja remover a caregoria?')){
        await category.destroyRecord();
        this.transitionTo('categories.index');
      }
    }
  }
});
