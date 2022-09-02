import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo-sm.svg';


function Header(){

  let history = useHistory();

  const getToken = () => {
    if (localStorage.getItem.getToken !== null){
      return localStorage.getItem('token');
    } else { return false }
  }

  const handleSignOut = () =>{
    localStorage.removeItem('token');
    history.push('/login-form');
  }

  return (
    <header>
        <nav className='gr-header'>
          <div className='gr-logo'>
              <a href='/'>
                <img src={ logo } className="#" alt="logo" />
              </a>
              
          </div>
            <ul className='menu'>
              <li className='menu-item'>
                <Link to="/" className="text-header inicio">Inicio</Link>
              </li>
              <li className='menu-item'>
                <Link to="/about-us" className="text-header">Nosotros</Link>
              </li> 
              <li className='menu-item'>
                <Link to="/activities" className="text-header">Actividades</Link>
              </li> 
              <li className='menu-item'>
                <Link to="/testimonials" className="text-header">Testimonios</Link>
              </li> 
              <li className='menu-item'>
                <Link to="/contact-us" className="text-header">Contacto</Link>
              </li>
              <li className='menu-item'>
                <Link to="/campaign" className="text-header">Campañas</Link>
              </li> 
              {getToken() ? (<div className="menu-item"><button className="text-header login" type="submit" onClick={handleSignOut}>Sign out</button></div>) : (
                <div className='btn-container'>
                  <li className='menu-item'>
                    <Link to="/login-form" className="text-header login">Log In</Link>
                  </li>
                  <li className='menu-item'>
                    <Link to="/register-form" className="text-header register white">Registrate</Link>
                  </li>
                </div> 
              )}
            </ul>
        </nav>
    </header>
  );
}

export default Header;