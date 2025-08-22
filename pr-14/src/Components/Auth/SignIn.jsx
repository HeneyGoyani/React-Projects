import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Alert, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync, signInWithGoogleAsync } from "../../Services/Actions/userAction";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.userReducer);

  const [inputForm, setInputForm] = useState({ email: "", password: "" });
  const [validationError, setValidationError] = useState("");

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
    if (validationError) setValidationError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputForm.email || !inputForm.password) {
      setValidationError("Please fill all fields");
      return;
    }
    dispatch(signInAsync(inputForm));
  };

  const handleGoogleLogin = () => {
    dispatch(signInWithGoogleAsync());
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #7887c8ff, #9567c2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card
              className="p-4 shadow-lg"
              style={{
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="text-center mb-4" style={{ color: "#f1f1f1" }}>
                Sign in to access your account
              </h3>

              {error && <Alert variant="danger">{error}</Alert>}
              {validationError && <Alert variant="warning">{validationError}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={inputForm.email}
                    onChange={handleChanged}
                    className="p-3 rounded-3"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "none",
                      color: "#fff",
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={inputForm.password}
                    onChange={handleChanged}
                    className="p-3 rounded-3"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "none",
                      color: "#fff",
                    }}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(45deg, #ff6a00, #ee0979)",
                    border: "none",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Sign In
                </Button>
              </Form>

              <div className="text-center my-3 text-light">— OR —</div>

              <Button
                onClick={handleGoogleLogin}
                className="w-100 py-2 fw-bold"
                style={{
                  background: "linear-gradient(45deg, #4285F4, #34A853)",
                  border: "none",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                <i className="bi bi-google me-2"></i> Sign In with Google
              </Button>

              <div className="text-center mt-4">
                <span className="text-light">Don't have an account? </span>
                <Link to="/signup" className="fw-bold" style={{ color: "#ffdd57" }}>
                  Sign Up
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
