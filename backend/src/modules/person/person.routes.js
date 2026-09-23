import express from "express";

import {
  createPerson,
  getPersons,
  getPersonById,
  updatePerson,
  deletePerson,
} from "./person.controller.js";
import { searchPersons } from "./person.repo.js";

const router = express.Router();

router.post(
  "/",
  createPerson
);

router.get(
  "/",
  getPersons
);

router.get(
  "/:personId",
  getPersonById
);

router.patch(
  "/:personId",
  updatePerson
);

router.delete(
  "/:personId",
  deletePerson
);

router.get(
  "/search",
  searchPersons
);

export default router;