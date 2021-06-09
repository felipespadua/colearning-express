const users = [
  {
    id: 4,
    nome: "Felipe",
  },
  {
    id: 1,
    nome: "Jose",
  },
  {
    id: 7,
    nome: "Mathias",
  },
  {
    id: 3,
    nome: "Will",
  },
  {
    id: 5,
    nome: "Gustavo",
  },
];

const userController = {
  getUsers: (req, res) => {
    res.render("index", { nome: "Felipe", users });
  },
  getUser: (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => id == user.id);
    res.send(user);
  },
};

module.exports = userController;
