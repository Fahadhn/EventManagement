var configValues = require("./config");

module.exports = {
    getDbConnectionString: function() {
        return "mongodb://" + configValues.username + ":" + configValues.password + "@ds261660.mlab.com:61660/event-manager";
    }
}