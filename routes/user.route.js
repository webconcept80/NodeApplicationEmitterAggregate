const express = require('express');
const userRoute = express.Router();

let Users = require('../models/User');
const User = require('../models/User');

userRoute.route('/users').get((req, res, next) => {
    Users.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

userRoute.route('/user').post((req, res, next) => {
    Users.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

//update record

userRoute.route('/user/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    )
});

//delete record

userRoute.route('/user/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

//User Count

userRoute.route('/user/count').get((req, res, next) => {
    User.aggregate([
        {
            $group: {
                _id: 1,
                count: {
                    $sum: 1
                }
            }
        },
    ],
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

module.exports = userRoute;