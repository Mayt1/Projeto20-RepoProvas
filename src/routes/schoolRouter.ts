import { Router } from "express";
import { findManyCategory, getDisciplinesByTerm, getTeacher } from "../controllers/schoolControllers.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";

const schoolRouter = Router();

schoolRouter.get("/categories", ensureAuthenticatedMiddleware, findManyCategory);
schoolRouter.get("/disciplines/:term", ensureAuthenticatedMiddleware, getDisciplinesByTerm);
schoolRouter.get("/teachers/:discipline",ensureAuthenticatedMiddleware, getTeacher);

export default schoolRouter;


