import BookService from "../service/BookService.js";

class BookController {
  async create(req, res) {
    try {
      const result = await BookService.create(req.body);
      res.json(result);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const result = await BookService.getAll();
      return res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const result = await BookService.getOne(req.params.id);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const result = await BookService.delete(req.params.id);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new BookController();
