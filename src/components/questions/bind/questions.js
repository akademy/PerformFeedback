import Questions from '../questions'
import { connect } from 'react-redux'
import {
	createQuestion,
	postPost,
	setQuestionComments,
	setQuestionDescribe,
	setQuestionEnjoy,
	setQuestionFamiliar,
	setQuestionInfluences,
	setQuestionMotivation,
	setQuestionMusicLength,
	setQuestionParticipation,
	setQuestionFamiliarPiece,
	setQuestionOften,
} from "../../../store/actions/post";


const stateToProps = (state) => (
	{
		performanceId: state.currentPerformanceId,
		performances: state.performances,
		questions: state.post.questions
	}
);

const dispatchToProps = (dispatch) => (
	{
		createQuestion: (performanceId) => (
			dispatch(createQuestion(performanceId))
		),
		doSync: (performanceId) => (
			dispatch(postPost(performanceId))
		),
		setQuestionComments: (performanceId, payload) => (
			dispatch(
				setQuestionComments(performanceId, payload)
			)
		),
		setQuestionDescribe: (performanceId, payload) => (
			dispatch(
				setQuestionDescribe(performanceId, payload)
			)
		),
		setQuestionEnjoy: (performanceId, payload) => (
			dispatch(
				setQuestionEnjoy(performanceId, payload)
			)
		),
		setQuestionFamiliar: (performanceId, payload) => (
			dispatch(
				setQuestionFamiliar(performanceId, payload)
			)
		),
		setQuestionInfluences: (performanceId, payload) => (
			dispatch(
				setQuestionInfluences(performanceId, payload)
			)
		),
		setQuestionMotivation: (performanceId, payload) => (
			dispatch(
				setQuestionMotivation(performanceId, payload)
			)
		),
		setQuestionMusicLength: (performanceId, payload) => (
			dispatch(
				setQuestionMusicLength(performanceId, payload)
			)
		),
		setQuestionParticipation: (performanceId, payload) => (
			dispatch(
				setQuestionParticipation(performanceId, payload)
			)
		),
		setQuestionFamiliarPiece: (performanceId, payload) => (
			dispatch(
				setQuestionFamiliarPiece(performanceId, payload)
			)
		),
		setQuestionOften: (performanceId, payload) => (
			dispatch(
				setQuestionOften(performanceId, payload)
			)
		),
	}
);

const connector = connect( stateToProps, dispatchToProps )(Questions);

export default connector