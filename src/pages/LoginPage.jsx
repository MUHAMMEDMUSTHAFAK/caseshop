import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    localStorage.setItem("userPhone", phone);

    alert("Login successful!");
    navigate("/checkout"); 
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Login with Phone Number</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control input-modern"
                  placeholder="Enter 10-digit phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
