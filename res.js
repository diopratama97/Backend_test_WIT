'use strict';

exports.ok = (datas,res) => {
    let data = {
        'status': 200,
        'data': datas
    };
     res.json(data);
     res.end();
}

exports.notFound = (datas,res) => {
    let data = {
        'status': 404,
        "data": datas
    };
    res.json(data);
    res.end();
}

exports.err = (datas,res) =>{
    let data = {
        'status': 500,
        'message': 'Internal Server Error',
        'error': datas
    };
     res.json(data);
     res.end();
}

exports.duplikat = (datas,res) =>{
    let data = {
        'status': 409,
        'message': datas
    };
     res.json(data);
     res.end();
}

exports.errLogin = (datas,res) =>{
    let data = {
        'status': 404,
        'message': datas
    };
     res.json(data);
     res.end();
}

exports.Login = (token,id,res) =>{
    let data = {
        'status': 200,
        'message': 'Login Berhasil',
        'token': token,
        'userId': id
    };
     res.json(data);
     res.end();
}