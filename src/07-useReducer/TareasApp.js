import React, { useEffect, useReducer } from 'react';
import { tareasReducer } from './tareasReducer';
import { ListaTareas } from './ListaTareas';
import { useForm } from '../Hooks/useForm';

import './style.css';

/* const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprende React',
    done:false
}]; */

const init = ()=>{
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

export const TareasApp = () => {

    const [tareas, dispatch ] = useReducer(tareasReducer,[], init);
    
    const [{descripcion}, handleInputChange, reset] = useForm({
        descripcion: ''
    });

    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas));
    },[tareas])

    const handleDelete = (TareaId) =>{
        const action = {
            type: 'delete',
            payload: TareaId
        }

        dispatch(action);
    }

    const handleToggle = (TareaId)=>{
        dispatch({
            type: 'toogle',
            payload: TareaId
        });
    };

    const addTaks = (e)=>{
        e.preventDefault();

        if( descripcion.trim().length <= 1 ){
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            desc: descripcion,
            done:false
        };

        const action = {
            type: 'add',
            payload: newTask
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1 className='text-center' >Lista de Tareas ( {tareas.length} ) </h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <ListaTareas 
                        tareas={tareas} 
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                    
                </div>

                <div  className='col-5'>
                    <h4 className='text-center' >Agregar Tarea</h4>
                    <hr />

                    <form onSubmit={addTaks} >

                        <input 
                            type='text'
                            placeholder='Nueva tarea'
                            autoComplete='off'
                            autoFocus
                            className='form-control'
                            name='descripcion'
                            value={descripcion}
                            onChange={handleInputChange}
                        />

                        <button 
                            type='submit'
                            className='btn btn-outline-primary mt-3 w-100'
                        >
                            <i className="fas fa-plus-square"></i>  Agregar
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}
