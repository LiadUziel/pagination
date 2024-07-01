import { Router } from "express";

import {
  getPostsByCursor,
  getPostsByOffset,
} from "../controllers/post.controller";

const router = Router();

// GET /offset - Retrieves posts using offset pagination.
// Query Parameters:
//  - page (optional): Specifies the page number in the pagination sequence. Default is 1.
//  - limit (optional): Specifies the number of posts to return per page. Default is 10.
router.get("/offset", getPostsByOffset);

// GET /cursor - Retrieves posts using cursor-based pagination for infinite scrolling.
// Query Parameters:
//  - cursor (optional): The cursor that points to the start of the data to fetch. Defaults to fetching from the start.
//  - limit (optional): Specifies the number of posts to return. Default is 10.
router.get("/cursor", getPostsByCursor);

export default router;
