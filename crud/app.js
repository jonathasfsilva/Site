const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rota inicial - Lista de usuários
app.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, rows) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      res.status(500).send('Erro ao buscar usuários');
      return;
    }
    res.render('index', { usuarios: rows });
  });
});

// Rota para exibir o formulário de edição de usuário
app.get('/edit/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM usuarios WHERE id = ?', userId, (err, row) => {
    if (err || !row.length) {
      console.error('Erro ao buscar usuário:', err);
      res.status(404).send('Usuário não encontrado');
      return;
    }
    res.render('edit', { usuario: row[0] });
  });
});

// Rota para editar um usuário
app.post('/edit/:id', (req, res) => {
  const { nome, email } = req.body;
  const userId = req.params.id;
  db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, userId], (err) => {
    if (err) {
      console.error('Erro ao editar usuário:', err);
      res.status(500).send('Erro ao editar usuário');
      return;
    }
    res.redirect('/');
  });
});

// Rota para deletar um usuário
app.get('/delete/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM usuarios WHERE id = ?', userId, (err) => {
    if (err) {
      console.error('Erro ao deletar usuário:', err);
      res.status(500).send('Erro ao deletar usuário');
      return;
    }
    res.redirect('/');
  });
});

// Rota para adicionar um novo usuário
app.post('/add', (req, res) => {
  const { nome, email } = req.body;
  db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err) => {
    if (err) {
      console.error('Erro ao adicionar usuário:', err);
      res.status(500).send('Erro ao adicionar usuário');
      return;
    }
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
