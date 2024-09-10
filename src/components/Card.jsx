import React from "react";
import { useDispatchCart, useCart } from './ContextReducer'
import { useState,useRef,useEffect } from "react";
export default function Card(props) {
  
  let data = useCart();
  const dispatch = useDispatchCart();

  const priceRef = useRef();

  let options =props.options;
  let priceoption=Object.keys(options)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")


  const handlecart = async()=>{

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.img })
    console.log(data)

  }
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing

  return (
    <div className="card m-4 rounded" style={{ width: "20rem", maxHeight: "400px" }}>
      <img src={props.foodItem.img } className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>
        <p className="card-text">Food Details!!</p>
        <div className="container w-100">
          <select className="m-3 h-100 bg-primary rounded" onChange={(e)=> setQty(e.target.value)}>
            {Array.from(Array(6), function (e, i) {
              return <option key={i + 1}>{i + 1}</option>;
            })}
          </select>
          <select className="m-3 h-100 bg-primary rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {
                priceoption.map((data)=>{
                  return(
                    <option key={data} value={data}>{data}</option>
                  )
                })
              }
          </select>
          <p className="card-text d-inline h-100 fs-6"> ₹{finalPrice}/-</p>
          <hr />
        <button className="btn btn-primary justify-center ms-1 fs-10" onClick={handlecart}>Add Cart</button>
        </div>
        
      </div>
    </div>
  );
}
