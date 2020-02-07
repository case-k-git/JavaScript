import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

const LineDrawing = (props) => {
    const eventList =  _.map(props.events, event => (
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
export default LineDrawing;