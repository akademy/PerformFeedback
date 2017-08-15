import Count from '../count'
import { setCount, requestCount } from '../../store/actions'
import { connect } from 'react-redux'

const stateToProps = (state) => (
	{
		count: state.count
	}
);

const dispatchToProps = (dispatch) => (
	{
		onAddOne : (count) => (
			dispatch(
				setCount(count)
			)
		),
		onResetCount : () => (
			dispatch(
				setCount(0)
			)
		),
		onRequestCount: () => (
			dispatch(
				requestCount()
			)
		)
	}
);

const connector = connect( stateToProps, dispatchToProps )(Count);

export default connector