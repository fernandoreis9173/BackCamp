import { Router } from "express";
const router = Router()

router.get('/', (request, response) =>{
    response.status(200).json({mesage: '...Deu certo a rota'})
})

export default router;