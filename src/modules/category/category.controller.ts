import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDb =async (req:Request,res:Response) => {
    try {
        const result = await CategoryService.insertIntoDb(req.body)
        res.send({
            success:true,
            message:"category created"
            ,data:result
        })
        
    } catch (error) {
        res.send(error)
        
    }
    
}
const getCategory  =async (req:Request,res:Response) => {
    const result = await CategoryService.getCategory();
    res.send({
        success:true,
        message:"all category fetched",
        data:result
    })
    
}

export const CategoryController ={
    insertIntoDb,
    getCategory
}