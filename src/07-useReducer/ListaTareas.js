import React from 'react';
import { Tarea } from './Tarea';

export const ListaTareas = ({tareas, handleDelete, handleToggle}) => {
    return (
        <ol className='list-group list-group-flush' >
            {
                tareas.map((tareas,i) => {
                    return <Tarea 
                                key={tareas.id}
                                tareas={tareas} 
                                i={i} 
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                
                            />
                            
                })
            }
        </ol>
    )
}
