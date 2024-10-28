import * as React from "react";
import "./TaskManager.scss";

//Funcion que cree un div con la altura que necesite dependiendo del tiempo que dure la tarea. Se podría crear variables con el pixel en el que empieza cada hora.

function TaskManager() {
  return (
    <div id="taskmanager-container">
      <h1>Organizador de tareas</h1>

      <div className="table-container">
        <table>
          <tr>
            <td>Días</td>
            <td>Lunes</td>
            <td>Martes</td>
            <td>Miércoles</td>
            <td>Jueves</td>
            <td>Viernes</td>
            <td>Sábado</td>
            <td>Domingo</td>
          </tr>
          <tr>
            <td>
              <tr>
                <td>7:00 - 8:00</td>
              </tr>
              <tr>
                <td>8:00 - 9:00</td>
              </tr>
              <tr>
                <td>9:00 - 10:00</td>
              </tr>
              <tr>
                <td>10:00 - 11:00</td>
              </tr>
              <tr>
                <td>11:00 - 12:00</td>
              </tr>
              <tr>
                <td>12:00 - 13:00</td>
              </tr>
              <tr>
                <td>13:00 - 14:00</td>
              </tr>
            </td>
            <td className="dias">a</td>
            <td className="dias">b</td>
            <td className="dias">d</td>
            <td className="dias">e</td>
            <td className="dias">f</td>
            <td className="dias">g</td>
            <td className="dias">h</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TaskManager;
