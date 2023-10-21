import React from 'react'

function Footer() {
  return (
    <div>
        <div className="container">
  <footer className="py-3 my-4 fixed end">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <a href="/" className="nav-link px-2 text-muted">
          Anasayfa
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link px-2 text-muted">
          Urunler
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Hakkimizda
        </a>
      </li>
    </ul>
    <p className="text-center text-muted">© 2023 Company, Inc</p>
  </footer>
</div>
    </div>
  )
}

export default Footer