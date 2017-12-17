import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actionTypes';

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
                <button onClick={this.props.onStoreResult}>
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
        ctr: state.counter,
        storeResults: state.results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onSubstractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onRemoveResult: (id) => dispatch({ type: actionTypes.REMOVE_RESULT, id: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);