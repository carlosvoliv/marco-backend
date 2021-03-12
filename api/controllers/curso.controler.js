
const getAllCursos = (req, res, next) => {

  res.status(200).send([
    {
      id: 356,
      name: 'teste mockeado'
    }
  ])
}

module.exports = {
  getAllCursos
}