const userCtrl = {};

userCtrl.renderSingUpForm = (req, res) => {
    res.render("users/singup");
}

userCtrl.singup = (req, res) => {
    res.send("SingUp");
}



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