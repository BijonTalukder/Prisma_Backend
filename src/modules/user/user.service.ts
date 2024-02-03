import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const insertIntoDb = async(data:any):Promise<any>=>{
const result = await prisma.user.create({data})
return result
}


const insertOrUpdateProfile = async(data:any)=>{
    const isExist = await prisma.profile.findUnique({where:{userId:data.userId}})
    if(isExist){
        const result = await prisma.profile.update({where:{userId:data.userId},data:{bio:data.bio}})
        return result
    }
    const result = await prisma.profile.create({data})
    return result
}

const getUser = async ()=>{
    const user = await prisma.profile.findMany({
        // select:{
        //     email:true
        // }
        // include:{
        //     profile:true
        // }
    });
    return user;
}

const getSingleUser = async (id:Number)=>{

    const user = await prisma.profile.findUnique({
  where:{
    id
  },
  include:{
    profile:true
  }
    
    });
    return user;
}
export const UserService = {
    insertIntoDb,
    insertOrUpdateProfile,
    getUser,
    getSingleUser
}