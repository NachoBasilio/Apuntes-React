import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Taks } from '../../models/task.class';
import "../../styles/task.css"


const TaskComponents = ({task}) => {
    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea ${task.name} fue desmontada`)
        };
    }, [task]);
    return (
        <div>
            <h2 className="task-name">
                Nombre: {task.name}
            </h2>
            <h3>
                Descripcion: {task.description}
            </h3>
            <h4>
                Nivel: {task.level}
            </h4>
            <h5>
                Esta tarea esta: {task.completed ? 'completa' : 'pendiente'}
            </h5>


        </div>
    );
};


TaskComponents.propTypes = {
    task: PropTypes.instanceOf(Taks)
};


export default TaskComponents;
