const mongoose = require("mongoose");
const User = mongoose.model("users");

const usersRoutes = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const users = await User.find();

    return res.status(200).send(users);
  });

  app.post('http://localhost:8080/api/user/signup', async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    }).exec(); 

    console.log(user)
    if (user) {
        return res.status(200).json({user})
    }
    else {
      return res.status(404).json({ message: "ERROR!!" });
    }

  });

  app.put(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    });
  });
};

module.exports = usersRoutes;