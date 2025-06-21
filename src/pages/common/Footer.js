function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "#" },
    { name: "Products", path: "#" },
    { name: "Categories", path: "#" },
    { name: "New Arrivals", path: "#" },
    { name: "Special Offers", path: "#" }
  ];

  const companyLinks = [
    { name: "About Us", path: "#" },
    { name: "Our Story", path: "#" },
    { name: "Careers", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" }
  ];

  const socialLinks = [
    { icon: "facebook-f", path: "#" },
    { icon: "twitter", path: "#" },
    { icon: "instagram", path: "#" },
    { icon: "linkedin-in", path: "#" },
    { icon: "youtube", path: "#" }
  ];

  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <span className="fw-bold fs-4 text-primary">DairyDelight</span>
            </div>
            <p className="text-muted mb-4">
              Premium quality dairy products delivered fresh from our farms to your doorstep.
            </p>
            <div className="d-flex align-items-center">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.path} 
                  className="text-white me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 social-icon"
                  aria-label={social.icon}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-uppercase fw-bold mb-4">Shop</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.path} 
                    className="text-muted text-decoration-none footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-uppercase fw-bold mb-4">Company</h5>
            <ul className="list-unstyled">
              {companyLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.path} 
                    className="text-muted text-decoration-none footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                <span>123 Dairy Farm Road, Pune, Maharashtra 411001</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-phone-alt me-3"></i>
                <span>+91 98765 43210</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-envelope me-3"></i>
                <span>hello@dairydelight.com</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="fas fa-clock me-3"></i>
                <span>Mon-Sat: 9AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-muted small">
              &copy; {currentYear} DairyDelight. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-muted small">
              Payment Methods: 
              <i className="fab fa-cc-visa ms-2"></i>
              <i className="fab fa-cc-mastercard ms-2"></i>
              <i className="fab fa-cc-paypal ms-2"></i>
              <i className="fab fa-cc-amazon-pay ms-2"></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;