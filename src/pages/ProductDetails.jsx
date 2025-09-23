import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; 
function ProductDetails() {
  const [customText, setCustomText] = useState("");
  const { addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    name: "Classic Black Case",
    price: 299,
    image: "/case1.jpg",
    description: "A sleek and durable black phone case that protects your device."
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, customText };
    addToCart(productToAdd); 
    alert("Product added to cart!");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{product.name}</h2>

      <div className="row">
        <div className="col-md-6 text-center">
          <div className="position-relative d-inline-block">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "5px 10px",
                borderRadius: "5px"
              }}
            >
              {customText}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4>₹{product.price}</h4>
          <p>{product.description}</p>

          <div className="mb-3">
            <label className="form-label">Enter Custom Text:</label>
            <input
              type="text"
              className="form-control"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Type your message here"
            />
          </div>

          <button className="btn btn-dark" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
