import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, decrement, add, subtract, storeResult, removeResult } from '../../store/actions/actions';

class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => { return { counter: prevState.counter + 1 } })
        break;
      case 'dec':
        this.setState((prevState) => { return { counter: prevState.counter - 1 } })
        break;
      case 'add':
        this.setState((prevState) => { return { counter: prevState.counter + value } })
        break;
      case 'sub':
        this.setState((prevState) => { return { counter: prevState.counter - value } })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store result
            </button>
        <ul>
          {
            this.props.storeResults.map(result => (
              <li key={result.id} onClick={() => this.props.onRemoveResult(result.id)}>
                {result.value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storeResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubstractCounter: () => dispatch(subtract(5)),
    onStoreResult: (value) => dispatch(storeResult(value)),
    onRemoveResult: (id) => dispatch(removeResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);