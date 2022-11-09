const ContactsRepository = require("../repositories/ContactsRepository");


class ContactControler {
    async index(request, response) {
      const contacts = await ContactsRepository.findAll();

      response.json(contacts);
    }

    show() {
      // Obter um registro
    }

    store() {
      // Criar novo registro
    }

    update() {
      // Editar um registro
    }

    delete() {
      // Deletar um registro
    }
}

module.exports = new ContactControler();
