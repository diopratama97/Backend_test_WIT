'use strict';

let response = require('../res');
let knex = require('../db/conn');
const { v4: uuidv4 } = require('uuid');
const {delproduct,getOne,insertproduct,updateproduct, passwordValidation} = require('../helper/validation');

//get all 
exports.getAllproduct = async (req,res) => {
    try {
        let allproduct = await knex('product').select('*');
        response.ok(allproduct,res);
    } catch (error) {
        response.err(error,res);
    }
}

//get one
exports.getOneproduct = async (req,res) => {
    try {
        const {id} = await getOne.validateAsync(req.params);
        let getOneproduct = await knex('product').select('*').where('id_product',id).first();
        (!getOneproduct) ? response.notFound('DATA NOT FOUND',res) : response.ok(getOneproduct,res);
    } catch (error) {
        response.err(error,res);
    }
}

//post data
exports.addproduct = async (req,res) => {
    try {
        const {name_product,price_product} = await insertproduct.validateAsync(req.body);
        const insert = {
            id_product:uuidv4(),
            name_product: name_product,
            price_product: price_product
        }
        const exe = await knex('product').insert(insert);
        if (exe) {response.ok('INSERT SUCCESS',res);}
    } catch (error) {
        response.err(error,res);
    }
}

//update data 
exports.updateproduct = async (req,res) => {
    try {
        const {id} = await getOne.validateAsync(req.params);
        const {name_product,price_product} = await updateproduct.validateAsync(req.body);

        const update = {
            name_product: name_product,
            price_product: price_product
        }
        const searchId = await knex('product').select('id_product').where('id_product',id).first();
        if (!searchId) {
            response.notFound('DATA NOT FOUND',res);
        }else{
            const exe = await knex('product').update(update).where('id_product',id);
            if (exe) {response.ok('UPDATE SUCCESS',res);}
        }
    } catch (error) {
        response.err(error,res);
    }
}

exports.deleteproduct = async (req,res) => {
    try {
        const {id} = await delproduct.validateAsync(req.params);
        const searchId = await knex('product').select('id_product').where('id_product',id).first();
        if (!searchId) {
            response.notFound('DATA NOT FOUND',res);
        }else{
            const deleteproduct = await knex('product').where('id_product',id).del();
            if (deleteproduct) {response.ok('DELETE SUCCESS',res);}
        }
    } catch (error) {
        response.err(error,res);
    }
}

exports.getCountProduct = async (req,res) => {
    try {
        const countProduct = await knex('product').count('id_product as total')
        .where('price_product','>',80000).first();

        const getProduct = await knex('product').select('*')
        .where('price_product','>',80000);
        countProduct.data=getProduct;

        response.ok(countProduct,res);
    } catch (error) {
        response.err(error,res);
    }
}

exports.passValidation = async (req,res) => {
    try {
        const {password} = await passwordValidation.validateAsync(req.body);
        response.ok('VALIDATION SUCCESS',res);
    } catch (error) {
        response.err(error,res)
    }
}
