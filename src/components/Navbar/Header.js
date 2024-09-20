import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import data from "../data.json";
import { AuthContext } from "../authContext";
function Header({ name, ...props }) {
  const { logout } = useContext(AuthContext)
  const [show, setShow] = useState(false);
  const categories = data.categories;
  const { currentUser } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="header-section section sticker header-transparent">
        <div className="container-fluid">
          <div className="row align-center">
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="header-logo">
                <a href="">
                  <img src="../img/logoo.jpg" alt="main logo" />
                  <u>
                    <b>
                      <i>
                        <h1>HomeStayle</h1>
                      </i>
                    </b>
                  </u>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-8  close-menu-btn">
              <nav className="main-menu text-center">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                    <ul className="mega-menu">
                      {categories
                        .filter((item) => !item.parentId) // Lọc những item không có parentId
                        .map((parentItem) => (
                          <li key={parentItem.id}>
                            <a to="#">{parentItem.name}</a>
                            <ul>
                              {categories
                                .filter(
                                  (childItem) =>
                                    childItem.parentId === parentItem.id
                                )
                                .map((childItem) => (
                                  <li key={childItem.id}>
                                    <a href={`/category/${childItem.name}`}>{childItem.name}</a>
                                  </li>
                                ))}
                            </ul>
                          </li>
                        ))}
                    </ul>

                  </li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li>
                    <Link to="/Introduce">Introduce</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li></li>
                  <li></li>
                  <li style={{ margin: '40px 0px' }}>
                    <i class="fas fa-user-alt fa-lg" style={{ color: '#ffb005' }}> </i>{currentUser ? currentUser.name : ""}
                  </li>

                </ul>

              </nav>
            </div>
            <div className="col-lg-2 col-sm-6 col-6 close-menu-btn">
              <div className=" float-end">
                <div className="header-account float-start">
                  <ul>
                    <li>
                      <a
                        className="dropdown-toggle"
                        href="#"
                        id="dropdownAccountBtn"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="pe-7s-config"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownAccountBtn"
                      >
                        <li>
                          <Link to="/login">Log in</Link>
                        </li>
                        <li>
                          <a href="">Register</a>
                        </li>
                     
                        <li>
                          <Link to="/">Check out</Link>
                        </li>
                        <li>
                          <a href="" onClick={logout}>logout</a>
                          {/* // bgiwof khi ấn vào nút này, thì hàm logout bên AuthContext sẽ được gọi, nếu là bn thì bn sẽ là như thế nào, bn làm thử trước nhá */}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="header-cart float-start">
                  <a
                    className="cart-toggle dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    id="dropdownCartBtn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="pe-7s-cart"></i>
                    <span>2</span>
                  </a>
                  <div
                    className="mini-cart-brief dropdown-menu"
                    aria-labelledby="dropdownCartBtn"
                  >
                    <div className="cart-items">
                      <p>
                        You have <span>2 items</span> in your shopping bag
                      </p>
                    </div>
                    <div className="all-cart-product clearfix">
                      <div className="single-cart clearfix">
                        <div className="cart-image">
                          <a href="product-details.html">
                            <img src="img/product/cart-1.jpg" alt="Image" />
                          </a>
                        </div>
                        <div className="cart-info">
                          <h5>
                            <a href="product-details.html">
                              Le Parc Minotti Chair
                            </a>
                          </h5>
                          <p>Price : £9.00</p>
                          <p>Qty : 1</p>
                          <a
                            href="#"
                            className="cart-delete"
                            title="Remove this item"
                          >
                            <i className="pe-7s-trash"></i>
                          </a>
                        </div>
                      </div>
                      <div className="single-cart clearfix">
                        <div className="cart-image">
                          <a href="product-details.html">
                            <img src="img/product/cart-2.jpg" alt="Image" />
                          </a>
                        </div>
                        <div className="cart-info">
                          <h5>
                            <a href="product-details.html">DSR Eiffel chair</a>
                          </h5>
                          <p>Price : £9.00</p>
                          <p>Qty : 1</p>
                          <a
                            href="#"
                            className="cart-delete"
                            title="Remove this item"
                          >
                            <i className="pe-7s-trash"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cart-totals">
                      <h5>
                        Total <span>£12.00</span>
                      </h5>
                    </div>
                    <div className="cart-bottom  clearfix">
                      <a href="checkout.html">Check out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-8 col-8 open-menu-btn">
              <Button onClick={handleShow} className="me-2">
                <i class="fa-solid fa-bars"></i>
              </Button>
              <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <nav className="main-menu text-center textmenu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>

                      </li>

                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/Introduce">Introduce</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-toggle"
                          href="#"
                          id="dropdownAccountBtn"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="pe-7s-config"></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownAccountBtn"
                        >
                          <li>
                            <Link to="/login">Log in</Link>
                          </li>
                          <li>
                            <a href="">Register</a>
                          </li>
                          <li>
                          <a href="" onClick={logout}>logout</a>

                          {/* // bgiwof khi ấn vào nút này, thì hàm logout bên AuthContext sẽ được gọi, nếu là bn thì bn sẽ là như thế nào, bn làm thử trước nhá */}
                        </li>
                        </ul>

                      </li>
                    </ul>
                    <li style={{ margin: '40px 0px' }}>
                        <i class="fas fa-user-alt fa-lg" style={{ color: '#ffb005' }}> </i>{currentUser ? currentUser.name : ""}
                      </li>
                  </nav>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
