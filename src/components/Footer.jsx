function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">

        <div className="row g-4">

          {/* ABOUT */}
          <div className="col-md-4" id="about">
            <h2 className="fw-bold">MARS</h2>
            <p className="text-light">
              Beauty made for everyone. Discover makeup and beauty
              essentials made to express your style.
            </p>
          </div>

          {/* SHOP */}
          <div className="col-md-2">
            <h5 className="fw-bold">SHOP</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#products"
                  className="text-white text-decoration-none"
                >
                  Products
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#categories"
                  className="text-white text-decoration-none"
                >
                  Categories
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#products"
                  className="text-white text-decoration-none"
                >
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div className="col-md-3">
            <h5 className="fw-bold">HELP</h5>

            <ul className="list-unstyled">
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Shipping & Delivery</li>
              <li className="mb-2">Returns & Refunds</li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="col-md-3">
            <h5 className="fw-bold">FOLLOW US</h5>

            <div className="d-flex gap-3">
              <i className="bi bi-instagram fs-4"></i>
              <i className="bi bi-facebook fs-4"></i>
              <i className="bi bi-youtube fs-4"></i>
            </div>
          </div>

        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 MARS Cosmetics. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;