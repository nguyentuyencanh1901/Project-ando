import React from "react";

function Contact() {

    return (

        <div class="wrapper">
            <div className="container-fluid" >

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/banner2.jpg" alt="Image" title="#slider-caption-1 " width={'100%'} />

                    </div>
                </div>
            </div>

          

            <div class="page-section section pt-100 pb-100">
            <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0px'}}>CONTACT</h1>
                <div class="container">
                    <div class="row">
                        <div class="contact-info col-lg-4 col-12 mb-40">
                        <h4 className="widget-title">Contact Info</h4>
                            <p><strong>Address :</strong> <span>238 Hoang Quoc Viet, Cau Giay, Hanoi, Vietnam</span></p>
                            <p><strong>Phone :</strong> <span>+1234567890</span></p>
                            <p><strong>Email :</strong> <a href="#">loveIndia@outlook.com</a></p>
                            <div class="contact-social">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a>
                                <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i class="fa fa-pinterest"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener"><i class="fa fa-instagram"></i></a>
                            </div>

                        </div>
                        <div class="contact-form col-lg-8 col-12 mb-40">
                            <h3>Contact form</h3>
                            <form id="contact-form" action="https://whizthemes.com/mail-php/other/mail.php" method="post">
                                <div class="row">
                                    <div class="col-md-4 col-12 mb-20">
                                        <label for="name">Your Name</label>
                                        <input id="name" name="con_name" type="text" />
                                    </div>
                                    <div class="col-md-4 col-12 mb-20">
                                        <label for="email">Your Email</label>
                                        <input id="email" name="con_email" type="email" />
                                    </div>
                                    <div class="col-md-4 col-12 mb-20">
                                        <label for="subject">Subject</label>
                                        <input id="subject" name="con_subject" type="text" />
                                    </div>
                                    <div class="col-12 mb-20">
                                        <label for="message">Message</label>
                                        <textarea id="message" name="con_message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <input type="submit" value="send" />
                                    </div>
                                </div>
                            </form>
                           
                        </div>
                        <div class="col-12 ">

                            <div class="contact-map">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6267803875458!2d105.78059437597011!3d21.04761438712936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd484c53%3A0x4201b89c8bdfd968!2zMjM4IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1726738683923!5m2!1svi!2s" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;