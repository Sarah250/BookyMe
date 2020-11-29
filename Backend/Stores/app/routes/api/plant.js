const express = require('express');
const app = express.Router();
const Plants = require('../../controllers/plants');
const Response = require('rapid-status');
const fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.get('/store/:storeID', async (req,res) =>{
    let response;
    Plants.getPlant(req.params.storeID)
        .then(data => {
            response = Response.OK(data);
            res.status(response.status).jsonp(response);
        }).catch(err => {
            response = Response.INTERNAL_ERROR(err, 'Could not fetch store Plant');
            res.status(response.status).jsonp(response);
    });
})

app.post('/:storeID', upload.single('plant'), async (req,res) => {

    
    let oldPath = __dirname + '/../../../' + req.file.path
    let newPath = __dirname + '/../../public/plants/' + req.params.storeID + req.file.originalname 

    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
    })


    const plant = {
        storeID: req.params.storeID,
        title: req.body.title,
        script: req.body.script,
        url: newPath
    }

    Plants.insertPlant(plant)
    .then(data => {
        response = Response.CREATED(data);
        res.status(response.status).jsonp(response);
    }).catch(err => {
        response = Response.INTERNAL_ERROR(err);
        res.status(response.status).jsonp(response);
    });
})

app.delete('/store/:storeID', async (req, res) => {

    
    let response;
    Plants.removeStorePlant(req.params.storeID)
        .then(data => {
            response = Response.OK(data);
            res.status(response.status).jsonp(response);
        }).catch(err => {
            response = Response.INTERNAL_ERROR(err, 'Could not fetch store catalog');
            res.status(response.status).jsonp(response);
    });


});

// var dir = __dirname + '/../data/profiles/' + req.params.ficheiro;
 // res.sendFile(path.resolve(dir));

module.exports = app;