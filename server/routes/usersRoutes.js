const mongoose = require("mongoose");
const User = mongoose.model("users");

const usersRoutes = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const user = await User.find();

    return res.status(200).send(user);
  });

  app.post(`/api/user/`, async (req, res) => {
    console.log(req.body)
    
    const user = await User.create(req.body);

    return res.status(201).send({
      error: false,
      user,
    }); 
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