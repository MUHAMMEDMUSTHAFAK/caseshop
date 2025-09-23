import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext); 
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [phone, setPhone] = useState("");

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const storedPhone = localStorage.getItem("userPhone");
    if (!storedPhone) {
      setShowLogin(true);
      return;
    }
    alert("Order placed successfully!");
    clearCart(); 
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }
    localStorage.setItem("userPhone", phone);
    setShowLogin(false);
    alert("Login successful! You can now place the order.");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Checkout</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h4 className="mb-4">Billing Details</h4>
            <form onSubmit={handlePlaceOrder}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select
                  className="form-select"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  required
                >
                  <option value="">Select payment</option>
                  <option value="card">Card</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark w-100 mt-3">
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h4 className="mb-4">Order Summary</h4>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name} {item.customText && `("${item.customText}")`}
                  <span>₹{item.price}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between align-items-center fw-bold bg-dark text-white">
                Total <span>₹{totalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login with Phone Number</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogin(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter 10-digit phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
    