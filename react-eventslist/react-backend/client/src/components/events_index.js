import React, {Component} from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends Component {
  componentDidMount() {
    // action
    this.props.readEvents()
  }

  displayEventsList() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props
    return (
      <table>
        <thead>
          <tr>
           <th>ID</th>
           <th>Title</th>
           <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {this.displayEventsList()}
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({ readEvents}) 
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
