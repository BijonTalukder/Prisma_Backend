import { Post, Prisma, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const createPost = async(data:Post)=>{
    const result = await prisma.post.create({data});
    return result;

}

const getPost = async (options:any)=>{
    const {sortBy,sortOrder,searchTerm,page,limit} = options;
    const skip = parseInt(limit)* parseInt(page)-parseInt(limit);
    
    const take = parseInt(limit)
    const result = await prisma.post.findMany(
        {
            skip,
            take
            include:{
                author:true,
                category:true
            },
            orderBy: sortBy && sortOrder?{
                
                [sortBy]:sortOrder
            }:{
                createdAt:'desc'
            },
            where:{
                OR:[
                    {
                        title:{
                            contains:searchTerm,
                            mode:'insensitive'
                        }
                    },{
                        author:{
                            name:{
                                contains:searchTerm,
                            mode:'insensitive'
                            }
                        }
                    }
                ]
               
            }

        },
        
    );
    return result

}
const getSinglePost = async (id:Number) =>{
    const result = await prisma.post.findUnique({
id
    })
}
export const PostService ={
    createPost,
    getPost,
    getSinglePost
}