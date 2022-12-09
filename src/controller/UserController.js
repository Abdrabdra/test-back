import UserService from "../service/UserService.js";

class UserController {
  async getAll(req, res) {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

  async getOne(req, res) {
    try {
      const oneUser = await UserService.getOne(req.params.id);
      return res.json(oneUser);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updated = await UserService.update(req.body);
      return res.json(updated);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const deleted = await UserService.delete(req.params.id);
      return res.json(deleted);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new UserController();
