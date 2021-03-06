// const { Sequelize } = require("sequelize/types");

const config = require(__dirname + '/../../db/config.js');
const path = require('path')
const fs = require('fs');
const Sequelize = require('sequelize');

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelCurso = require('./curso');
db.curso = modelCurso(sequelize, Sequelize.DataTypes);

// fs 
//   .readdirSync(__dirname)
//   .filter(file => {
//     return(file.indexOf('.') !==0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

//   Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//       db[modelName].associate(db);
//     }
//   });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;