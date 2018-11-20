import orders from "../my_data/data";

class usersController{
     // GET/ User login
  static login(req, res) {
    res.status(200).json({
      response_message: "Login"
    });
  }

  // POST/ Create Account
  static createAccount(req, res) {
    res.status(200).json({
      response_message: "Account created"
    });
  }

  // GET/ User Profile
  static userProfile(req, res) {
    res.status(200).json({
      response_message: "User_Profile found"
    });
  }

  //GET/ A specific user fetch an order
  static fetchOrder(req, res) {
    res.status(200).json({
      response_message: "Order found"
    });
  }
  
}

export default usersController;