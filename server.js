const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(app, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
