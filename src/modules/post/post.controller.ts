import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req:Request,res:Response)=>{
    try {
        const result = await PostService.createPost(req.body);
        res.send({
            success:true,
            message:"post created"
            ,data:result
        })
    } catch (error) {
        res.send(error)
    }

}

const getPost = async(req:Request,res:Response)=>{
    
    const options = req.query
    try {
        const result = await PostService.getPost(options);
       
       
        res.send({
            success:true,
            message:"post created"
            ,data:result
        })
    } catch (error) {
        res.send(error)
    }
}

const getSinglePost = async (req:Request,res:Response)=>{
    try {
        let id = req.params.id;
        const result = await PostService.getSinglePost(Number(id))
        res.send({
            success:true,
            message:"fetch single post"
            ,data:result
        })
        
    } catch (error) {
        res.send(error)
    }
}

export const PostController = {
    createPost,
    getPost,
    getSinglePost
}