import * as React from 'react'
import { connect } from 'react-redux'
import './YearDropDown.css';




    // This component will take props from both Redux State and parent component
    // After a user chooses a new year state we will have to send an asynchronous action
        // To redux to handle the new team Data
    // We want to monitor the UI state in a state property on the dropdown class


interface IProps {
    state: {
        years: any  
    }
}

interface IState {
    dropDownOpen: boolean;
    years: string[]; 
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
        }
    }

    dropDownClickHandler() {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }


  render() {



    return (
      <div>
          <div>
              <div 
                className='header'
                onClick={() => this.dropDownClickHandler()}
              >
                  header
              </div>
              { this.state.dropDownOpen ? 
                <ul className='yearContainer'>
                    {this.state.years.map( (year: string) => ( 
                        <li className='year' key={year}> {year} </li> 
                    )
                    )}
                </ul> :
                null
                }
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(YearDropDown)
