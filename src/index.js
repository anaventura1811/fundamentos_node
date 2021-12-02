const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
// link for express docs: http://expressjs.com/pt-br/api.html#req.body

//tentando subir o repo
app.get('/courses', (_req, res) => {
  return res.json([
    'JavaScript',
    'TypeScript',
    'RegEx',
    'Docker',
    'NodeJS',
    'React'
  ]);
});

app.post('/courses', (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json([
    'JavaScript',
    'TypeScript',
    'RegEx',
    'Docker',
    'NodeJS',
    'React',
    'C#'
  ])
});

app.put('/courses/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.json([
    'Fundamentos de JavaScript',
    'TypeScript',
    'RegEx',
    'Docker',
    'NodeJS',
    'React',
    'C#'
  ]);
});

app.patch('/courses/:id', (_req, res) => {
  return res.json([
    'Fundamentos de JavaScript',
    'TypeScript',
    'RegEx',
    'Docker',
    'NodeJS',
    'React',
    'C# e C++'
  ]);
});

app.delete('/courses/:id', (_req, res) => {
  return res.json([
    'Fundamentos de JavaScript',
    'TypeScript',
    'RegEx',
    'Docker',
    'NodeJS',
    'C# e C++'
  ]);
});

const PORT = 3000;

app.listen(PORT, console.log(`ouvindo na porta ${PORT}`));
