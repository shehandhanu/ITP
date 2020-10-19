// Check Enviroment
var env = process.env.NODE_ENV || 'development';

//fetch the enviroment
var config = require('./config.json');
var envConfig = config[env];

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);