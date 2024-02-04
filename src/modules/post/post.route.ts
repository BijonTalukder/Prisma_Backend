import  express from 'express'
import { PostController } from './post.controller';
const router = express.Router()

router.post('/create-post',PostController.createPost);
router.get('/',PostController.getPost);
router.get('/:id',PostController.getSinglePost);

export const postRouter = router;