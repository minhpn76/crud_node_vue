var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema= new Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    instock: {
        type: Boolean
    },
    photo: {
        type: String
    }
});

module.exports = mongoose.model('Product', ProductSchema)