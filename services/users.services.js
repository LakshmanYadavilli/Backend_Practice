const { userCredentials } = require("../models/userCredentials.models");

class UserServices {
  async addNewUser(data) {
    const document = new userCredentials(req.body);
    await document.save();
    return document;
  }

  async getAllUsers() {
    const result = await userCredentials.find({});
    return result;
  }
  async getUserById(id) {
    const result = await userCredentials.findById(id);
    return result;
  }

  async updateUserById(con, data) {
    const option = { new: true };
    const result = await userCredentials.findOneAndUpdate(con, data, option);
    return result;
  }

  async deleteUserById(id) {
    const result = await userCredentials.findByIdAndDelete(id);
    return result;
  }
}

module.exports = UserServices;
