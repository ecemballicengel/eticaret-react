import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import UrunList from './UrunList'

function Search() {
  const {urun,setUrun} = useContext(ProductContext)
  const [searchTerm,setSearchTerm] = useState()

  return (
    <div>
        <div className="container mt-4">
        <div className="input-group mb-3 w-50 mx-auto">
            <input
            type="text"
            className="form-control w-50 mx-3"
            placeholder="Ürün ara.."
            id="searchInput"
            onChange={(e)=>{
              setSearchTerm(e.target.value)
              let filteredProduct = urun.filter((x)=>
                  x.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
              );
              // console.log(filteredProduct);
               setSearchTerm(filteredProduct);
            }}
            />
            <div className="input-group-append">
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="searchButton"
            >
                Ara!
            </button>
            </div>
        </div>       
        </div>
    </div>
  )
}

export default Search