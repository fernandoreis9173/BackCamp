import express from 'express';
import router from './routes/index';
const app = express();

app.use(express.json());
app.use('/index',router);

app.listen(3333, ()=>{
  console.log('Server runing on port 3333'); 
})