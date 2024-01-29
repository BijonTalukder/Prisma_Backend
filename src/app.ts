import express,{ Application } from "express"
import cors from "cors"
import { UserRouter } from "./modules/user/user.route"
const app:Application = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("api/v1/user",UserRouter)
export default app