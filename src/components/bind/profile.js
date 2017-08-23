import Profile from '../profile'
import { connect } from 'react-redux'
import {setDOB, postProfile} from "../../store/actions/profile";

const stateToProps = (state) => (
	{
		id: state.profile.randomId,
		dateOfBirth: state.profile.dateOfBirth,

		profile: state.profile
	}
);

const dispatchToProps = (dispatch) => (
	{
		onDateOfBirth : (dob) => (
			dispatch(
				setDOB(dob)
			)
		),
		onSyncProfile : () => (
			dispatch(
				postProfile()
			)
		)

	}
);

const connector = connect( stateToProps, dispatchToProps )(Profile);

export default connector