import RecordBaseRoute from './record-base';

export default RecordBaseRoute.extend({
  model() {
    return this.store.createRecord('category');
  }
});
