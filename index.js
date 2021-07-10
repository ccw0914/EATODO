'use strict';
const getRawBody = require('raw-body');
const routes = require('./route');

/**This is index.js**/

exports.handler = (req, resp, context) => {
    resp.setHeader('content-type', 'application/json');
    var uri = (req.url).split('/');
    if(uri.length == 0) {
        resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}));
    } else {
        var route = uri[uri.length-1];
        switch(req.method) {
            case "GET": 
                resp.send(JSON.stringify(routes.get(route)));
                break;
            case "POST":
                getRawBody(req, (err, body) => {
                resp.send(JSON.stringify(routes.post(route, body.toString())));
                });
                break;
            case "PUT":
                resp.send(JSON.stringify(routes.put(route)));
                break;
            default:
                resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}));
        }
    }    
}
