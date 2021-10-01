'use strict';

const verification = require('../middleware/verification');

module.exports = (app) => {
    let home = require('../controller/index');
    let product = require('../controller/test-crud');

    app.route('/')
        .get(home.index);

    //product
    app.route('/api/Product')
        .get(product.getAllproduct);
    app.route('/api/countProduct')
        .get(product.getCountProduct);
    app.route('/api/validationPassword')
        .post(product.passValidation);
    app.route('/api/Product/:id')
        .get(product.getOneproduct);
    app.route('/api/Product')
        .post(product.addproduct);
    app.route('/api/Product/:id')
        .put(product.updateproduct);
    app.route('/api/Product/:id')
        .delete(product.deleteproduct);
}