import { PrismaClient,User } from "@prisma/client"

const prisma = new PrismaClient()
const insertIntoDb = async(data:User):Promise<any>=>{
const result = await prisma.user.create({data})
return result
}


const insertOrUpdateProfile = async(data)=>{
    const isExist = await prisma.profile.findUnique({where:{userId:data.userId}})
    if(isExist){
        const result = await prisma.profile.update({where:{userId:data.userId},data:{bio:data.bio}})
        return result
    }
    const result = await prisma.profile.create({data})
    return result
}

export const UserService = {
    insertIntoDb,
    insertOrUpdateProfile
}