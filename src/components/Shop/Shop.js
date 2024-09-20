import React, { useEffect, useState } from "react";
import data from '../data.json';
import { Link } from "react-router-dom";
function Shop() {
    let categories = data.categories;
    const productsAll = data.product;
    const getProductsOfCategory = (e) => {
        e.preventDefault();
        const id = e.target.id;
        setProducts(productsAll.filter(item => item.categoryId == id ));
    };
    
    const [products, setProducts] = useState(productsAll.slice(0,10));
    useEffect(() => {
    },[products])
    return (
        <>
            <div className="container-fluid" >

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/banner2.jpg" alt="Image" title="#slider-caption-1 " width={'100%'} />

                    </div>
                </div>
            </div>
            <div class="page-section section pt-100 pb-60">
            <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0px'}}>SHOP</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-lg-8 col-12 order-lg-1 order-0">
                            <div class="shop-bar mb-6">
                                <ul class="shop-tablist nav">
                                    <li><a class="active" href="" data-bs-toggle="tab"><i class="fa fa-th"></i></a></li>
                                    <li><a href="" data-bs-toggle="tab"><i class="fa fa-list"></i></a></li>
                                </ul>

                            </div>
                            <div class="tab-content section">
                                <div class="tab-pane active" id="product-grid">
                                    <div className="row">
                                        {products && Array.isArray(products) ? (
                                            products.map(item => (
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                                                    <div className="product-item text-center" key={item.id} style={{ margin: '20px 0px' }}>
                                                        <div className="product-img">
                                                        
                                                        <Link className="image" to={`/Detailsproduct/${item.id}`}><img src={item.img} alt="Image" style={{ width: '255px', height: '255px' }} /></Link>
                                                            <a href="cart.html" className="add-to-cart">add to cart</a>
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
                                                                    <span className="price"><span className="new">{'$' + item.prices + '.00'}</span></span>
                                                                </div>
                                                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                    
                                                                    <span className="pricee"><span className="new"><del>{item.discount ?'$' + item.discount + '.00' : ''}</del></span></span>
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
                                        <div class="page-pagination text-center col-xs-12 fix mb-40">
                                            <ul>
                                                <li><a href=""><i class="fa fa-angle-left"></i></a></li>
                                                <li class="active"><a href="">1</a></li>
                                                <li><a href="">2</a></li>
                                                <li><a href="">3</a></li>
                                                <li><a href="">4</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>




                                </div>
                               
                            </div>
                        </div>


                        <div class="col-xl-3 col-lg-4 col-12 order-lg-0 order-1">

                            <div class="single-sidebar mb-8">
                                <form action="#" class="sidebar-search">
                                    <input type="text" placeholder="Search here..." />
                                    <button class="submit"><i class="pe-7s-search"></i></button>
                                </form>
                            </div>

                            <div class="single-sidebar mb-8">
                                <h3 class="sidebar-title">Category</h3>
                                <ul class="category-sidebar">
                                    {categories.map((item)=> {
                                        if(!item.parentId){
                                            return (
                                                <li>
                                                    <a id={item.id} style={{cursor: 'pointer'}}  onClick={(e) => getProductsOfCategory(e)} >{item.name}</a>
                                                </li> 
                                            )
                                        }else {
                                            return 
                                        }
                                    }
                                         
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop;