import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, Card } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/Service";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialState = {
    id: "",
    productName: "",
    desc: "",
    price: "",
    category: "",
    offers: "",
    delivery: "",
    image: "",
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
    let data = getStorageData();
    let updateData = data.map((prod) => (prod.id == id ? inputForm : prod));
    setStorageData(updateData);
    navigate("/");
  };

  useEffect(() => {
    let data = getStorageData();
    let singleRec = data.find((product) => product.id == id);
    setInputForm(singleRec || initialState);
  }, [id]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#fce4ec" }}>
      <Card style={{ minWidth: 400, maxWidth: 600, width: "100%", borderRadius: "2rem", boxShadow: "0 6px 20px rgba(0,0,0,0.1)", backgroundColor: "#fff0f5" }}>
        <Card.Body className="p-5">
          <h2 className="mb-4 text-center" style={{ color: "#e91e63", fontWeight: 700 }}>🛍️ Edit Nykaa Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold text-secondary">Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={inputForm.productName}
                onChange={handleChanged}
                className="rounded-pill shadow-sm px-4 py-2"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold text-secondary">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                className="rounded-4 shadow-sm px-4 py-2"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold text-secondary">Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                className="rounded-pill shadow-sm px-4 py-2"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold text-secondary">Category</Form.Label>
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChanged}
                className="rounded-pill shadow-sm px-4 py-2"
                required
              >
                <option value="" disabled hidden>Select Category</option>
                <option value="Makeup">Makeup</option>
                <option value="Skincare">Skincare</option>
                <option value="Hair">Hair</option>
                <option value="Appliances">Appliances</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Natural">Natural</option>
                <option value="Mom & Baby">Mom & Baby</option>
                <option value="Fragrance">Fragrance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold text-secondary">Offers</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. 10% off, Buy 1 Get 1"
                name="offers"
                value={inputForm.offers}
                onChange={handleChanged}
                className="rounded-pill shadow-sm px-4 py-2"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold text-secondary">Delivery Estimate</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. 3-5 business days"
                name="delivery"
                value={inputForm.delivery}
                onChange={handleChanged}
                className="rounded-pill shadow-sm px-4 py-2"
                required
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <Form.Label className="fw-bold text-secondary">Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                className="rounded-pill shadow-sm px-4 py-2"
                required
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100 rounded-pill text-white"
              style={{ background: "#e91e63", border: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
               Update Product
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditProduct;
