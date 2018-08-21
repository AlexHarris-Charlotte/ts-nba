import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import './YearDropDown.css';

const teamPageActions = require('../../actions/teamPage');

interface IProps {
    teamName: string;
    state: {
        years: any  
    };
    onLoad: Function;
}

interface IState {
    dropDownOpen: boolean;
    years: string[]; 
    currentYear: string;
}

export class YearDropDown extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        const currentYear: number = new Date().getFullYear();
        const yearArray: string[] = [];

        // Create Array for years from 2000 - current to be listed in Dropdown
        for (let i = currentYear; i >= 2000; i--) {
            yearArray.push(`${i-1} - ${i.toString().slice(2)}`)
        }

        // This state is for managing UI only! Data State management will be handled with Redux
        this.state = {
            dropDownOpen: false,
            years: yearArray,
            currentYear: yearArray[0],
        }
    }

    dropDownClickHandler() {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    yearClickHandler(event: any) {
        const year = event.target.textContent.replace(/ /g, '');
        const teamId = String(this.props.teamName);
        this.setState({
            currentYear: event.target.textContent,
            dropDownOpen: !this.state.dropDownOpen,
        })
        this.props.onLoad(teamId, year);
    }

  render() {



    return (
      <div>
          <div>
              <div 
                className='header'
                onClick={() => this.dropDownClickHandler()}
              >
              <i className={this.state.dropDownOpen ? 'iOpened' : 'iClosed'}></i>
                  {this.state.currentYear + ' Season'}
              </div>
                <ul className={this.state.dropDownOpen ? 'yearContainerClick' : 'yearContainer'}>
                    {this.state.years.map( (year: string) => ( 
                        <li 
                            className='year' key={year}
                            onClick={(e) => this.yearClickHandler(e)}
                        >                         
                            {year} 
                        </li> 
                    )
                    )}
                </ul> 
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onLoad: (team, year) => teamPageActions.getTeamData(team, year)
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YearDropDown)
