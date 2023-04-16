import { Router } from "express";
import DollarController from "../controller/dolar.controller.js";

const router = Router();
const controller = new DollarController();

router.get("/", controller.getValues);
router.get("/lastupdate", controller.getLastUpdate);

export default router;
