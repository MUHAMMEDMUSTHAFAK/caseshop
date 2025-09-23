import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../assets/products.json";

function Products() {
  const [modelFilter, setModelFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { addToCart } = useContext(CartContext); // <-- Use addToCart directly

  const filteredProducts = products
    .filter((product) => !modelFilter || product.model === modelFilter)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Products</h2>

      <div className="d-flex justify-content-center mb-4">
        <select
          className="form-select w-auto me-3"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
        >
          <option value="">All Models</option>
          <option value="iPhone 14">iPhone 14</option>
          <option value="Samsung S23">Samsung S23</option>
        </select>

        <select
          className="form-select w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)} 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
