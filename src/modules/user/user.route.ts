import  express  from "express";
import { UserController } from "./user.controller";


const router = express.Router();
router.post('/create-user',UserController.insertIntoDb)

router.post('/profile',UserController.inserOrUpdateProfile)
router.get('/',UserController.getUser)
router.get('/get-single/:id',UserController.geSingletUser)
export const UserRouter = router