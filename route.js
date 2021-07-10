'use strict';
/**API Routing **/
const todo = require('./todo');

/** get(route)This is Handling GET Request**/

exports.get = (route) => {
    switch(route){
        case "list":
            return {'code': 200, 'body': todo.getAll()};
        case "count":
            return {'code': 200, 'body': todo.count()}
        default:
            return {'code': 400, 'body': 'Bad Request'};
    }
}

/** put(route) This is Handling PUT Request **/
 
exports.put = (route) => {
    switch(route){
        case "remove":
            return todo.remove();
        default:
            return {'code': 400, 'body': 'Bad Request'};
    }
}

/** post(route, body) This is Handling POST Request (Create)**/

exports.post = (route, body) => {
    switch(route){
        case "add":           
            return todo.add(body);
            break;
        case "clear":
            return todo.clear();
        default:
            return {'code': 400, 'body': 'Bad Request'};
    }
}