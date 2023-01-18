import express from 'express';
import router from '../controllers/routers.js';

const router = express.Router()


router.get('/', (req, res) => {
    res.json("home page")
})

export default router