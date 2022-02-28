const mongoose = require("mongoose");
const User = mongoose.model("users");

const usersRoutes = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const user = await User.find();

    return res.status(200).send(user);
  });

  app.post(`/api/user/signup`, async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          location: req.body.location,
          password: req.body.password,
          emailAddress: req.body.emailAddress,
          mobile: req.body.mobile,
      })
      res.json({status: 'success!'})
    } catch (err) {
      res.json({status: 'error', error: 'Email already exists' })
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