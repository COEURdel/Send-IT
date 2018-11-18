import orders from "../my_data/data";

class ordersController {

// GET /All orders
  static getAllOrders(req, res) {
    return res.json({
      Parcel_Title: "View All orders",
      Parcel_orders: orders
    });
  }

// POST/ Create order
  static createOrder(req, res) {
    const Id = parseInt(orders.length) + 1;
    const { ParcelName, description, location } = req.body;
    const newOrder = {
      Id,
      ParcelName,
      description,
      location,
    };
    orders.push(newOrder);
    return res.status(200).json({
      status_response: "An Order was created",
      Parcel_orders: orders
    });
  }

// GET/ Retrieve a specific order
  static getOneOrder(req, res) {
    const { id } = req.params;
    const order = orders.find(oneOrder => oneOrder.id == id);
    if (order) {
      return res.status(200).json({
        status_response: "An order was found",
        oneOrder: order
      });
    } else {
      res.status(400).json({
        error_message: "no order found corresponding to that ID"
      });
    }
  }

// PUT/ Update Order
  static updateOrder(req, res) {
    const { id } = req.params;
    const order = orders.find(updateOrder => updateOrder.id == id);
    if (order) {
      (order.title = req.body.title), (order.body = req.body.body);
      return res.status(200).json({
        status_response: "successfully updated",
        updateOrder: order
      });
    } else {
      res.status(400).json({
        error_message: "order cannot be updated"
      });
    }
  }

// DELETE/ Cancel an Order
  static deleteOrder(req, res) {
    let Id = req.params.id;
    const findOrder = orders.find(order => {
      return order.id == Id;
    });
    if (findOrder) {
      const newOrders = orders.filter(post => {
        return order !== findOrder;
      });
      res.status(200).json({
        status_response: "Order deleted",
        orders: newOrders
      });
    } else {
      res.status(400).json({
        error_message: "Cannot delete an order"
      });
    }
  }

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

  // GET/ Admin's Panel
  static adminPanel(req, res) {
      res.status(404).json({
        error_message: "panel not found"
      });
    }
}
export default ordersController;