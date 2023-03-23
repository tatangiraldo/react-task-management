import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../enums/levels.enums';
import {TaskModel} from '../../../models/task.model'

const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.Normal);

    function addTask(e){
        e.preventDefault();
        const newTask = new TaskModel(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
           <div className='form-outline flex-fill'>
                <input className='form-control form-control-lg' ref={nameRef} id="inputName" type="text" required placeholder='Task Name' autoFocus />
                <input className='form-control form-control-lg' ref={descriptionRef} id="inputDescription" type="text" required placeholder='Task Description' />
                <label htmlFor='selectLevel' className='sr-only'> Priority </label>
                <select id="selectLevel" ref={levelRef} defaultValue={LEVELS.Normal}>
                    <option value={LEVELS.Normal}> Normal </option>
                    <option value={LEVELS.Urgent}> Urgent </option>
                    <option value={LEVELS.Blocking}> Blocking </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-3'  >Add</button>

           </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func
}
export default TaskForm;
