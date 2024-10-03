import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
} from "../controllers/movie-controller.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"

const router = Router();

router.post("/", check_token, check_role(["admin"]), store);
router.get("/", check_token, index);
router.get("/:id", check_token, show);
router.put("/:id", check_token, check_role(["admin"]), update);
router.delete("/:id", check_token, check_role(["admin"]), destroy);

export default router;