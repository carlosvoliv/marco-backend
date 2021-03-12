const express = require('express');
const app = express();
const cors = require('cors');
const router =require('./routes/router')

//TODO configurar o servidor

// :: permitir que o servidor interprete arquivos json
app.use(express.json());
// :: cors
app.use(cors());

router(app);


//TODO levantar o serviço
const port = 3001;

app.listen(port, () => {
  // console.log(`Server listening on port ${port}`)
});

module.exports = app