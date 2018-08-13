import * as React from 'react'
import { connect } from 'react-redux'

interface IProps {
    // blank for now
    match: any;
}

export class TeamPage extends React.Component<IProps> {

  render() {
    return (
      <div>
          {this.props.match.id}
          <p>teampage</p>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
