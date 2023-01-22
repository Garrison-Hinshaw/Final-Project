import React from "react";
// import  Card  from "bootstrap";
// import { useEffect, useState } from "react";
import PRODUCTS   from "./Product";
import  Product  from "./Productt";
import NavBar from "../components/navBar";

export default function NewProduct(PRODUCTS) {
  
  return (

    <div class="card-group1">
    <div class="card">
      <img class="card-img-top" src='https://www.rei.com/media/43314827-8954-4e1e-a32b-8fd2ce0c0b99?size=576x768' alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="https://moodle.com/wp-content/uploads/2021/06/22087-11.jpg" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to
          additional content.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="https://www.rhcph.dk/media/catalog/product/s/_/s_s_berkeley_script_t_shirt_i0295950ejxx.jpg" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="card-group-2">
      <div class="card">
        <img class="card-img-top" src="https://m.media-amazon.com/images/I/51yWOlRmzML.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6442/6442031cv13d.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydPp79R2E_H5DBYoivxTeJFLMY204dN55_g&usqp=CAU" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>

    // <div className="Product">
    //   <div className="ProductTitle">
    //     <h1> GDQ </h1>
    //   </div>
    //   <div className="NEW_Product">
    //     {PRODUCTS.map((Product) => (
    //       <Product data={Product}/>
    //     ))}
    //   </div>
    // </div>

    // console.log("newProduct")
  );

  //         <div class="card" style="width: 18rem;">
  //   <img class="card-img-top" src="..." alt="Card image cap"/>
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //   </div>
  //   <ul class="list-group list-group-flush">
  //     <li class="list-group-item">Cras justo odio</li>
  //     <li class="list-group-item">Dapibus ac facilisis in</li>
  //     <li class="list-group-item">Vestibulum at eros</li>
  //   </ul>
  //   <div class="card-body">
  //     <a href="#" class="card-link">Card link</a>
  //     <a href="#" class="card-link">Another link</a>
  //   </div>
  // </div>
}
