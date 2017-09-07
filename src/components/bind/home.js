import Home from '../home'
import { connect } from 'react-redux'

const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId,
		feedbackId: state.currentFeedbackId
	}
);


const connector = connect( stateToProps )(Home);

export default connector