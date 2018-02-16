import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    async delete(page) {
      if(confirm('Deseja remover a página?')){
        await page.destroyRecord();
        this.transitionTo('page.index');
      }
    }
  }
});
