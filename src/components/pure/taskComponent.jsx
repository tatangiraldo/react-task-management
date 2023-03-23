 import React, {useEffect} from 'react';
 import PropTypes from 'prop-types';
import { TaskModel } from '../../models/task.model';
import { LEVELS } from '../enums/levels.enums'
 
 const TaskComponent = ({task, complete, remove}) => {

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
                    // onClick={ () => complete(task) } ->asi se carga solo con el click
                    // onClick={ complete(task) } ->  Asi se ejecuta apenas cargue el componente
                return (<i onClick={() => complete(task)} className="bi bi-toggle-on task-action" style={{color: 'green'}}></i>) 
            }
            return (<i onClick={() => complete(task)} className="bi bi-toggle-off task-action "  style={{color: 'grey'}}></i>)
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
                    <i onClick={() => remove(task)} className="bi bi-trash task-action" style={{color: 'tomato'}}></i>
                </span> 
            </td>
        </tr>
    );
 };
 
 
 TaskComponent.propTypes = {
    task: PropTypes.instanceOf(TaskModel).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
 };
 
 
 export default TaskComponent;
 