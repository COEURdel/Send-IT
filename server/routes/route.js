import express from "express";
import controllers from "../controllers/controller";

const router = express.Router();

router.get("/api/v1/parcels", controllers.getAllOrders);
router.get("/api/v1/signin/:id", controllers.login);
router.post("/api/v1/signUp", controllers.createAccount);
router.get("/api/v1/dashboard/:id", controllers.userProfile);
router.get("/api/v1/Admin", controllers.adminPanel);
router.post("/api/v1/parcels", controllers.createOrder);
router.get("/api/v1/parcels/:id", controllers.getOneOrder);
router.put("/api/v1/parcels/:id", controllers.updateOrder);
router.delete("/api/v1/parcels/:id", controllers.deleteOrder);

export default router;