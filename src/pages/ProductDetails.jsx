import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../assets/products.json";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [customText, setCustomText] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...product, customText });
    alert("Product added to cart!");
  };

  if (!product) return <p className="text-center py-5">Product not found!</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{product.name}</h2>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" style={{maxHeight:"300px"}}/>
          {customText && <div className="mt-2 text-muted">Preview: {customText}</div>}
        </div>
        <div className="col-md-6">
          <h4>₹{product.price}</h4>
          <p>{product.description || "High quality phone case"}</p>
          <input type="text" className="form-control mb-3" placeholder="Custom Text" value={customText} onChange={(e)=>setCustomText(e.target.value)}/>
          <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
