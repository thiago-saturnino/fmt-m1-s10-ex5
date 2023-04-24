const yup = require("yup");

const validation = yup.object().shape({
  username: yup
    .string("Username deve ser uma string")
    .required("Username é OBRIGATÓRIO"),
  password: yup.string().min(8, "A senha deve conter ao menos 8 caracteres"),
});

function validateNewUser(req, res, next) {
  console.log("dado original", req.body);

  try {
    validation.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateNewUser;
