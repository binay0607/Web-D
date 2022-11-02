import express from "express";
import { deleteBlog, getAllBlogs, getByUserId, updateBlog } from "../controllers/blog-controller";
import { addBlog, getById } from "../controllers/blog-controller";

const blogrouter= express.Router();

blogrouter.get("/",getAllBlogs);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id",updateBlog);
blogrouter.get("/user/:id", getByUserId)
blogrouter.get("/:id", getById);
blogrouter.delete("/:id", deleteBlog);
export default blogrouter;