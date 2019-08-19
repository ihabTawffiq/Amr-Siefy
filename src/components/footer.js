import React from 'react' ;
import '../styles/base/_footer.css';

const Footer = (props) => {
    return(
        <footer>
            <div id="footer" className="rectangle2"></div>
            <div className = "home-footer">
                    <div className = "contact-information">
                    <div className = "mobiles">
                        <h4>للتواصل معنا</h4>
                        <hr></hr>
                        <p>01555551836</p>
                        <p>01020138824</p>
                        <p>01112427625</p>
                    </div>
                    <div className = "logos">
                        <h4>  للتواصل معنا عن طريق الفيس بوك</h4>
                        <hr></hr>
                        <a href = "https://www.facebook.com" className="fb-ic">
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a href = "https://www.youtube.com" className = "yt-ic">
                        <i className="fab fa-youtube fa-lg white-text"></i> 
                        </a>
                    </div>
                    </div>
                    <div className = "copy-right">
                        <p>
                            © 2018 Copyright:
                            <a href=""> 404NOTFOUND Team</a>
                        </p>
                    </div>            
            </div>
        </footer>
    );
}

export default Footer;

