import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDb =async (data:any) => {
    const result = await prisma.category.create({data})
    return result
}
const getCategory =async () => {
    const result = await prisma.category.findMany()
    return result
    
}
export const CategoryService = {
    insertIntoDb,
    getCategory
}