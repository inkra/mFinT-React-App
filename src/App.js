import React from 'react';
import Utama from './Component/Utama';
import {Link, NavLink} from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { AiTwotoneHome, AiFillSignal } from 'react-icons/ai';
import { RiNotification2Fill, RiAccountCircleFill } from 'react-icons/ri';
import './index.css';
import { Container, Navbar } from 'react-bootstrap';

class App extends React.Component {
  render(){
  return (
    <div className='max-w-screen-sm'>
    <Navbar className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-black py-3 max-w-screen-sm nav">
                    <Container>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/"><AiTwotoneHome size={25} /></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products"><AiFillSignal size={25} /></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gallery"><RiNotification2Fill size={25} /></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pp"><RiAccountCircleFill size={25} /></NavLink>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
     <p><Utama /></p>
    </div>
  );
  }
}

export default App;
