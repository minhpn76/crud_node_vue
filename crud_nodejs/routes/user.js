var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let User = require('../model/User');

router.get('/users', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    User.find({}, (err, data) => {
        if(err) {
            res.json({
                data: {},
                mes: `Error . ${err}`
            });
            // throw err
        }
        else{
            res.json({
                data: data,
                mes: 'Successfully!'
                
            })
            // res.send(data );
        }
    });
});

router.get('/user/:user_id', (req, res, next) => {
    User.findById( req.params.user_id, (err, data) => {
        if(err) {
            res.json({
                data: {},
                mes: `Error . ${err}`
            });
            // throw err
        }
        else{
            res.json({
                data: data,
                mes: 'Successfully!'
            })
            // res.send(data)
        }
    })
});

router.post('/users', (req, res, next) => {
    
    // req.checkBody('email', 'Enter a valid email address').isEmail().isNumeric();
    // req.checkBody('phone', 'EPhia la so').isNumeric();
    
    // var errors = req.validationErrors();
    
    // if(errors){
    //     res.send(errors);
    // }
    
        var user = new User();
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.phone = req.body.phone;
        user.email = req.body.email;
        user.address = req.body.address;
        user.city = req.body.city;
        user.state = req.body.state;
    
        user.save( (err, data) => {
            if(err){
                res.json({
                    data: {},
                    mes: `Error . ${err}`
                });
                // throw err
            }
            else{
                res.json({
                    data: data,
                    mes: 'Successfully!'
                })
                // res.send(data)
            }
        })
  
   
    
});

router.put('/user/:user_id', (req, res, next) => {
    User.findById( req.params.user_id, (err, data) => {
        if(err){
            res.json({
                data: {},
                mes: `Error . ${err}`
            });
            // throw err
        }
        else{
            data.first_name = req.body.first_name;
            data.last_name = req.body.last_name;
            data.phone = req.body.phone;
            data.email = req.body.email;
            data.address = req.body.address;
            data.city = req.body.city;
            data.state = req.body.state;

            data.save( (err, data) =>  {
                if(err){
                    res.json({
                        data: {},
                        mes: `Error . ${err}`
                    });
                    // throw err
                }
                else{
                    res.json({
                        data: data,
                        mes: 'Successfully!'
                    })
                    // res.send(data)
                }
            })
        }
    });
});

router.delete('/user/:user_id', (req, res, next) => {
    User.remove( {_id: req.params.user_id}, (err) => {
        if(err){
            res.json({
               
                mes: `Error . ${err}`
            });
            // throw err
        }
        else{
            res.json({
               
                mes: 'Successfully!'
            })
            // res.send('Successfully')
        }
    });
});

module.exports = router;
