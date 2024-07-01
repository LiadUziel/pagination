import { Router } from "express";

import { getPostsByOffset } from "../controllers/post.controller";

const router = Router();

// GET /offset - Retrieves posts using offset pagination.
// Query Parameters:
//  - page (optional): Specifies the page number in the pagination sequence. Default is 1.
//  - limit (optional): Specifies the number of posts to return per page. Default is 10.
router.get("/offset", getPostsByOffset);

export default router;
