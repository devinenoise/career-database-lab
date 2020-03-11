const fs = require('fs').promises;

const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj));
};

const readJSON = (path, obj) => {
  return fs.readFile(JSON.parse(obj));
};

const updateJSON = (path, obj) => {
  return fs.readFile(path, JSON.parse(obj))
    .then(obj => fs.writeFile(path, JSON.stringify(obj))
    );
};


module.exports = {
  writeJSON,
  readJSON,
  updateJSON
};