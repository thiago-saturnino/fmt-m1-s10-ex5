const User = require("../../models/users");

async function createUsers(req, res) {
  try {
    const user = {
      name: req.body.name,

      email: req.body.email,

      username: req.body.username,

      password: req.body.password,
    };

    const newUser = await User.create(user);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = createUsers;
