const userCtrl = {};

const User = require("../models/User")

userCtrl.renderSingUpForm = (req, res) => {
    res.render("users/singup");
}

userCtrl.singup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body

    if (password != confirm_password) {
        errors.push({ text: "Password do not match" });
    }
    if (password.length < 4) {
        errors.push({ text: "Passwords must be at least 4 characters" });
    }
    if (errors.length > 0) {
        res.render("users/singup", {
            errors,
            name,
            email
        })
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash("error_msg", "The email is already in use.");
            res.redirect("/users/singup");
        } else {
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encrypPassword(password)
            await newUser.save();
            req.flash("success_msg", "You are registered");
            res.redirect("/users/singin");
        }
    }
};



userCtrl.renderSinginForm = (req, res) => {
    res.render("users/singin");
}


userCtrl.singin = (req, res) => {
    res.send("SingIn");
}


userCtrl.logout = (req, res) => {
    res.send("Logout");
}

module.exports = userCtrl;