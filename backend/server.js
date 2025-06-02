const app = require('./app');
const knex = require('./config/knex');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  knex().cre
});
