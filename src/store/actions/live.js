import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'

export const liveFeedback = (payload) => ({ type: R.ADD_OR_UPDATE_LIVE_FEEDBACK, payload });