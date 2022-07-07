import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Taks } from '../../models/task.class';
import TaskComponents from '../pure/task';

const TaskList = () => {
    const defaultTask = new Taks("Exemple", 'Default descripcion', true, LEVELS.NORMAL)
    const changeState = (id) => {
        console.log("TODO: Cambiar estado de una tarea ")
    }
    return (
        <div>
            <h1>
                Your Task:
            </h1>
            <TaskComponents task={defaultTask}></TaskComponents>
        </div>
    );
}

export default TaskList;
