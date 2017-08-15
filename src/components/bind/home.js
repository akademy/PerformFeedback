import Home from '../home'
import { connect } from 'react-redux'

const stateToProps = (state) => (
	{
		count: state.count
	}
);


const connector = connect( stateToProps )(Home);

export default connector