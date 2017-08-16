import Profile from '../profile'
import { connect } from 'react-redux'

const stateToProps = (state) => (
	{
		id: state.profile.randomId
	}
);


const connector = connect( stateToProps )(Profile);

export default connector