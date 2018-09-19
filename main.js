const storage = require('azure-storage');
const { CONNECTION_STRING_COSMOSDB } = require('./credential');
const storageClient = storage.createTableService(CONNECTION_STRING_COSMOSDB);