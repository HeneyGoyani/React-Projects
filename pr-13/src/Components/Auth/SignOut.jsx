import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { registerAsync } from "../../Services/Actions/userAction";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isCreated } = useSelector((state) => state.userReducer);
  const intialState = {
    email: "",
    password: "",
    cpass: "",
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

    console.log("Submit", inputForm);
    dispatch(registerAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated]);

    return (
    <></>
      );
};

export default SignUp;