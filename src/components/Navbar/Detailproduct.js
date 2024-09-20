import React from "react";
import { useParams } from 'react-router-dom';
import data from "../data.json";
import 'react-multi-carousel/lib/styles.css';

function Detailproduct() {
    const {id} = useParams();
  
    const product = data.product.find((item) => item.id == id )

  
    

    return (
        <>
            <div className="container-fluid" >

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../img/banner2.jpg" alt="Image" title="#slider-caption-1 " width={'100%'} />

                    </div>
                </div>
            </div>
            <div className="wrapper">


                <div className="page-section section pt-100 pb-60 ">
                <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0px'}}>Product Details</h1>
              
                    <div className="container">


                        <div className="row " key={product.id}>

                            <div className="col-12 col-md-6 col-lg-4">    
                                <div className="tab-content mb-10">
                                    <div className="pro-large-img tab-pane active" id="pro-large-img-1">

                                        <img src={'.' + product.img} alt="Image" style={{width:'100%'}}/>
                                    </div>

                                </div>

                            </div>
                            <div className="col-12 col-md-6 col-lg-8 ">
                                <div className="product-details" style={{textAlign:'left'}}>
                                    <h2 className="title">{product.name}</h2>
                                    <span className="price section"><span className="new">{'$' + product.prices + '.00'}</span><span className="old">
                                        {product.discount ? '$' + product.discount + '.00' : ''}
                                        </span></span>
                                    <span className="availability section"> <span className="in"><i className="fa fa-check"></i> In Stock</span><span className="out"><i className="fa fa-times"></i> Out of Stock</span></span>
                                    <div className="short-desc section">
                                        <p><strong>Quick Overview:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="color-list section">
                                        <button className="active" style={{ backgroundcolor: '#855439' }}><i className="fa fa-check"></i></button>
                                        <button style={{ backgroundcolor: '#FF6801' }}><i className="fa fa-check"></i></button>
                                        <button style={{ backgroundcolor: '#DCDCDA' }}><i className="fa fa-check"></i></button>
                                    </div>
                                    <ul className="usefull-link section">
                                        <li><a href="#/"><i className="pe-7s-mail"></i> Email to a Friend</a></li>
                                        <li><a href="wishlist.html"><i className="pe-7s-like"></i> Wishlist</a></li>
                                        <li><a href="#"><i className="pe-7s-repeat"></i> Compare</a></li>
                                    </ul>
                                    <div className="quantity-cart section">
                                        <div className="product-quantity">
                                            <input type="text" value="0" />
                                        </div>
                                        <button className="add-to-cart">add to cart</button>
                                    </div>
                                    <div className="share-icons section">
                                        <a className="twitter" href="#/"><i className="fa fa-facebook"></i> facebook</a>
                                        <a className="facebook" href="#/"><i className="fa fa-twitter"></i> twitter</a>
                                        <a className="google" href="#/"><i className="fa fa-google-plus"></i> linkedin</a>
                                        <a className="pinterest" href="#/"><i className="fa fa-pinterest"></i> facebook</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="pro-info-tab-list section nav">
                                    <li><a className="active" href="#more-info" data-bs-toggle="tab">More info</a></li>
                                    <li><a href="#data-sheet" data-bs-toggle="tab">Data sheet</a></li>
                                    <li><a href="#reviews" data-bs-toggle="tab">Reviews</a></li>
                                </ul>
                            </div>
                            <div className="tab-content col-12">
                                <div className="pro-info-tab tab-pane active" id="more-info">
                                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                </div>
                                <div className="pro-info-tab tab-pane" id="data-sheet">
                                    <table className="table-data-sheet">
                                        <tbody>
                                            <tr className="odd">
                                                <td>Compositions</td>
                                                <td>Cotton</td>
                                            </tr>
                                            <tr className="even">
                                                <td>Styles</td>
                                                <td>Casual</td>
                                            </tr>
                                            <tr className="odd">
                                                <td>Properties</td>
                                                <td>Short Sleeve</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                               
                            </div>
                        </div>


                    </div>












                </div>

            </div>
        </>
    )

}
export default Detailproduct;