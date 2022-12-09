import User from "../models/User.js";

class UserService {
  async getUsers() {
    const users = await User.find();
    return users;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const user = await User.findById(id);
    return user;
  }

  async update(user) {
    if (!user._id) {
      throw new Error("не указан ID");
    }

    const updated = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updated;
  }

  async delete(id) {
    console.log(id);
    if (!id) {
      throw new Error("не указан ID");
    }

    const deleted = await User.findByIdAndDelete(id);
    return deleted;
  }
}

export default new UserService();
