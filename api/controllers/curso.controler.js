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
    // attributes: ['name', 'coordinator', 'start_date'],
    where: {
      id: req.params.idcurso
    }
  }).then((result) => {

    console.log(result);
    res.status(200).send({
      id: result.id,
      name: result.name,
      coordinator: result.coordinator,
      start_date: result.start_date
    })
  })
  
  
}

module.exports = {
  getAllCursos,
  getCursoById
}