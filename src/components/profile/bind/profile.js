import Profile from '../profile'
import { connect } from 'react-redux'
import {
	setDOB,
	setMusicTraining,
	setMusicField,
	setMathTraining,
	setMathField,
	setEducation,
	setEducationOther,
	setMusicListen,
	postProfile,
	setEmail,
	setEmailFuture,
} from "../../../store/actions/profile";

const stateToProps = (state) => (
	{
		shortId: state.profile.randomId,

		dateOfBirth: state.profile.dateOfBirth,
		musicTraining: state.profile.musicTraining,
		musicField: state.profile.musicField,
		mathTraining: state.profile.mathTraining,
		mathField: state.profile.mathField,
		education: state.profile.education,
		educationOther: state.profile.educationOther,
		musicListen: state.profile.musicListen,
	}
);

const dispatchToProps = (dispatch) => (
	{
		setDateOfBirth : (payload) => (
			dispatch(
				setDOB(payload)
			)
		),
		setMusicTraining : (payload) => (
			dispatch(
				setMusicTraining(payload)
			)
		),
		setMusicField : (payload) => (
			dispatch(
				setMusicField(payload)
			)
		),
		setMathTraining : (payload) => (
			dispatch(
				setMathTraining(payload)
			)
		),
		setMathField : (payload) => (
			dispatch(
				setMathField(payload)
			)
		),
		setEducation : (payload) => (
			dispatch(
				setEducation(payload)
			)
		),
		setEducationOther : (payload) => (
			dispatch(
				setEducationOther(payload)
			)
		),
		setMusicListen : (payload) => (
			dispatch(
				setMusicListen(payload)
			)
		),


		setEmail: (performanceId, payload) => (
			dispatch(
				setEmail(performanceId, payload)
			)
		),
		setEmailFuture: (performanceId, payload) => (
			dispatch(
				setEmailFuture(performanceId, payload)
			)
		),


		onSync : () => (
			dispatch(
				postProfile()
			)
		)

	}
);

const connector = connect( stateToProps, dispatchToProps )(Profile);

export default connector