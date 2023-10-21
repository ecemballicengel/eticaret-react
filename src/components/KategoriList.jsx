import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

function KategoriList() {
  
   const {urun,setUrun,category}= useContext(ProductContext)
   
  return (    
    <li className="nav-item dropdown">
    <Link
      className="nav-link dropdown-toggle"
      to="/kategoriler"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"     
    >
      Kategoriler
    </Link>
    <ul className="dropdown-menu">
    {category.map((data) => (
              <button className="nav-link" onClick={()=>{
                let urunCategory = urun.filter((x) => x.category === data)
                setUrun(urunCategory)
              }}>
              {data}
            </button>
          ))}
    </ul>
  </li>
  )
}

export default KategoriList