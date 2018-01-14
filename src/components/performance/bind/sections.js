import Sections from '../sections'
import { connect } from 'react-redux'
import { createFeedback, setFeedbackData, postLive } from "../../../store/actions/live";
import {setCurrentPerformanceId} from "../../../store/actions/index";

const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId,
	}
);

const dispatchToProps = (dispatch) => (
	{
		createFeedback: () => (
			dispatch( createFeedback() )
		),
		setPerformanceId: (performanceId) => (
			dispatch( setCurrentPerformanceId( performanceId ) ) // TODO: Move to own component
		),
		setFeedbackData: ( feedbackId, data ) => (
			dispatch(
				setFeedbackData( feedbackId, data )
			)
		),
		onFeedbackSync: ( feedbackId ) => (
			dispatch(
				postLive( feedbackId )
			)
		),
		//onSectionsChange: ( feedbackId, data ) => (
		//	dispatch(
		//		setFeedbackData( feedbackId, data )
		//	)
		//)
	}
);

const connector = connect( stateToProps, dispatchToProps )(Sections);

export default connector