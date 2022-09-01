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
                  <Link to="/" className="text-header inicio">Inicio</Link>
                </li>
                <li className='menu-item'>
                  <Link to="/about-us" className="text-header">Nosotros</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link to="/news" className="text-header">Novedades</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link to="/testimonies" className="text-header">Testimonios</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link to="/contact-us" className="text-header">Contacto</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link to="/campaign" className="text-header">Campañas</Link>
                </li> {/* falta */}
                <li className='menu-item'>
                  <Link to="/login-form" className="text-header login">Log In</Link>
                </li>
                <li className='menu-item register'>
                  <Link to="/register-form" className="text-header white">Registrate</Link>
                </li>
              </ul>
          </nav>
      </header>
    );
  }

/* Dejo comentados los Link porque falta crear las páginas */
   
  export default Header;

