import React, {useState, useEffect} from 'react'
import { LEVELS } from '../enums/levels.enums'
import { TaskModel } from '../../models/task.model'
import TaskComponent from '../pure/taskComponent'

function TasksListComponent(props) {

    const defaultTask = new TaskModel(
        'Example', 
        'Default Desc',
        false,
        LEVELS.Normal
        )
    //status of component
    const [tasks, setTasks] = useState(defaultTask);
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
        consolg
    }
        
    return (
        <div>
            <h1>Your task:</h1>
            <TaskComponent task={defaultTask}  />
        </div>
    )
}


export default TasksListComponent

