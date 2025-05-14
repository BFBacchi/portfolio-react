import React from 'react'
import "./taskbar.css"

const TaskBar = () => {
  
  function toggleStartMenu() {
     const startMenu = document.getElementById('start-menu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
  }
  
    return (
    <>
      <div id="taskbar">
        <div id="start-button" onClick={toggleStartMenu}>
          Inicio
        </div>
        <div id="start-menu">
          <ul>
            <li>Programas</li>
            <li>Documentos</li>
            <li>Configuración</li>
            <li>Buscar</li>
            <li>Ayuda</li>
            <li>Ejecutar...</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TaskBar