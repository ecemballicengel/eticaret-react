import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/GlobalContext'

function Sepet() {
    const{sepet,sepettenCikar}=useContext(AppContext)
    const [total,setTotal]=useState(0);
   useEffect(()=>{
    let totalPrice = 0;
    sepet.forEach(element => {
        totalPrice += parseInt(element.price)
    });

    setTotal(totalPrice)
   })
  return (
    <div>
      <div className="row">        
        {sepet.length > 0 ? (
          sepet.map((urun) => (            
            <div className="col-md-3 my-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={urun.thumbnail} alt="" className="card-img-top img-fluid" style={{width:"200px", height: "200px"}} />
                <div className="card-body">
                  <h5 className="card-title">{urun.title}</h5>
                  <p className="card-text">Fiyat {urun.price} ₺</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => sepettenCikar(urun.id)}
                  >
                    Sepetten Çıkar
                  </button>
                </div>
              </div>
            </div>                   
          ))
        ) : (
          <div class="alert alert-danger" role="alert">
            SEPETTE URUN BULUNMAMAKTADIR!
          </div>
        )}
      </div>
      <div className="row"><div className="col"> <strong>Toplamlar: {total} $ </strong></div></div>
    </div>
  )
}

export default Sepet