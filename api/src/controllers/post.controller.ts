import { Request, Response } from "express";

import PostModel from "../models/post.model";

/**
 * Retrieves posts using offset pagination.
 * Query Parameters:
 *  - page (optional): The page number to retrieve. Defaults to 1 if not specified.
 *  - limit (optional): The number of posts to return per page. Defaults to 10 if not specified.
 */
export const getPostsByOffset = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string);

  try {
    // Validate page and limit to ensure they are numbers greater than 0
    if (!Number.isInteger(page) || page <= 0) {
      throw new Error("Page must be a whole number greater than 0.");
    }

    if (!Number.isInteger(limit) || limit <= 0) {
      throw new Error("Limit must be a whole number greater than 0.");
    }

    const posts = await PostModel.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const count = await PostModel.countDocuments();

    return res.send({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
