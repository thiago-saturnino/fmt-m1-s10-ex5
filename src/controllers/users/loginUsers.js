const User = require("../../models/users");
const jwt = require("jsonwebtoken");

async function loginUsers(req, res) {
  try {
    const userExists = await User.findOne({
      where: { username: req.params.username },
    });

    if (!userExists) {
      return res.status(404).json({ message: "Credenciais Incorretas" });
    }

    const passwordExists = await User.findOne({
      where: { password: req.params.password },
    });

    if (!passwordExists) {
      return res
        .status(400)
        .json({ message: "Confira suas informações de acesso" });
    }

    const token = jwt.sign(
      {
        id: userExists.id,
      },
      process.env.CHAVE,
      {
        expiresIn: "1h",
      }
    );
    res.json({ username: userExists.username, token: token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possível processar a solicitação" });
  }
}

module.exports = loginUsers;
