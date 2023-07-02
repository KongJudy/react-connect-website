import UserModal from '../../features/user/UserModal';
import { useState } from 'react';
import home from '../../app/assets/img/icon-home.png';
import journal from '../../app/assets/img/icon-journal.png';
import connections from '../../app/assets/img/icon-connect.png';
import donate from '../../app/assets/img/icon-donate.png';
import contact from '../../app/assets/img/icon-contact.png';
import contactW from '../../app/assets/img/icon-w-contact.png';
import homeW from '../../app/assets/img/icon-w-home.png';
import journalW from '../../app/assets/img/icon-w-journal.png';
import connectionsW from '../../app/assets/img/icon-w-connect.png';
import donateW from '../../app/assets/img/icon-w-donate.png';
import connect1 from '../../app/assets/img/connect.png';
import connect2 from '../../app/assets/img/connectedW.png';
import {
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar sticky='top' expand='md' container='fluid'>
      <NavbarBrand className='brandName'>
        <h1>connect</h1>
      </NavbarBrand>
      <NavbarToggler
        onClick={() => setMenuOpen(!menuOpen)}
        className='navbarLogo d-flex flex-row-reverse'
        href='/'
      >
        <div className='changeImg'>
          <img className='connect' src={connect1} alt='connect logo' />
        </div>
        <div className='changeImg'>
          <img className='connect' src={connect2} alt='connected logo' />
        </div>
      </NavbarToggler>
      <Collapse isOpen={menuOpen}>
        <Nav className='navlinks'>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <img className='changeImg' src={home} alt='home page button' />
              <img className='changeImg' src={homeW} alt='home page button' />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/journal'>
              <img
                className='changeImg'
                src={journal}
                alt='journal page button'
              />
              <img
                className='changeImg'
                src={journalW}
                alt='journal page button'
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/donate'>
              <img
                className='changeImg'
                src={donate}
                alt='donate page button'
              />
              <img
                className='changeImg'
                src={donateW}
                alt='donate page button'
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <img
                className='changeImg'
                src={contact}
                alt='contact page button'
              />
              <img
                className='changeImg'
                src={contactW}
                alt='contact page button'
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <UserModal />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
