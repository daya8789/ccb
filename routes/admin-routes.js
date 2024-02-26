import express from 'express';
import { adminController } from "../controllers/admin-controller.js";

export const adminRoutes = express.Router();
adminRoutes.get("/profile", adminController.profile);
adminRoutes.post("/register", adminController.register);
adminRoutes.post("/login", adminController.login);
// adminRoutes.put("/change-password");
// adminRoutes.delete("/remove-account");
