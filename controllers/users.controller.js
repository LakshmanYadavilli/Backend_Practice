const UserServices = require("../services/users.services");
const userServicesInstance = new UserServices();
const addNew = async (req, res) => {
  console.log({ req });

  try {
    const result = await userServicesInstance.addNewUser(req.body);
    res.json(result);
  } catch (e) {
    console.log({ e });
    res.status(500).send(e.message);
  }
};
const getAll = async (req, res) => {
  // console.log({ querry: req.query });

  const result = await userServicesInstance.getAllUsers();
  // const result = await userCredentials.find({
  //   $or: [
  //     { username: username1 },
  //     {
  //       username: username2,
  //     },
  //   ],
  // });
  return res.json(result);
};

const deleteUserById = async (req, res) => {
  try {
    const result = await userServicesInstance.deleteUserById(req.params._id);
    res.send(`User Id with ${req.params._id} Successfully Deleted`);
  } catch (e) {
    res.send(e.message);
  }
};

const paritialUpdate = async (req, res) => {
  const result = await userServicesInstance.updateUserById(
    req.params,
    req.body
  );

  res.json({ result });
};
const getUserById = async (req, res) => {
  console.log({ params: req.params });
  try {
    const result = await userServicesInstance.getUserById(req.params._id);
    // const modifyTime = result.createdAt.toLocaleString("en-IN", {
    //   timeZone: "Asia/Kolkata",
    // });
    // const date = new Date(modifyTime);
    // console.log(typeof modifyTime);
    res.json(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  addNew,
  getAll,
  deleteUserById,
  paritialUpdate,
  getUserById,
};
