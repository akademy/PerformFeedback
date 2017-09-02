export const Console = {};
const z=(undefined===__DEV__||!__DEV__),x=()=>{},C=Console;

C.log = z?x: (...args) => {
	let d=new Date(); console.log("["+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"] ", ...args);
};
C.warn = z?x: (...args) => { console.warn(...args); };
C.error = z?x: (...args) => { console.error(...args); };
C.info = z?x: (...args) => { console.info(...args); };
C.group = z?x: (...args) => {
	(console.group) ? console.group(...args) : C.log(...args);
};
C.groupCollapsed = z?x: (...args) => {
	(console.groupCollapsed) ? console.groupCollapsed(...args) : C.log("\\/\\/\\/",...args);
};
C.groupEnd = z?x: (...args) => {
	(console.groupEnd) ? console.groupEnd(...args) : C.log("/\\/\\/\\",...args);
};

C.fun = z?x: (...args) => { C.log( "[FUNCTION]", ...args) };

export const ConsoleDummy = {
	log : x,
	warn : x,
	error : x,
	info : x,
	group : x,
	groupCollapsed : x,
	groupEnd : x
};

export default Console;