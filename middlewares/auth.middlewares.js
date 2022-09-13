var bcrypt = require("bcrypt");
const User = require('./../models/user.js')

exports.createUser = (req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err, user) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        else{
            console.log('user creation success');
            req.userId = user._id
            req.userEmail = user.email
            next()
        }
    });
};

exports.checkPassword = (req, res, next)=>{
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            res.status(500).json({ message: err });
            return;
        }
        if (!user) {
            console.log('user with given email not found!!!');
            return res.status(404).json({ message: "User Not found." });
        }

        //comparing passwords
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Invalid Password!" });
        }
        req.userId = user._id
        req.userEmail = user.email
        next();
    });
};

exports.check_duplicate_email = function(req, res, next){
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) return res.status(500).json({ message: err });
        else if (user) return res.status(409).json({ message: "Failed! Email is already in use!" });
        else {
            console.log('no duplicate email');
            next();
        }
    });
};