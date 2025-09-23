import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="text-center bg-light py-5" style={{backgroundImage:"url('https://i.pinimg.com/1200x/71/37/a3/7137a39909496f8ef250ca480cd5acb1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="container">
          <h1 className="fw-bold text-white display-5">Design Your Own Case</h1>
          <p className="lead text-white ">Customize phone cases that match your style</p>
          <Link to="/products" className="btn  btn-lg mt-3 text-white" style={{backgroundColor:'black'}}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <h2 className="text-center mb-5">Explore Our Categories</h2>
          <div className="row shadow-lg">
            <div className="col-md-3 col-sm-6 mb-4 ">
              <Link to="/products">
                <img
                  src="https://zapvi.in/wp-content/uploads/2024/07/Zapvi-Banner-2.png"
                  className="img-fluid rounded shadow-lg"
                  alt="Mobile Cover"
                />
              </Link>
              
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <Link to="/products/snap-case">
                <img
                  src="https://zapvi.in/wp-content/uploads/2024/07/12-min-1.png"
                  className="img-fluid rounded shadow-lg"
                  alt="Snap Case"
                />
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <Link to="/products/soft-silicone">
                <img
                  src="https://zapvi.in/wp-content/uploads/2024/07/14-min-1.png"
                  className="img-fluid rounded shadow-lg"
                  alt="Soft Silicone Case"
                />
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <Link to="/products/glossy-metal">
                <img
                  src="https://zapvi.in/wp-content/uploads/2021/03/Metal-TPU-Mobile-Case-min.png"
                  className="img-fluid rounded shadow-lg"
                  alt="Glossy Metal TPU Case"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
