import React from 'react';
import PropTypes from 'prop-types';
import { Taks } from '../../models/task.class';


const TaskComponents = ({task}) => {
    return (
        <div>
            <h2>
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
