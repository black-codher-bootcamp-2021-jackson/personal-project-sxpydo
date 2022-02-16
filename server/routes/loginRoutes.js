const mongoose = require("mongoose");
const User = mongoose.model("users");

const loginRoutes = (app) => {

  app.post(`/api/login`, async (req, res) => {
    
    const user = User.findOne({
          email: req.body.email,
          password: req.body.password
      }) 

      if (user) {
          return res.status(200).send(user)
      }
      else if (err) {
        res.status(500).send({ message: err });
      }

//       .exec((err, user) => {
//           if (err) {
//               res.status(500).send({ message: err });
//               return;
//           }
//           if (user) {
//               res.status(400).send({ message: "Failed! Email is already in use!" });
//               return;
//           }
//           next();
//       });
  });
};

module.exports = loginRoutes;