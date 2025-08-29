import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email }));
    setError("");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(-45deg, #6a11cb, #2575fc, #ff6a00, #ee0979)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .glass-card {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0px 8px 32px rgba(0,0,0,0.25);
          }

          .form-control {
            border-radius: 12px;
            padding: 14px;
            background: rgba(255,255,255,0.9);
            border: none;
            box-shadow: inset 2px 2px 6px rgba(0,0,0,0.1),
                        inset -2px -2px 6px rgba(255,255,255,0.6);
            transition: all 0.3s ease-in-out;
          }

          .form-control:focus {
            box-shadow: 0px 0px 8px rgba(37, 117, 252, 0.6);
            transform: scale(1.02);
          }

          .btn-login {
            border-radius: 14px;
            background: linear-gradient(45deg, #2575fc, #6a11cb);
            border: none;
            font-weight: 600;
            padding: 14px;
            transition: 0.3s;
            color: #fff;
            box-shadow: 0px 4px 12px rgba(37, 117, 252, 0.5);
          }

          .btn-login:hover {
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            box-shadow: 0px 6px 16px rgba(106, 17, 203, 0.6);
            transform: translateY(-2px);
          }
        `}
      </style>

      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Card
          style={{ width: "420px", borderRadius: "20px" }}
          className="p-4 glass-card"
        >
          <h2 className="text-center fw-bold mb-2" style={{ color: "#fff" }}>
            🔐 Welcome Back
          </h2>
          <p className="text-center text-light mb-4" style={{ opacity: "0.85" }}>
            Sign in to continue to your dashboard
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-white">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-white">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {error && (
              <div className="text-danger mb-3 text-center fw-semibold">
                {error}
              </div>
            )}

            <div className="d-grid mb-3">
              <Button type="submit" className="btn-login">
                 Login
              </Button>
            </div>

            <div className="text-center mt-3">
              <span className="text-white">Don’t have an account?</span>{" "}
              <Link to="/signup" style={{ color: "#ffeb3b", fontWeight: "600" }}>
                Sign Up
              </Link>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
