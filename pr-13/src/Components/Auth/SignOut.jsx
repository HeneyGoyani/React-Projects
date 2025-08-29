import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Alert, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAsync } from "../../Services/Actions/userAction";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isCreated } = useSelector((state) => state.userReducer || {});

  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
    cpass: "",
  });
  const [formError, setFormError] = useState("");

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
    if (formError) setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputForm.email || !inputForm.password || !inputForm.cpass) {
      setFormError("All fields are required");
      return;
    }
    if (inputForm.password !== inputForm.cpass) {
      setFormError("Passwords do not match");
      return;
    }

    setFormError("");
    dispatch(registerAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated, navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #b26844ff, #dc4f51ff)",
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
              <h3 className="text-center mb-2 fw-bold">Create an Account</h3>
              <p className="text-center mb-4" style={{ color: "#f1f1f1" }}>
                Sign up to get started
              </p>

              {formError && <Alert variant="warning">{formError}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
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

                <Form.Group className="mb-3">
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

                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    name="cpass"
                    value={inputForm.cpass}
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
                  variant="info"
                  type="submit"
                  className="w-100 py-2 fw-bold"
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "12px",
                    background: "linear-gradient(45deg, #43cea2, #185a9d)",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Sign Up
                </Button>
              </Form>

              <div className="mt-4 text-center">
                <span className="text-light">Already have an account? </span>
                <Link to="/signIn" className="fw-bold" style={{ color: "#ffdd57" }}>
                  Sign In
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
