const mongoose = require("mongoose");
const User = mongoose.model("users");

const loginRoutes = (app) => {

  app.post(`/api/login`, async (req, res) => {
    
    
    const user = await User.findOne({
          email: req.body.email,
          password: req.body.password
      }).exec(); 

      // console.log(user)
      if (user) {
          return res.status(200).json({user})
      }
      else {
        return res.status(404).json({ message: "user not found" });
      }

    // return ( res.status(200).send('test'))

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