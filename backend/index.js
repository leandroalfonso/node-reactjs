const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());
app.use(express.json());



app.post('/dados',(req,res)=>{
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_leilao'
  });

  connection.connect(() => {
    connection.query('INSERT INTO leiloes (nome) VALUES (?)', [req.body.nome], (err,result) => {
      if (err) {
        console.error('Erro ao executar consulta:', err);
      }else{
        res.json(result);
        connection.end();
      }
    });
  });
}
    
);




app.get('/dados',(req,res)=>{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bd_leilao'
      });
      
      connection.connect(() => {
        connection.query('SELECT * FROM leiloes', (err,result) => {
          if (err) {
            console.error('Erro ao executar consulta:', err);
          }else{
            res.json(result);
            connection.end();
          }
        });
      });
});
app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000');
})