const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());
app.use(express.json());



app.post('/dados',(req,res)=>{
  const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'leandro_bd3',
    password: 'Leandro171716',
    database: 'leiloes'
  });

  connection.connect(() => {
    connection.query('INSERT INTO leilao (nome,descricao) VALUES (?,?)', [req.body.nome,req.body.descricao], (err,result) => {
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
      host: 'db4free.net',
      user: 'leandro_bd3',
      password: 'Leandro171716',
      database: 'leiloes'
      });
      
      connection.connect(() => {
        connection.query('SELECT * FROM leilao', (err,result) => {
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