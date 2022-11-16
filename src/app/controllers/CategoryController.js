const CategoriesRepository = require("../repositories/CategoriesRepository");


class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category_id = await CategoriesRepository.findById(id);

    if (!category_id) {
      return response.status(404).json({ error: "category not found" });
    }

    response.json(category_id);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const categoryExists = await CategoriesRepository.findByName(name);

    if (categoryExists) {
      return response.status(400).json({ error: "This name is already registered" });
    }

    const category = await CategoriesRepository.create({ name });
    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: "category not found" });
    }
    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const categoryByNameExists = await CategoriesRepository.findByName(name);

    if (categoryByNameExists) {
      return response.status(400).json({ error: "This name is already registered" });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
