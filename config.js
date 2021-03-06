var path = require('path');

var config = {};

// STH server configuration
//--------------------------
config.server = {
  // The host where the STH server will be started. Default value: "localhost".
  host: 'localhost',
  // The port where the STH server will be listening. Default value: "8666".
  port: '8666',
  // A flag indicating if the empty results should be removed from the response.
  //  Default value: "true".
  filterOutEmpty: 'true'
};

// Database configuration
//------------------------
config.database = {
  // The service to be used if not sent by the Orion Context Broker in the notifications.
  //  Default value: "orion".
  defaultService: 'orion',
  // The service path to be used if not sent by the Orion Context Broker in the notifications.
  //  Default value: "/".
  defaultServicePath: '/',
  // The username to use for the database connection. Default value: "".
  user: '',
  // The password to use for the database connection. Default value: "".
  password: '',
  // The URI to use for the database connection. It supports replica set URIs. This does not
  //  include the "mongo://" protocol part. Default value: "localhost:27017"
  URI: 'localhost:27017',
  // The name of the replica set to connect to, if any. Default value: "".
  replicaSet: '',
  // The prefix to be added to the service for the creation of the databases. Default value: "sth".
  prefix: 'sth_',
  // The prefix to be added to the collections in the databases. More information below.
  //  Default value: "sth".
  collectionPrefix: 'sth_',
  // The default MongoDB pool size of database connections. Optional. Default value: "5".
  poolSize: '5',
  // The write concern (see http://docs.mongodb.org/manual/core/write-concern/) to apply when
  //  writing data to the MongoDB database. Default value: "1".
  writeConcern: '1',
  // Flag indicating if the raw and/or aggregated data should be persisted. Valid values are:
  //  "only-raw", "only-aggregated" and "both". Default value: "both".
  shouldStore: 'both',
  // Flag indicating if the raw and/or aggregated data collection names should include a hash portion.
  //  This is mostly due to MongoDB's limitation regarding the number of bytes a namespace may have
  //  (currently limited to 120 bytes). In case of hashing, information about the final collection name
  //  and its correspondence to each concrete service path, entity and (if applicable) attribute
  //  is stored in a collection named `COLLECTION_PREFIX + "collection_names"`. Default value: "false".
  shouldHash: 'false'
};

// Logging configuration
//------------------------
config.logging = {
  // The logging level of the messages. Messages with a level equal or superior to this will be logged.
  //  Accepted values are: "debug", "info", "warn" and "error". Default value: "info".
  level: 'info',
  // A flag indicating if the logs should be sent to the console. Default value: "true".
  toConsole: 'true',
  // A flag indicating if the logs should be sent to a file. Default value: "true".
  toFile: 'true',
  // Maximum size in bytes of the log files. If the maximum size is reached, a new log file is
  //  created incrementing a counter used as the suffix for the log file name. Default value: "0" (no
  //  size limit).
  maxFileSize: '0',
  // The path to a directory where the log file will be searched for or created if it does not exist.
  //  Default value: "./log".
  directoryPath: '.' + path.sep + 'log',
  // The name of the file where the logs will be stored. Default value: "sth_app.log".
  fileName: 'sth_app.log',
  // The time in seconds between proof of life logging messages informing that the server is up and running normally.
  //  Default value: "60"
  proofOfLifeInterval: '60'
};

module.exports = config;
