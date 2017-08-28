import Sections from '../sections'
import { connect } from 'react-redux'
import { createFeedback, setFeedbackData } from "../../../store/actions/live";
import {setCurrentPerformanceId} from "../../../store/actions/index";

const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId,
		feedbackId: state.currentFeedbackId
	}
);

const dispatchToProps = (dispatch) => (
	{
		setPerformanceId: (performanceId) => (
			dispatch( setCurrentPerformanceId( performanceId ) ) // TODO: Move to own component
		),
		createFeedback: ( feedbackId ) => (
			dispatch( createFeedback( feedbackId ) )
		),
		onSectionsChange: ( feedbackId, data ) => (
			dispatch(
				setFeedbackData( feedbackId, data )
			)
		)
	}
);

const connector = connect( stateToProps, dispatchToProps )(Sections);

export default connector