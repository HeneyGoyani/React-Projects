import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("⚠️ All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    const registeredUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
    navigate("/signin");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #ff6a00, #ee0979, #6a11cb, #2575fc)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 10s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        className="shadow-lg border-0"
        style={{
          width: "420px",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <Card.Body className="p-5">
          <h2
            className="text-center fw-bold mb-3"
            style={{ color: "#ffdf6b", letterSpacing: "1px" }}
          >
            📝 Create Account
          </h2>
          <p className="text-center mb-4" style={{ color: "#ddd" }}>
            Join us and explore the dashboard
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow =
                    "0 0 10px rgba(255,255,255,0.6)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                className="rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow =
                    "0 0 10px rgba(255,255,255,0.6)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow =
                    "0 0 10px rgba(255,255,255,0.6)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </Form.Group>

            {error && (
              <div
                className="text-warning text-center mb-3"
                style={{ fontSize: "14px", fontWeight: "600" }}
              >
                {error}
              </div>
            )}

            <div className="d-grid mb-3">
              <Button
                type="submit"
                className="fw-bold"
                style={{
                  borderRadius: "30px",
                  padding: "12px 0",
                  background:
                    "linear-gradient(90deg, #ff6a00, #ee0979, #6a11cb)",
                  border: "none",
                  transition: "0.3s",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #6a11cb, #ee0979, #ff6a00)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #ff6a00, #ee0979, #6a11cb)")
                }
              >
                 Register
              </Button>
            </div>

            <div className="text-center" style={{ color: "#eee" }}>
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{
                  color: "#ffdf6b",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default SignUp;
