var bcrypt = require("bcrypt");
var users = [];

exports.createUser = (req, res, next) => {
    console.log(req.body);
    console.log(req.body.email + 'is signing up...');
    users.push({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    next();
};

exports.checkPassword = (req, res, next) => {
    console.log('checking password');
    const userFound = users.filter(user => user.email === req.body.email)
    console.log(userFound);
    if(userFound.length === 0) res.status(401).json({ message: "no user found" });
    if(userFound.length === 1) {

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            userFound[0].password
        );
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Invalid Password!" });
        }
        next();
    }
};