import React, { useMemo } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import useFirestore from "../../utils/useFirestore";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarComponent.css";
import Logo from "../../assets/img/logoPagPrueba192.png"; 

const nameCollection = "categories";

const NavBarComponent = (props) => {
  const [data] = useFirestore({ nameCollection });

  const dataProcess = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "category" in categoriesObject ? categoriesObject.category : [];
  }, [data]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue"> 
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src= {Logo}
            alt="Logo"
            height={100}
            width={100}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ListOptionNavBarComponent nameOption={dataProcess} />
          </div>
          <NavLink className="nav-link" activeClassName="active" to="/about">
              About
        </NavLink>
        <NavLink to="/products/car" className="text-danger">
          <CartWidget />
        </NavLink>
        </div> 
      </div>
    </nav>
  );
};

export default NavBarComponent;



