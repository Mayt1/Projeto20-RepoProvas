import { Router } from "express";

import userRouter from "./authRouter.js";
import schoolRouter from "./schoolRouter.js";

const router = Router();

router.use(userRouter);
router.use(schoolRouter);


export default router;
