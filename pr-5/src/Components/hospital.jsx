import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from 'react-id-generator';
// import ProductDetail from "./ProductDetail.jsx";

const getStorageData = () => {
  return JSON.parse(localStorage.getItem("Products")) || [];
};

const Products = () => {
  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    image: ""
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [productData, setProductData] = useState(getStorageData());
  const [isEdit, setIsEdit] = useState(false);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    const { title, desc, price, category, image } = inputForm;
    if (!title || !desc || !price || !category || !image) {
      alert("Please fill in all fields.");
      return;
    }

    if (isEdit) {
      const updatedData = productData.map(product =>
        product.id === inputForm.id ? inputForm : product
      );
      setProductData(updatedData);
      setIsEdit(false);
    } else {
      const newProduct = {
        ...inputForm,
        id: generateUniqueId({ length: 6, useLetters: false })
      };
      setProductData([...productData, newProduct]);
    }

    setInputForm(initialState);
  };

  const handleDelete = (id) => {
    const updatedData = productData.filter(product => product.id !== id);
    setProductData(updatedData);
  };

  const handleEdit = (id) => {
    const singleRec = productData.find(product => product.id === id);
    setInputForm(singleRec);
    setIsEdit(true);
  };

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(productData));
  }, [productData]);

  return (
    <>
      <Container>
        <h1>{isEdit ? "Edit" : "Add"} Product</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Title</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                value={inputForm.title}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Description</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Price</Form.Label>
            <Col sm="6">
              <Form.Control
                type="number"
                placeholder="Enter Price"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Category</Form.Label>
            <Col sm="6">
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChanged}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Home Appliances">Home Appliances</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Image</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Image URL"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Button type="submit">
            {isEdit ? "Update" : "Add"} Product
          </Button>
        </Form>
      </Container>

      <hr />

      <Container>
        <h1>View Data</h1>
        <div className="d-flex flex-wrap gap-3">
          {productData.map(product => (
            <ProductDetail
              key={product.id}
              product={product}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
