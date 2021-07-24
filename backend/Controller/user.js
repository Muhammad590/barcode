var mongoose = require('mongoose');
var user = mongoose.model('user');
var employinfo = mongoose.model("EmployInfo")
const bcrypt = require("bcryptjs");

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
                console.log("in else")
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



// module.exports.userregister = async (req,res,next) => {

// console.log(req.body)
// let user1 = new user({
//     email: req.body.email,
//     password: req.body.password,
// });

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(user1.Password, salt, (err, hash) => {
//         if (err) throw err;
//         user1.Password = hash;
    
//     user1.save().then((res1)=>{
//         console.log(res1)
//         res.send("user saved")
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// })
// }

module.exports.userregister = async (req,res,next) => {
        let arr = {};
        console.log(req.body);

        try {
            //check if user exists
            user.findOne({ email: req.body.email }).then((person) => {
                if (person) {
                    return res.status(400).json({ email: "Email already exists!" });
                } else {
                    let newPerson = new user({
                        email: req.body.email,
                        password: req.body.password,
                    });

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newPerson.password, salt, (err, hash) => {
                            if (err) throw err;
                            newPerson.password = hash;
                            newPerson
                                .save()
                                .then((ress) => { 
                                    console.log("RESPONSE AFTER SAVING DATA INJ DB" , ress)
                                    const payload = {

                                        id: ress._id,
                                        email: ress.email,
                                                    };
                                    jwt.sign(payload, 'mysecrettoken', (err, token) => {
                                    if (token) {
                                        
                                        arr.type = "User";
                                        arr.token = token;
                                        console.log("before sending response jwt in backend",arr)
                                        return res.send(arr);

                                             }
                                });
                            })
                                .catch((err) => console.log(err,));
                        });
                    });
                }
            });
        } catch (err) {
            console.error(err.message); 
            res.status(500).send("Server error");
        }
    }




module.exports.employinfo = async (req,res,next) => {
    console.log(req.body,"ddd")
    console.log("r")
    
        let user1 = new employinfo({
            name: req.body.name,
            address: req.body.address,
            id: req.body.id,
            height: req.body.height,
            weight: req.body.weight,
            birthday: req.body.birthday,
            issuedate: req.body.issuedate,
            expiry: req.body.expiry,

        });
    
        user1.save().then((res1)=>{
            console.log(res1)
            res.send("employ info saved")
        })
    }