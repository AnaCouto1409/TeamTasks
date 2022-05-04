import https from 'https';
import fs from 'fs';
import app from '../TeamTasks/index'
const port = process.env.PORT || 3000;

app.listen(()=>{
    console.log(`Rodando na porta ${port}3000`);
})