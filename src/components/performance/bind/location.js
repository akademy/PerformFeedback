import Location from '../location'
import { connect } from 'react-redux'
import {setCurrentPerformanceId} from "../../../store/actions/index";

const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId,
		performances: state.performances
	}
);

const dispatchToProps = (dispatch) => (
	{
		setCurrentPerformanceId: (performanceId) => (
			dispatch( setCurrentPerformanceId( performanceId ) )
		),
	}
);

const connector = connect( stateToProps, dispatchToProps )(Location);

export default connector