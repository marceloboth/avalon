import {
  validatePresence
} from 'ember-changeset-validations/validators';

export default {
  title: validatePresence({ presence: true, message: "é obrigatório" }),
  body: validatePresence({ presence: true, message: "é obrigatório"}),
  category: validatePresence({ presence: true, message: "é obrigatório"})
}
