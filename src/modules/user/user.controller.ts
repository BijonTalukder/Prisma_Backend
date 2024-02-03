import { Request, Response } from "express"
import { UserService } from "./user.service"

const insertIntoDb = async (req:Request,res:Response)=>{
    try {
        const result = await UserService.insertIntoDb(req.body)
res.send({success:true,message:'user create successfully',data:result})
    } catch (error) {
res.send(error)
    }
}

const inserOrUpdateProfile = async(req:Request,res:Response)=>{
    try {
        const result = await UserService.insertOrUpdateProfile(req.body)
        res.send({success:true,message:'user profile created or updated successfully',data:result})

    } catch (error) {
        res.send(error)

    }
}

const getUser =async (req:Request,res:Response) => {
    try {
        const result = await UserService.getUser()
        res.send({success:true,message:'user get successfully',data:result})

        
    } catch (error) {
        res.send(error)
        
    }
    
}

const geSingletUser =async (req:Request,res:Response) => {
    try {
        const result = await UserService.getSingleUser(Number(req.params.id));
        res.send({success:true,message:'Single user get successfully',data:result})

        
    } catch (error) {
        res.send(error)
        
    }
    
}
export const UserController = {
    insertIntoDb,
    inserOrUpdateProfile,
    getUser,
    geSingletUser
}