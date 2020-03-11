const fs = require('fs').promises;

const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj));
};

const readJSON = (path) => {
  return fs.readFile(path)
    .then(obj => JSON.parse(obj));
};

const mkdirp = (path) => {
  return fs.mkdir(path, { recursive: true });
};

const updateJSON = (path, obj) => {
  return fs.readFile(path, JSON.parse(obj))
    .then(obj => fs.writeFile(path, JSON.stringify(obj))
    );
};

const deleteFile = (path) => {
  const json = readJSON(path)
    .then(fs.unlink(path));
  return json;
};

const readDirectoryJSON = (path) => {
  return fs.readdir(path)
    .then(files => Promise.all(files.map(file => readJSON(`${path}/${file}`))));
};

module.exports = {
  writeJSON,
  readJSON,
  updateJSON,
  mkdirp,
  deleteFile,
  readDirectoryJSON
};