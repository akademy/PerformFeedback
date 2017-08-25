import Sections from '../sections'
import { connect } from 'react-redux'
import { liveFeedback } from "../../../store/actions/live";

const stateToProps = null; /*(state) => (
	{
		id: state.profile.randomId,
	}
);*/

const dispatchToProps = (dispatch) => (
	{
		onSectionsChange : (feedback) => (
			dispatch(
				liveFeedback(feedback)
			)
		)
	}
);

const connector = connect( stateToProps, dispatchToProps )(Sections);

export default connector