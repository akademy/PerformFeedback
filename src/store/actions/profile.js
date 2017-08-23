import { REDUCER as R } from '../../constants'

// These set up the data if needs be, and create a "state changer"

export const setRandomUuid = (payload) => ({ type: R.SET_RANDOM_UUID, payload });
export const setRandomId = (payload) => ({ type: R.SET_RANDOM_ID, payload });
export const setDOB = (payload) => ({ type: R.SET_DOB, payload });

