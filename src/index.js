const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
// link for express docs: http://expressjs.com/pt-br/api.html#req.body

/*
Elementos para cadastro de usuario
uid - id
name string
cpf string
statement []
*/

app.post('/account', (req, res) => {
  const { cpf, name, statement } = req.body;
  

  return res.json([
    'JavaScript',
  ])
});




const PORT = 3000;

app.listen(PORT, console.log(`ouvindo na porta ${PORT}`));
