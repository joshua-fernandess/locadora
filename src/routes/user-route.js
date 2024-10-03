import { Router } from "express";
import {
  signup,
  login,
} from "../controllers/user-controller.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"
import via_cep from "../middleware/via_cep.js"

const router = Router();

router.post("/signup", viaCep, signup);
router.post("/login", login);

export default router;
