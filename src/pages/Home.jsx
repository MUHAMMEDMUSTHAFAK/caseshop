import { Link } from "react-router-dom"

function Home() {
  const categories = [
    { name: "Mobile Cover", path: "mobile-cover", image: "https://zapvi.in/wp-content/uploads/2024/07/Zapvi-Banner-2.png" },
    { name: "Snap Case", path: "snap-case", image: "https://zapvi.in/wp-content/uploads/2024/07/12-min-1.png" },
    { name: "Soft Silicone Case", path: "soft-silicone", image: "https://zapvi.in/wp-content/uploads/2024/07/14-min-1.png" },
    { name: "Glossy Metal TPU Case", path: "glossy-metal", image: "https://zapvi.in/wp-content/uploads/2021/03/Metal-TPU-Mobile-Case-min.png" }
  ];

  return (
    <div>
   <section className="hero-section">
  <div className="overlay"></div>
  <div className="hero-content">
    <h1>Design Your Own Case</h1>
    <p>Customize phone cases that match your style</p>
    <a href="/products" className="btn-shop">
      Shop Now
    </a>
  </div>
</section>


      <section className="p-5">
        <div className="container">
          <h2 className="text-center mb-5">Explore Our Categories</h2>
          <div className="row">
            {categories.map(cat => (
              <div key={cat.path} className="col-md-3 col-sm-6 mb-4">
                <Link to={`/products/${cat.path}`}>
                  <img src={cat.image} alt={cat.name} className="img-fluid rounded shadow-sm"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
