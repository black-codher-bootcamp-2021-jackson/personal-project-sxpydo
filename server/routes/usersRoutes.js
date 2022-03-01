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
   
    // const user = await User.create({
    //       first_name: req.body.first_name,
    //       last_name: req.body.last_name,
    //       location: req.body.location,
    //       password: req.body.password,
    //       email: req.body.email,
    //       mobile: req.body.mobile,
    //     }).exec(); 

    //     console.log(user)
    //     if (user) {
    //         return res.status(200).json({user})
    //     }
    //     else {
    //       return res.status(404).json({ message: "Email already exists!" });
    //     }
    
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