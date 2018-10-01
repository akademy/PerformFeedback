/* For some reason I named the performance ID a KEY */
export const performanceFromId = ( performances, id ) => {
	for (let i = 0, z = performances.length; i < z; i++) {
		if (performances[i].key === id) {
			return performances[i];
		}
	}
	return null;
};