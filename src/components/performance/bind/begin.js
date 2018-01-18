import Begin from '../begin'
import { connect } from 'react-redux'

const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId
	}
);

const connector = connect( stateToProps )(Begin);

export default connector