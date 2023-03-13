 import React, {useEffect} from 'react';
 import PropTypes from 'prop-types';
import { TaskModel } from '../../models/task.model';
 
 
 const TaskComponent = ({task}) => {

        useEffect(() => {
            console.log('Created task')
            return () => {
                console.log( `Task: ${task.name} is going to unMount` )
            };
        }, [task]);

    return (
        <div>
            <h2>{ task.name }</h2>
            <h3>{ task.description }</h3>
            <h4>{ task.level }</h4> 
            <h5> { task.completed ? 'Completed' : 'Pending' }  </h5>
        </div>
    );
 };
 
 
 TaskComponent.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
 };
 
 
 export default TaskComponent;
 