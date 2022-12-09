import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import secret from "../utils/config.js";
import User from "../models/User.js";
import { default as Role } from "../models/Role.js";
import UserService from "../service/UserService.js";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);

      let userRole = await Role.findOne({ value: "ADMIN" });
      if (!userRole) {
        userRole = await Role({ value: "ADMIN" });
        await userRole.save();
      }
      const user = new User({
        username,
        password: hashPassword,
        roles: ["USER"],
      });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: `Registration error, ${e}` });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${username} не найден` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }

      const token = generateAccessToken(user._id, user.roles);
      const userid = user._id;
      const role = user.roles;
      console.log(role);
      return res.json({ token, userid, role });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
}

export default new AuthController();
