import { Link } from 'react-router-dom';
import './Header.css';
import rectangle from '../../images/rectangle13.svg';
import polygon from '../../images/polygon1.svg';
import ellipse from '../../images/ellipse8.svg';

function Header(){
    return (
      <header>
          <nav className='gr-header'>
            <div className='gr-logo'>
              <div className='ellipse8'>
                <img src={ ellipse } className="#" alt="logo" />
              </div>
              <div className='rectangle13'>
                <img src={ rectangle } className="#" alt="logo" />
              </div>
              <div className='polygon1'>
                <img src={ polygon } className="#" alt="logo" />
              </div>
              <p className='text-header somosmas'>SOMOS MAS</p>
            </div>
              <ul className='menu'>
                <li className='menu-item'>
                  <Link className="text-header inicio" to="/">Inicio</Link>
                </li>
                <li className='menu-item'>
                  <Link className="text-header" to="/about-us">Nosotros</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link className="text-header" to="/news">Novedades</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link className="text-header" to="/testimonies">Testimonios</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link className="text-header" to="/contact-us">Contacto</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link className="text-header" to="/campaign">Campañas</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link className="text-header login" to="/login-form">Log In</Link>
                </li>
                <li className='menu-item register'>
                  <Link className="text-header white" to="/register-form">Registrate</Link>
                </li>
              </ul>
          </nav>
      </header>
    );
  }

/* Dejo comentados los Link porque falta crear las páginas */
   
  export default Header;

