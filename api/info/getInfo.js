const Info = require('../models/info.js');

function getInfo(req, res) {
  Info.find()
    .then(info => {
      res.status(200).json(info)
    })
    .catch(err => {
      res.json({
        error: err
      })
    })

}

module.exports = getInfo;
