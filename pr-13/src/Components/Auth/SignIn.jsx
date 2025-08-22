import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync, signInWithGoogleAsync } from "../../Services/Actions/userAction";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, error} = useSelector(state => state.userReducer);
  const intialState = {
    email: "",
    password: "",
  };
  const [inputForm, setInputForm] = useState(intialState);


  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAsync(inputForm));
  };

  const handleGoogleLogin = () => {
    dispatch(signInWithGoogleAsync());
  }

  useEffect(() => {
    if(user){
        navigate("/")
    }
  }, [user]);


  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Sign In</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {validationError && <Alert variant="warning">{validationError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={inputForm.email}
                onChange={handleChanged}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password (min 6 characters)"
                name="password"
                value={inputForm.password}
                onChange={handleChanged}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign In
            </Button>
          </Form>

          <Button
            variant="danger"
            onClick={handleGoogleLogin}
            className="w-100 mb-3"
          >
            Sign In with Google
          </Button>

          <div className="text-center">
            <span>Don't have an account? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Container>

      );
};
  export default SignIn;