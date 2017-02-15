var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds147079.mlab.com:47079/mongo-express-angular-node';
    }
    
}