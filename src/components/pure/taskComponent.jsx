 import React, {useEffect} from 'react';
 import PropTypes from 'prop-types';
import { TaskModel } from '../../models/task.model';
import { LEVELS } from '../enums/levels.enums'
 
 
 const TaskComponent = ({task}) => {

        useEffect(() => {
            console.log('Created task')
            return () => {
                console.log( `Task: ${task.name} is going to unMount` )
            };
        }, [task]);

        /**
         * Function that return a Badge depending of task's level
         */
        function taskLevelBadge(){
            switch (task.level) {
                case LEVELS.Normal:
                    return(
                        <h6 className='mb-o'>
                            <span className='badge bg-primary'>
                                {task.level}
                            </span>
                        </h6>
                    ) 
                case LEVELS.Urgent:
                    return(
                        <h6 className='mb-o'>
                            <span className='badge bg-warning'>
                                {task.level}
                            </span>
                        </h6>
                    )  
                case LEVELS.Blocking:
                    return(
                        <h6 className='mb-o'>
                            <span className='badge bg-danger'>
                                {task.level}
                            </span>
                        </h6>
                    )            
                default:
                    break;
            }
        }

        /**
         * 
         */
        function taskInconManagement(){
            if(task.completed){
                return (<i className="bi bi-toggle-on" style={{color: 'green'}}></i>) 
            }
            return (<i className="bi bi-toggle-off"  style={{color: 'grey'}}></i>)
        }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'> {task.name} </span> 
            </th>
            <td className='align-middle'>
                <span > {task.description} </span>
            </td>
            <td className='align-middle'>
                <span >
                    {taskLevelBadge()}
                </span>
            </td>
            <td className='align-middle'>
                <span > 
                    {taskInconManagement()}
                    <i className="bi bi-trash" style={{color: 'tomato'}}></i>
                </span> 
            </td>
        </tr>
    );
 };
 
 
 TaskComponent.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
 };
 
 
 export default TaskComponent;
 