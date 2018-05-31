var redis = require('redis');
var result = redis.createClient(22122);
result.on('error', function (err) {
    console.log('error: ', err);
});