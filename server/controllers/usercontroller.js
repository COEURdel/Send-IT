import orders from "../my_data/data";

class usersController{
     // GET/ User login
  static login(req, res) {
    res.status(404).json({
      error_message: "Login page not found"
    });
  }

  // POST/ Create Account
  static createAccount(req, res) {
    res.status(404).json({
      error_message: "Account created not foud"
    });
  }

  // GET/ User Profile
  static userProfile(req, res) {
    res.status(404).json({
      error_message: "User_Profile not found"
    });
  }
}

export default usersController;