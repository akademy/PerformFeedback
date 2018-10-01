import Begin from '../begin'
import { connect } from 'react-redux'

const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId,
		performances: state.performances
	}
);

const connector = connect( stateToProps )(Begin);

export default connector