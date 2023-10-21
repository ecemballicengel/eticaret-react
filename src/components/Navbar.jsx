import React, { useContext } from 'react'
import KategoriList from './KategoriList'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/GlobalContext'


function Navbar() {
    const {sepet} = useContext(AppContext)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
    <Link className="navbar-brand" to="#">
      E-Tic
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Urunler
          </Link>
        </li> 
            <KategoriList/>       
      </ul>
        <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/sepet">
                  Sepet ({sepet.length})
                </Link>
              </li>
        </ul>
      
    </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar