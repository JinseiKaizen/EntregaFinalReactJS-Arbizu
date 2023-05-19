import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from '../../assets/img/logoPagPrueba192.png'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="h5 mb-0">
              <img
                src= {Logo}
                alt="logo"
                className="mr-2"
              />
              Desarrollo web, diseños e impresiones 3D
            </h1>
            <p className="mb-0 text-white-50">
              © {new Date().getFullYear()} Arbizu Aldo Alberto
            </p>
          </div>
          <div className="col-md-6">
            <p className="mb-0 text-white-50 text-md-right">#Seguinos en redes sociales:</p>
            <ul className="list-inline mb-0 text-md-right">
              <li className="list-inline-item mr-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaInstagram className="mr-2" />
                  Instagram
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaFacebook className="mr-2" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

