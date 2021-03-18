const db = require('../models/index');


const getAllCursos = (req, res) => {

  const result = db.curso.findAll({})
  .then((dataFromDb) => {

    res.status(200).send(dataFromDb.map((item) => {

      return {
        id: item.id,
        name: item.name,
        coordinator: item.coordinator
      }

    }));

    // res.status(200).send([
    //   {
    //     id: 1,
    //     name: 'teste mockeado'
    //   }
  // ])
    
  })  
}

const getCursoById = (req, res) => {

  console.log(req.params);

  db.curso.findOne({
    attributes: ['name', 'coordinator', 'status'],
    where: {
      id: req.params.idcurso
    }
  }).then((result) => {
    res.status(200).send({result})
  })
  
  
}

module.exports = {
  getAllCursos,
  getCursoById
}