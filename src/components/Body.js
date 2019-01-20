import React, {Component} from 'react'
import '../App.css';
class Body extends Component {
    render() {
      return (
       <div>
        <div class="landpage">
        <h2>¿Necesitas ayuda sobre algún tema de Tecnología?</h2>
      </div>
      
      <div class="consulta">
        <input type="text" placeholder="Escribe tu pregunta" />
        <img src="loupe.png" alt="" />
      </div>
        <div class="cabecera">
          <h3>Contacta instructores al instante!</h3>
          <h3>Te ayudamos a resolver consultas de bases de datos, reporting, desarrollo web y más.</h3>       
        </div>

       </div>

           
      );
    }
  }
  
  export default Body;