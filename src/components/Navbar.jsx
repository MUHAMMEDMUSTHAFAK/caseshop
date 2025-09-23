import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2 text-white" style={{ letterSpacing: '1px' }} to="/">covéra</Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold nav-hover" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2 position-relative">
              <Link className="nav-link text-white fw-semibold nav-hover" to="/cart">
                Cart
                {cartCount > 0 && (
                  <span className="badge bg-white text-black ms-1">{cartCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold nav-hover" to="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
