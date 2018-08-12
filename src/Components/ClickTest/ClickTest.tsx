// Another Test component to get a better understanding of Redux Flow 
import * as React  from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux'; 

import { incrementButton } from '../../actions';

interface IProps {
    onButtonPress: any
    value: number
}

class ClickTest extends React.Component<IProps> {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onButtonPress}
                >
                    Add 5
                </button>
                <p>{this.props.value}</p>
            </div>
        )
    }
} 

const mapStateToProps = (state: any) => {
    return {value: state.clickReducer.value}
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onButtonPress: () => incrementButton()
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClickTest);


