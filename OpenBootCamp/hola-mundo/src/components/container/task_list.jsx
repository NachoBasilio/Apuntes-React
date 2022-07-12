import React, { useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Taks } from '../../models/task.class';
import TaskComponents from '../pure/task';

const TaskList = () => {
    const defaultTask = new Taks("Exemple", 'Default descripcion', true, LEVELS.NORMAL)

    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Task state has been modified")
        setLoading(false)
        return () => {
            console.log("TaskList componets is goin to unmont")
        };
    }, [tasks]);

    const changeState = (id) => {
        console.log("TODO: CAMBIA DE ESTAO")
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
