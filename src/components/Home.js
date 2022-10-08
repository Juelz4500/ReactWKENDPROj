import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(event => console.log(event))
    .finally(() => setLoading(false));
  },[]);
  return (
  <div className="products-container" >
    {loading && (
      <div>
        {" "}
        <p>Loading...</p>
      </div>
    )}

    {data.map((product) =>(
      <div key={product.id} className="bg-dark text-danger">
        <div><img src={product.image}alt="..." className='h-10 w-25 rounded mx-auto d-block'/></div>
        <div className='card-description'>
          <h3 className='text-center'><i>{product.title}</i></h3>
          <h6 className='text-center fw-bold'>{`$ ${product.price}`}</h6>
          <p className='text-center fw-bold'>{`${product.description}`}</p>
        </div>
    
    </div>
    ))}

    </div>
  )
}



