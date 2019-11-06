var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let Product = require('../model/Product');

router.get('/products', (req, res, next) => {
    Product.find({},(err, data) => {
        if(err){
            res.json({
                data: {},
                mes: `Error . ${err}`
            });
        }
        else{
            res.json({
                data: data,
                mes: 'Successfully!'
            });
        }
    });
});

router.get('/product/:product_id', (req, res, next) => {
    Product.findById(req.params.product_id, (err, data) => {
        if(err){
            res.json({
                data: {},
                mes: `Error . ${err}`
            });
        }
        else{
            res.json({
                data: data,
                mes: 'Successfully!'
            });
        }
    });
});

router.post('/products', (req, res, next) => {
    req.checkBody('title', 'Enter a valid email address').isEmail();
    var errors = req.validationErrors();

    if(errors){
        res.send(errors);
    }
    else{
        var p = new Product();
        p.title = req.body.title;
        p.price = req.body.price;
        p.instock = req.body.instock;
        p.photo = req.body.photo;
        p.save((err, data) => {
            if(err) {
                res.json({
                    data: {},
                    mes: `Error . ${err}`
                });
            }
            else{
                res.json({
                    data: data,
                    mes: 'Successfuly'
                });
            }
        });
    }
    
});

//update
router.put('/product/:product_id', (req, res, next) => {
    Product.findById(req.params.product_id, (err, data) => {
        if(err) {
            res.json({
                data: {},
                mes: `Error . ${err}`
            });
        }
        else{
            data.title =  req.body.title;
            data.price =  req.body.price;
            data.instock =  req.body.instock;
            data.photo =  req.body.photo;
            data.save((err, data) => {
                if(err){
                    res.json({
                        data: {},
                        mes: `Error . ${err}`
                    });
                }
                else{
                    res.json({
                        data: data,
                        mes: 'Successfuly'
                    });
                }
            });                 

            
        }
    });
});

router.delete('/product/:product_id', (req, res, next) => {
    Product.remove({ _id : req.params.product_id}, (err) => { 
        if(err){
            res.json({
               
                mes: `Error . ${err}`
            });
        }
        else{
            res.json({
               
                mes: 'Successfuly'
            });
        }
    });
});
module.exports = router;