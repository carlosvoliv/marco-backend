const cursosController = require('../../controllers/curso.controler')

module.exports = (router) => {

  router.route('/curso')
    .get(
      cursosController.getAllCursos
    )

  router.route('/curso/:idcurso')
    .get(
      cursosController.getCursoById
    )
}