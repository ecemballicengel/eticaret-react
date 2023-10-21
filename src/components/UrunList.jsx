import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { AppContext } from '../context/GlobalContext';




function UrunList() {
    // const[urunler, setUrunler]=useState([])
    const {sepet,sepeteEkle}=useContext(AppContext)
    const {urun}= useContext(ProductContext)
    // console.log(urun);
  return (
    <div>
        <div className="container">
        <div className="row">
          {urun.map((urun) => (
            <div className="col-md-4 my-3">
            <div
              className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              style={{ width: "25rem", height: "600px" }}
            >
              <img style={{width:"200px", height: "200px"}}
                src={urun.thumbnail}
                alt=""
                className="card-img-top m-auto"
              />
              <div className="card-body">
                <h6 className="card-title">{urun.title}</h6>
                <p className="card-text"> {urun.description}</p>
                <p className="card-text">{urun.price}$</p>
                <button
                  className="btn btn-success"
                  onClick={() => sepeteEkle(urun)}
                >
                  Sepete Ekle
                </button>
               
              </div>
            </div>

          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UrunList