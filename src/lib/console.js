export const Console = {},
	z=(undefined===__DEV__||!__DEV__),
	x=()=>{},
	C=Console;

C.log = z?x: (...args) => {
	const d=new Date(),
		h=d.getHours(),
		m=d.getMinutes(),
		s=d.getSeconds();

	console.log("[" +(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+"] ",
		...args
	);
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
	fun : x,
	warn : x,
	error : x,
	info : x,
	group : x,
	groupCollapsed : x,
	groupEnd : x
};

export default Console;