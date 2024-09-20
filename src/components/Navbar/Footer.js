

function Footer() {


    return (
        <>

            <div className="footer-top-section section pb-60 pt-100">
                <div className="container">
                    <div className="row">

                        <div className="footer-widget col-lg-3 col-md-6 col-12 mb-8">
                            <h4 className="widget-title">Contact Info</h4>
                            <p><strong>Address :</strong> <span>238 Hoang Quoc Viet, Cau Giay, Hanoi, Vietnam</span></p>
                            <p><strong>Phone :</strong> <span>+1234567890</span></p>
                            <p><strong>Email :</strong> <a href="#">loveIndia@outlook.com</a></p>

                            <div className="footer-social fix">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.rss.com/" target="_blank" rel="noopener"><i className="fa fa-rss"></i></a>
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>

                        <div className="footer-widget link-widget col-lg-3 col-md-6 col-12 mb-8">
                            <h4 className="widget-title">accounts</h4>
                            <ul>
                                <li><a href="">My Account</a></li>
                                <li><a href="">My Wishlist</a></li>
                                <li><a href="">My Cart</a></li>
                                <li><a href="">Sign In</a></li>
                                <li><a href="">Check out</a></li>
                            </ul>
                        </div>

                        <div className="footer-widget col-lg-3 col-md-6 col-12 mb-8">
                            <h4 className="widget-title">tags</h4>
                            <div className="tag-cloud fix">
                                <a href="">brand</a>
                                <a href="">fashion</a>
                                <a href="">sale</a>
                                <a href="">winter sale</a>
                                <a href="">summer sale</a>
                                <a href="">men</a>
                                <a href="">women</a>
                                <a href="">kids</a>
                            </div>
                        </div>

                        <div className="footer-widget col-lg-3 col-md-6 col-12 mb-8">
                            <h4 className="widget-title">Newsletters</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt.</p>
                            <form className="sunscribe-form">
                                <input type="email" className="email" placeholder="Email Address" />
                                <div className="clear"><input type="submit" className="button" value="Subscribe" /></div>
                            </form>
                        </div>
                    </div>
                    <div className="copyright text-center text-md-start col-md-6 col-12" style={{width:'100%',margin:'20px auto'}}>
                        <p>© 2022 Furnish. Made with <i className="fa fa-heart heart-icon"></i> By <a target="_blank" href="https://hasthemes.com/">HasThemes</a></p>
                    </div>
                </div>

            </div>




        </>
    );
}

export default Footer;