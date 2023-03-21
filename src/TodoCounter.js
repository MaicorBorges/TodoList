import React from "react";
import './TodoCounter.css';

function TodoCounter ({ total, completed}) {
    return (
        <h2 className="TodoCounter">Has compleatado {completed} de {total} TODO's</h2>
    );
}


export { TodoCounter };