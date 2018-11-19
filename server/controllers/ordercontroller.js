import orders from "../my_data/data";

class ordersController {

// GET /All orders
  static getAllOrders(req, res) {
    return res.json({
      orders: orders
    });
  }

// POST/ Create order
  static createOrder(req, res) {
    const id = parseInt(orders.length) + 1;
    const { ParcelName, description, location } = req.body;
    const newOrder = {
      id,
      ParcelName,
      description,
      location,
    };
    orders.push(newOrder);
    return res.status(200).json({
      Parcel_orders: orders
    });
  }

// GET/ Retrieve a specific order
  static getOneOrder(req, res) {
    const { id } = req.params;
    const order = orders.find(oneOrder => oneOrder.id == id);
    if (order) {
      return res.status(200).json({
        oneOrder: order
      });
    } else {
      res.status(400).json({
        error_message: "no such order"
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
        updateOrder: order
      });
    } else {
      res.status(400).json({
        error_message: "update not found"
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
        status_response: "Deleted",
        orders: newOrders
      });
    } else {
      res.status(400).json({
        error_message: "Cannot delete an order"
      });
    }
  }

}
export default ordersController;