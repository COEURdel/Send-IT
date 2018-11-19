import express from "express";
import ordercontrollers from "../controllers/ordercontroller";
import usercontroller from "../controllers/usercontroller";
import admincontroller from "../controllers/admincontroller";

const router = express.Router();

router.get("/api/v1/parcels", ordercontrollers.getAllOrders);
router.post("/api/v1/parcels", ordercontrollers.createOrder);
router.get("/api/v1/parcels/:id", ordercontrollers.getOneOrder);
router.put("/api/v1/parcels/:id", ordercontrollers.updateOrder);
router.delete("/api/v1/parcels/:id", ordercontrollers.deleteOrder);
router.get("/api/v1/signin/:id", usercontroller.login);
router.post("/api/v1/signup", usercontroller.createAccount);
router.get("/api/v1/dashboard/:id", usercontroller.userProfile);
router.get("/api/v1/admin", admincontroller.adminPanel);

export default router;