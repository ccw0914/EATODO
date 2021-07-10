'use strict';

var todos = [];

exports.clear = () => {
    todos = [];
    return {'code': 201, 'body': 'Request success'};
}

exports.getAll = () => {
    return todos;
}

exports.add = (body) => {        
    var atask = (JSON.parse(body)).name;    

    if (todos.indexOf(atask)!=-1)
        return {'code': 403, 'body': 'Item Duplicated'};

    todos.push(atask);
    return {'code': 201, 'body': 'Success new item '};
}

exports.remove = () => {    
    if(todos.length>0){
        todos.pop();
        return {'code': 201, 'body': 'Success Remove Item'};
    }
    return {'code': 409, 'body': 'No item in the list'};
}

exports.count = () => {
    return todos.length;
}

