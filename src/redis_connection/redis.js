const redis = require('redis');
const { promisify } = require('util');

let redisClient = redis.createClient(
    18769,
    'redis-18769.c212.ap-south-1-1.ec2.cloud.redislabs.com',
    {no_ready_check:true}
)

redisClient.auth(
    'wdJtPblJhPyAUmC1JIKNQ7XF6bSe9LpM',
    function(err){
        if(err) console.log(err.message);
    }
)

redisClient.on('connect', async function(){
    console.log("Connected to redis.");
});

const GET = promisify(redisClient.GET).bind(redisClient);
const SET = promisify(redisClient.SETEX).bind(redisClient);

module.exports = {GET, SET};