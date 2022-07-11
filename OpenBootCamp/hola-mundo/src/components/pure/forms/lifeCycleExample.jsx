//En este ejemplo vamos a ver los principales ciclos de vida.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log("Instancia del componente, constructor")
    }

    componentWillMount() {
        console.log("Antes del montaje del componente")
    }

    componentDidMount() {
        console.log("Justo antes de montar el componente")
    }

    componentWillReceiveProps(nextProps) {
        console.log("Cuando hay nuevos props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Nos devuelve un booleano, sirve para controlar si el componente debe o no actualizar");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Justo antes de actualizar")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Justo despues de actualizar");
    }

    componentWillUnmount() {
        console.log("Cuando ripea el componente");
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;