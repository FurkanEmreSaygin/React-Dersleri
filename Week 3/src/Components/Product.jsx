import React from 'react'

function Product(props) {
    const { productName, fiyat } = props;
  return (
    <div>
        <h1>Ürün</h1>
        <p>{productName}</p>
        <p>Fiyat: {fiyat} TL</p>
        <button>Sepete Ekle</button>
        <button>Favorilere Ekle</button>
    </div>
  )
}

export default Product