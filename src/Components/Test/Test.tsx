// This file is an example of setting up 

import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

// Import the action to dispatch to reducer to create the change in state
import { addInput } from '../../actions';

// Our 'Contract' on how the Props passed to the Component have to be structured
interface IProps {
    message: string;
    onInputPress: any;
}

class Test extends Component<IProps> {
    public render() {
        return (
            <div>
                <input placeholder='Type Here'
                    onChange={(e: any) => this.props.onInputPress(e.target.value)}
                />
                <p>{this.props.message}</p>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        message: state.inputReducer.message
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onInputPress: (value) => addInput(value)
}, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Test);