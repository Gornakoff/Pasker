import React, {Component} from 'react';
import NewTask from '../Tasks/NewTask'

export default class ProjectTasks extends Component {
    render() {
        return (
           
            <div className="panel panel-info">
                <div className="panel-heading content-mid"><h1>{this.props.projectname}</h1></div>
                <div>Description: {this.props.description}</div>
                <row><h2 className='data-h2'>Project's tasks</h2><NewTask/></row>
                <table className="table table-condensed">
                <thead><tr>
                <th>#</th>
                <th>Task</th>
                <th>Date</th>
                <th>Location</th>
                </tr></thead>
                <tbody>
                    {this.props.tasks.map((p, i) => {

                    return (
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{p.task}</td>
                        <td>{p.date}</td>
                        <td>{p.location}</td>
                        </tr>

                    )
                })}
                </tbody>
                </table>
            </div>
            
        )
    }
}