var mongoose = require('mongoose');
var user = mongoose.model('user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res, next) => {
    console.log("in user login" , req.body);
    let email = req.body.email;
    let password = req.body.password;
    user.findOne({ email: email,})
        .exec()
        .then(async (auth) => {
            console.log("authhhh", auth);
            if (auth) {
                const id = auth._id;
                await bcrypt.compare(password, auth.password, (err, result) => {
                    if (err) {
                        console.log("error", err)
                        return res.status(500).json({
                            message: "password decryption error",
                        });
                    } else {
                        if (result == true) {
                            // const userToken = localStorage.getItem('userToken')
                            const loginToken = jwt.sign({ id }, "process.env.JWT_SESSION_KEY", {
                                expiresIn: "1h",
                            });
                            res.status(200).json({
                                message: "login Successful",
                                token: loginToken,
                                user: auth,
                                id: id,
                            });
                        } else {
                            return res.status(403).json({
                                message: "Invalid Password",
                            });
                        }
                    }
                });
            } else {
                return res.status(404).json({
                    message: "No user found for this email",
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
};



module.exports.userregister = async (req,res,next) => {

    let email = req.body.email;
    let password = req.body.password;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    password = hash;

    let user = new user({
        email: email,
        password: password
    });

    user.save().then((res1)=>{
        console.log(res1)
        res.send("user saved")
    })
}