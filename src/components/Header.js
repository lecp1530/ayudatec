import React, {Component} from 'react'
import '../App.css';
class Header extends Component {
    render() {
      return (
       
          <div class="header">
            <figure class="logo">
              <img src="../imagenes/logo_blanco.png" alt="" />
            </figure>
            <div class="ensena">
                <a class="instructor" href="">Conviértete en instructor</a>
            </div>
            <div class="buttonContainer">
                <div class="iniciasesion">
                    <button>Inicia sesión</button>      
                </div>
                <div class="registrate">
                    <button>Regístrate</button>
                </div>
            </div>
          </div>
           
      );
    }
  }
  
  export default Header;