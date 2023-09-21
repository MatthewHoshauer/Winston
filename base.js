const winston = require('winston'); // import into js

const logger = winston.createLogger({  // Create the logger. Recommended for creating custom loggers
    level: 'info', // Only log entries w minimum severity of info (2) will be written while all others are suppressed. (Only warn, error, info.)
//  level: process.env.LOG_LEVEL || 'info',  <-- Environmental variable method
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});

logger.info('Info message');      //  Yields Output -> {"level":"info","message":"Info message"}
logger.error('Error message');    //  Yields Output -> {"level":"error","message":"Error message"}
logger.warn('Warning message');   //  Yields Output -> {"level":"warn","message":"Warning message"}

/* --- LEVELS --- Level property determines which log messages will be emitted to configured transports.
{   error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,}

    Best practice: Set log level to an environmental variable. Avoid modifying application code when the log level needs to be changed.

    --- SETTING CUSTOM LEVELS ---

    const logLevels = {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
    };

*/

/* --- FORMAT ---

format: cli()  <---------------------------- Color Codes messages for command line interfaces
format: combine(timestamp(), json()) <------ Adds a timestamp field to each log entry. USEFUL
format: colorize({all: true}) <------------- Assigns colors to log levels for easy identification 
format: align() <--------------------------- Aligns log messages

*/

/* --- TRANSPORTS --- 

Transports = Storage location for log entries. Below are default options.

Console: Output logs to Node.js console.
File:    Store log messages to one or more files.
HTTP:    Stream logs to an HTTP endpoint.
Stream:  Output logs to any Node.js stream.

*/
