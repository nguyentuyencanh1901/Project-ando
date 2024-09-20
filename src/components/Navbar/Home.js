import React, { useEffect, useState } from "react";
import data from "../data.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Route, Routes } from "react-router-dom";
import Detailproduct from "./Detailproduct";



function Home() {

    let Home = data.product;
    const homeProduct = Home.map((item) => {
        const prices = '$' + item.prices + '.00'
       
        return {
            ...item,
            prices,
           


        }
    }).filter((pro) => pro.categoryId == '1');

    let Homeone = data.product;
    const homeproductt = Homeone.map((item) => {
        const prices = '$' + item.prices + '.00'
        
        return {
            ...item,
            prices,
           


        }
    }).filter((pro) => pro.categoryId == '2');


    return (
        <>
            <div className="container-fluid">



                <div id="demo" className="carousel slide" data-bs-ride="carousel">


                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>


                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/slider/1.jpg" alt="Image" title="#slider-caption-1" />
                            <div className="carousel-caption" style={{ marginBottom: '200px' }}>
                                <div className="hero-slider-content col-lg-6 offset-lg-6 col-md-7 offset-md-5 col-12">
                                    <h4 className="wow rotateInDownLeft" data-wow-duration="1s" data-wow-delay="0.5s">welcome to our</h4>
                                    <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">furniture gallery</h1>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <a href="product-details.html" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/slider/2.jpg" alt="Image" title="#slider-caption-2" />
                            <div className="carousel-caption" style={{ marginBottom: '200px' }}>
                                <div className="hero-slider-content col-lg-6 offset-lg-6 col-md-7 offset-md-5 col-12">
                                    <h4 className="wow rotateInDownLeft" data-wow-duration="1s" data-wow-delay="0.5s">welcome to our</h4>
                                    <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">furniture gallery</h1>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <a href="product-details.html" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">Buy now</a>
                                </div>
                            </div>
                        </div>



                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>

            </div>

            <div className="service-section section pt-70 pb-40">
                <div className="container">
                    <div className="row">

                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-world"></i>
                            </div>
                            <div className="service-title">
                                <h3>FREE SHIPPING</h3>
                                <p>Free shipping on all UK orders</p>
                            </div>
                        </div>

                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-refresh"></i>
                            </div>
                            <div className="service-title">
                                <h3>FREE EXCHANGE</h3>
                                <p>30 days return on all items</p>
                            </div>
                        </div>

                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-headphones"></i>
                            </div>
                            <div className="service-title">
                                <h3>PREMIUM SUPPORT</h3>
                                <p>We support online 24 hours a day</p>
                            </div>
                        </div>

                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-gift"></i>
                            </div>
                            <div className="service-title">
                                <h3>BLACK FRIDAY</h3>
                                <p>Shocking discount on every friday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-section section pb-60">
                <div className="container">
                    <div className="section-title text-center mb-70">
                        <h4>our products</h4>
                        <h2>new arrivals</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            {homeProduct && Array.isArray(homeProduct) ? (
                                homeProduct.map(item => (
                                    
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                                        <div className="product-item text-center" key={item.id} style={{ margin: '20px 0px' }}>
                                            <div className="product-img">

                                            <Link className="image" to={`/Detailsproduct/${item.id}`}><img src={item.img} alt="Image"  style={{  height: '350px', borderRadius:'10px' }} /></Link>
                                                <Link to="" className="add-to-cart">add to cart</Link>
                                                <div className="action-btn fix">
                                                    <a href="wishlist.html" title="Wishlist"><i className="pe-7s-like"></i></a>
                                                    <a href="product-details.html" title="Quickview"><i className="pe-7s-look"></i></a>
                                                    <a href="product-details.html" title="Compare"><i className="pe-7s-repeat"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h5 className="title"><a href="product-details.html">{item.name}</a></h5>

                                                <div class="row" style={{ width: '60%', margin: '10px auto' }}>

                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                        <span className="price"><span className="new">{ item.prices }</span></span>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                        <span className="pricee"><span className="new"><del>{item.discount ?'$' + item.discount + '.00' : <i class="fas fa-weight-hanging fa-lg" style={{color: '#ffae00'}}></i>}</del></span></span>
                                                    </div>

                                                </div>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>



                                            </div>
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p>No items available</p> // Hiển thị thông báo nếu không có dữ liệu
                            )}
                        </div>





                    </div>



                </div>
                <div className="containerfluid" >



                    <div className=" text-center">

                        <div class="row">

                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="single-testimonial" >
                                    <img src="img/testimonial/1.jpg" alt="Image" />
                                    <h4>Nguyen Quoc Khanh</h4>
                                    <p>“ The difference between successful people and failures lies not in strength, understanding or knowledge but in will.”</p>
                                    <i className="pe-7s-way"></i>

                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="single-testimonial">
                                    <img src="img/testimonial/2.jpg" alt="Image" />
                                    <h4>Nguyen Chanh Phuong</h4>
                                    <p>“
                                        Never lose faith in yourself. Just believing that you can do it gives you more reason to try to do it ”</p>
                                    <i className="pe-7s-way"></i>

                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="single-testimonial">
                                    <img src="img/testimonial/3.jpg" alt="Image" />
                                    <h4>Qoach Thai Cong</h4>
                                    <p>“
                                        Everyone says our future is always open, but if we don't grasp the present, the future will be nothing.”</p>
                                    <i className="pe-7s-way"></i>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {homeproductt && Array.isArray(homeproductt) ? (
                        homeproductt.map(item => (
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                                <div className="product-item text-center" key={item.id} style={{ margin: '20px 0px' }}>
                                    <div className="product-img">

                                        <Link className="image" to={`/Detailsproduct/${item.id}`}><img src={item.img} alt="Image"  style={{  height: '350px', borderRadius:'10px' }} /></Link>
                                        <a to="/Detailsproduct" className="add-to-cart">add to cart</a>
                                        <div className="action-btn fix">
                                            <a href="wishlist.html" title="Wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="product-details.html" title="Quickview"><i className="pe-7s-look"></i></a>
                                            <a href="product-details.html" title="Compare"><i className="pe-7s-repeat"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h5 className="title"><a href="product-details.html">{item.name}</a></h5>

                                        <div class="row" style={{ width: '60%', margin: '10px auto', textAlign:'center' }}>

                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <span className="price"><span className="new">{item.prices}</span></span>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <span className="pricee"><span className="new"><del>{item.discount ?'$' + item.discount + '.00' : <i class="fas fa-weight-hanging fa-lg" style={{color: '#ffae00'}}></i>}</del></span></span>
                                            </div>

                                        </div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>



                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items available</p> // Hiển thị thông báo nếu không có dữ liệu
                    )}
                </div>


                

            </div>

            

        </>
    )
}
export default Home;