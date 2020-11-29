const express = require('express');
const app = express.Router();
const Reviews = require('../../controllers/reviews');
const Response = require('rapid-status');



app.get('/store/:storeID', async (req, res) => {

    
    let response;
    Reviews.getReview(req.params.storeID)
        .then(data => {
            response = Response.OK(data);
            res.status(response.status).jsonp(response);
        }).catch(err => {
            response = Response.INTERNAL_ERROR(err, 'Could not fetch store catalog');
            res.status(response.status).jsonp(response);
    });


});

app.post('/:storeID', (req, res) => {
    let response;

    let data = new Date()

    const review = {
        storeID: req.params.storeID,
        username: req.body.username,
        comment: req.body.comment,
        date: data.toISOString()
    }


    Reviews.insertReview(review)
        .then(data => {
            response = Response.CREATED(data);
            res.status(response.status).jsonp(response);
        }).catch(err => {
            response = Response.INTERNAL_ERROR(err);
            res.status(response.status).jsonp(response);
        });
});

app.delete('/store/:storeID', async (req, res) => {

    
    let response;
    Reviews.removeStoreReviews(req.params.storeID)
        .then(data => {
            response = Response.OK(data);
            res.status(response.status).jsonp(response);
        }).catch(err => {
            response = Response.INTERNAL_ERROR(err, 'Could not fetch store catalog');
            res.status(response.status).jsonp(response);
    });


});

app.delete('/:id', async (req, res) => {

    
    let response;
    Reviews.removeReview(req.params.id)
        .then(data => {
            response = Response.OK(data);
            res.status(response.status).jsonp(response);
        }).catch(err => {
            response = Response.INTERNAL_ERROR(err, 'Could not fetch store catalog');
            res.status(response.status).jsonp(response);
    });


});


module.exports = app;