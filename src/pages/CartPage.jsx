import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Your Cart</h2>
      {cartItems.length === 0 ? <p className="text-center fs-5">Your cart is empty!</p> : (
        <>
        <div className="row">
          {cartItems.map(item => (
            <div key={item.id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100 hover-lift">
                <div className="row g-0 align-items-center">
                  <div className="col-4 text-center p-2">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" style={{maxHeight:"150px"}}/>
                  </div>
                  <div className="col-8 p-3">
                    <h5>{item.name}</h5>
                    {item.customText && <p className="text-muted small">"{item.customText}"</p>}
                    <p className="fw-bold">₹{item.price}</p>
                    <button className="btn btn-danger btn-sm mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-dark text-white rounded shadow-sm">
          <h4>Total: ₹{totalPrice}</h4>
          <div>
            <Link to="/checkout" className="btn btn-light fw-bold me-2">Checkout</Link>
            <button className="btn btn-danger fw-bold" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
