import orders from "../my_data/data";

class adminController{

    // GET/ Admin's Panel
 static adminPanel(req, res) {
    res.status(404).json({
      error_message: "panel not found"
    });
  }
}

export default adminController;