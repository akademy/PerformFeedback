
let logger = {};

if( __DEV__ ) {
	logger.log = (...args) => { console.log(...args); };
	logger.warn = (...args) => { console.warn(...args); };
	logger.error = (...args) => { console.error(...args); };
	logger.info = (...args) => { console.info(...args); };
	logger.group = (...args) => { (console.group) ? console.group(...args) : logger.log(...args); };
	logger.groupCollapsed = (...args) => { (console.groupCollapsed) ? console.groupCollapsed(...args) : logger.log(...args); };
	logger.groupEnd = (...args) => { (console.groupEnd) ? console.groupEnd(...args) : logger.log(...args); };
}
else {
	logger.log = () => {};
	logger.warn = () => {};
	logger.error = () => {};
	logger.info = () => {};
	logger.group = () => {};
	logger.groupCollapsed = () => {};
	logger.groupEnd = () => {};
}

export const Console = logger;