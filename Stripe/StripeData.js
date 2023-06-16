

import React, { useEffect, useState } from "react";
import "./Stripe.css";
import { db } from '../Configs/firebaseConfig.js'
import StripeCheckout from 'react-stripe-checkout';


function StripeData() {
    

  const handle = (e) => {
    e.preventDefault();

       db.ref("data").set({
        title: rs,
       
    })
      .then(() => {
        console.log("data add successfully")
      })
      .catch((error) => {
        console.log("data add failed", error)
      })

  }



  const onToken = (token) => {
    console.log(token);
  }

  const [record, setRecord] = useState([])
  const [rs, setrs] = useState({
    id: '',
    title: '',
    description: '',
    price: ''
  })

  const getData = () => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(resposne => resposne.json())
      .then(res => setRecord(res))
  }

  useEffect(() => {
    getData();
  }, [])

  const showDetail = (id) => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(resposne => resposne.json())
      .then(res => setrs(res))
  }


  return (
    <div>

      <h2 className="top">ReactJS Display products with json API</h2>

      <table class="table table-dark" >
        <thead >
          <tr  >
            <th >ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>price</th>
            <th>showDetail</th>
          </tr>
        </thead>
        <tbody>

          {record.map((names, index) =>
            <tr key={index}>
              <td>{names.id}</td>
              <td>{names.title}</td>
              <td>{names.description}</td>
              <td>{names.price}</td>
              <td><button onClick={(e) => showDetail(names.id)}>View Details</button></td>
            </tr>
          )}
        </tbody>
      </table>



      <h2 className="gap"  >Product Details</h2>
      <div>
        <p>Product ID: {rs.id}</p>
        <p>Title : {rs.title}</p>
        <p>Description : {rs.description}</p>
        <p>price :${rs.price}</p>
        
      </div>

      <button onClick={handle}>

      <StripeCheckout
        token={onToken}
        billingAddress
        shippingAddress
        name={rs.title}
        amount={rs.price}
        stripeKey="pk_test_51NJKJgSHGG1KwBjfxJIOim4hHx4uvKDthGUlM16wD7HNBis2cb0tzQVRQNHSWN6G7VXb4rDHtAm0jSFEe7AwAmxw00x4s1qG4z"
      />

</button> 

    </div>



  );
}

export default StripeData;
