import React, {useState, useEffect} from 'react'
import { LEVELS } from '../enums/levels.enums'
import { TaskModel } from '../../models/task.model'
import TaskComponent from '../pure/taskComponent'
import TaskForm from '../pure/forms/taskForm';

function TasksListComponent() {

    const defaultTask = new TaskModel(
        'Example', 
        'Default Desc',
        true,
        LEVELS.Normal
        );
    
    const defaultTask2 = new TaskModel(
        'Example2', 
        'Default  2',
        false,
        LEVELS.Urgent
        );
    
    const defaultTask3 = new TaskModel(
        'Example3', 
        'Default  3',
        false,
        LEVELS.Blocking
        );


    //status of component
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //cycle life component control
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('Task list component is going to unMount')
        };
    }, [tasks]);
        

    const changeCompleted = (id) => {
        //consolg
    }
        
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks: </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar={true} style={{position:'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map( (task, index) => {
                                        return (
                                            <TaskComponent 
                                                key={index} 
                                                task={task}   
                                            />
                                        )
                                    })
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div>
            <TaskForm/>
        </div>
    )
}


export default TasksListComponent

