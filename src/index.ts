import { PrismaClient } from "@prisma/client";
import express, { Application } from 'express'
import cors from 'cors'
import app from "./app";


// const app:Application = express()

// app.use(express.json())
// app.use(cors())
// app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 5000
const prisma = new PrismaClient();
async function main() {
    // const getAllUsers = await prisma.User.findMany()
    // console.log(getAllUsers)

//     const postUser = await prisma.User.create({data:
//         {
//             email:"bijon@gmail.com",
// name:"bijon"
// }})

app.listen(port ,()=>{
    console.log(
        'server start at ',port
    );

})

}
main();