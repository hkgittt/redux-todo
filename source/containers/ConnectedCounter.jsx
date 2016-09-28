import { connect } from 'react-redux';
import { incrementCounter } from '../actions';
import Counter from '../components/Counter';
import { doubleCount } from '../selectors';

const mapStateToProps = (state) => ({
  counter: doubleCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch(incrementCounter()),
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
