import React, {Component} from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions'
import _ from 'lodash'
import LineSeriesGraph from './line_series_graph';
import LineDrawing from './line_drawing';

class EventsIndex extends Component {
  componentDidMount() {
    // action
    this.props.readEvents()
  }

  displayEventsList() {
    const eventList =  _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
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
          {eventList}
        </tbody>
      </table>
    )
  }

  render() {
    const props = this.props
    console.log(props);
    return (
      <React.Fragment>
    　  <LineSeriesGraph events={this.props.events}/>
    　  <LineDrawing events={this.props.events}/>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({ readEvents}) 
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
