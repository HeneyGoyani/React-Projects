import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/Service";

const AddProduct = () => {
  const navigate = useNavigate();
  const initialState = {
    productName: "",
    desc: "",
    price: "",
    delivery: "",
    image: "",
    offers: "",
    category: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    let data = getStorageData();
    data.push(inputForm);
    setStorageData(data);
    navigate("/");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div
        style={{
          borderRadius: "1.5rem",
          padding: "35px",
          maxWidth: "920px",
          width: "100%",
          background: "linear-gradient(to bottom right, #fff0f6, #ffe3ec)",
          boxShadow: "0 12px 30px rgba(255, 105, 180, 0.2)",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#d63384", fontWeight: "700" }}
        >
           Add Nykaa Product
        </h2>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#880e4f" }}>Product Name *</Form.Label>
              <Form.Control
                className="rounded-pill shadow-sm"
                type="text"
                placeholder="Enter product name"
                name="productName"
                value={inputForm.productName}
                onChange={handleChanged}
                required
              />
            </Col>
            <Col>
              <Form.Label style={{ color: "#880e4f" }}>Price (₹)</Form.Label>
              <Form.Control
                className="rounded-pill shadow-sm"
                type="number"
                placeholder="Enter price"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#880e4f" }}>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter product description"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                required
                style={{ borderRadius: "1rem", boxShadow: "0 0 6px #f8bbd0" }}
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#880e4f" }}>Category</Form.Label>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              className="rounded-pill shadow-sm"
              required
            >
              <option value="" disabled hidden>Select Category</option>
              <option value="makeup">Makeup</option>
              <option value="skin">Skin</option>
              <option value="hair">Hair</option>
              <option value="appliances">Appliances</option>
              <option value="Bath & Body">Bath & Body</option>
              <option value="Natural">Natural</option>
              <option value="mom & baby">Mom & Baby</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="men">Men</option>
              <option value="fragrance">Fragrance</option>
              <option value="Lingerie & Accessories">Lingerie & Accessories</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#880e4f" }}>Offers</Form.Label>
              <Form.Control
                className="rounded-pill shadow-sm"
                type="text"
                placeholder="10% off, Buy 1 Get 1"
                name="offers"
                value={inputForm.offers}
                onChange={handleChanged}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#880e4f" }}>Delivery Estimate *</Form.Label>
              <Form.Control
                className="rounded-pill shadow-sm"
                type="text"
                placeholder="2-5 business days"
                name="delivery"
                value={inputForm.delivery}
                onChange={handleChanged}
                required
              />
            </Col>
            <Col>
              <Form.Label style={{ color: "#880e4f" }}>Image URL *</Form.Label>
              <Form.Control
                className="rounded-pill shadow-sm"
                type="text"
                placeholder="https://example.com/image.jpg"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                required
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-center mt-4">
            <Button
              type="submit"
              style={{
                backgroundColor: "#e91e63",
                border: "none",
                padding: "0.6rem 2rem",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              🛒 Add To Bag
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
