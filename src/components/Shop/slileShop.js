import React, { useEffect, useState } from "react";
import data from "../data.json";
import { Link, useParams } from "react-router-dom";
function SlileShop() {
    const {name} = useParams();
    const categories = data.categories;
    const currentCategory = categories.find((item) => item.name == name);
    const allProduct = data.product.filter((item) => item.categorySonId == currentCategory.id );
    const [product, setProduct] = useState(allProduct)
  return (
    <>
      <div className="container-fluid" >

<div className="carousel-inner">
    <div className="carousel-item active">
        <img src="../img/banner2.jpg" alt="Image" title="#slider-caption-1 " width={'100%'} />

    </div>
</div>
</div>
      <div class="page-section section pt-100 pb-60">
        <div class="container">
          <div class="tab-content section">
            {product.map((item) => (<div class="row" style={{margin:'20px 0px'}}>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="list-product-img">
                  <a class="image" href="product-details.html" >
                    
                  <Link className="image" to={`/Detailsproduct/${item.id}`}>  <img src={`../${item.img}`} alt="Image" style={{  widows: '100%', borderRadius:'10px' }} /> </Link>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="list-product-item">
                  <div class="list-product-info fix">
                    <h2 class="title">
                      <a href="product-details.html">{item.name}</a>
                    </h2>
                    <span class="price">
                      <span class="new">{'$' + item.prices + '.00'}</span>
                    </span>
                    <p>
                      Investigationes demonstraverunt lectores legere me lius
                      quod ii legunt saepius. Claritas est etiam processus
                      dynamicus, qui sequitur mutationem consuetudium lectorum.
                      Mirum est notare quam littera gothica, quam nunc putamus
                      parum claram.
                    </p>
                    <div class="list-action-btn" >
                      <a href="cart.html" class="add-to-cart">
                        add to cart
                      </a>
                      <a href="wishlist.html" title="Wishlist">
                        <i class="pe-7s-like"></i>
                      </a>
                      <a
                        href="product-details.html"
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                        title="Quickview"
                      >
                        <i class="pe-7s-look"></i>
                      </a>
                      <a href="product-details.html" title="Compare">
                        <i class="pe-7s-repeat"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>))}
          </div>
        </div>
        <div class="service-section section ">
          <div class="container">
            <div class="row">
              <div class="single-service col-lg-3 col-6 mb-6">
                <div class="service-icon">
                  <i class="pe-7s-world"></i>
                </div>
                <div class="service-title">
                  <h3>FREE SHIPPING</h3>
                  <p>Free shipping on all UK orders</p>
                </div>
              </div>
              <div class="single-service col-lg-3 col-6 mb-6">
                <div class="service-icon">
                  <i class="pe-7s-refresh"></i>
                </div>
                <div class="service-title">
                  <h3>FREE EXCHANGE</h3>
                  <p>30 days return on all items</p>
                </div>
              </div>
              <div class="single-service col-lg-3 col-6 mb-6">
                <div class="service-icon">
                  <i class="pe-7s-headphones"></i>
                </div>
                <div class="service-title">
                  <h3>PREMIUM SUPPORT</h3>
                  <p>We support online 24 hours a day</p>
                </div>
              </div>
              <div class="single-service col-lg-3 col-6 mb-6">
                <div class="service-icon">
                  <i class="pe-7s-gift"></i>
                </div>
                <div class="service-title">
                  <h3>BLACK FRIDAY</h3>
                  <p>Shocking discount on every friday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SlileShop;
