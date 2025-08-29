import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync, updateProductAsync } from "../Services/Actions/productAction";
import { FaEdit } from "react-icons/fa";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, isLoading } = useSelector((state) => state.product || {});

  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    image: "",
    unit: "",
    offer: "",
    deliveryTime: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({ ...prev, [name]: value }));
  };

        const handleFileChanged = async (e) => {
      let imagePath = await uploadImage(e.target.files[0]);
  
      setInputForm({
        ...inputForm,
        image: imagePath,
      });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAsync(inputForm));
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductAsync(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (product && product.id === id) {
      setInputForm({
        id: product.id,
        title: product.title || "",
        desc: product.desc || "",
        price: product.price || "",
        category: product.category || "",
        image: product.image || "",
        unit: product.unit || "",
        offer: product.offer || "",
        deliveryTime: product.deliveryTime || "",
      });
    }
  }, [product, id]);

    if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <h4>Loading product...</h4>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card
        className="p-4 shadow-lg border-0 mx-auto"
        style={{
          maxWidth: "750px",
          background: "linear-gradient(to right, #f0fff0, #d4fcd6)",
          borderRadius: "16px",
        }}
      >
        <h2 className="text-center text-success fw-bold mb-4">
          <FaEdit className="me-2 mb-1" /> Edit Product
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product title"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter product description"
              name="desc"
              rows={3}
              value={inputForm.desc}
              onChange={handleChanged}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  value={inputForm.price}
                  onChange={handleChanged}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Unit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 1kg, 500ml"
                  name="unit"
                  value={inputForm.unit}
                  onChange={handleChanged}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Category</Form.Label>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
            >
              <option value="" disabled hidden>Select Category</option>
              <option value="paan">Paan</option>
              <option value="dairy">Dairy</option>
              <option value="fruits">Fruits</option>
              <option value="drinks">Drinks</option>
              <option value="snacks">Snacks</option>
              <option value="breakfast">Breakfast</option>
              <option value="sweet">Sweet</option>
              <option value="bakery">Bakery</option>
              <option value="tea">Tea</option>
              <option value="atta">Atta</option>
              <option value="masala">Masala</option>
              <option value="sauces">Sauces</option>
              <option value="meat">Meat</option>
              <option value="organic">Organic</option>
              <option value="baby">Baby</option>
              <option value="pharma">Pharma</option>
              <option value="cleaning">Cleaning</option>
              <option value="home">Home</option>
              <option value="personal">Personal</option>
              <option value="pet">Pet</option>
            </Form.Select>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Offer (%)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 10% off"
                  name="offer"
                  value={inputForm.offer}
                  onChange={handleChanged}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Delivery Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 15 mins"
                  name="deliveryTime"
                  value={inputForm.deliveryTime}
                  onChange={handleChanged}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Image URL</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter image URL"
              name="image"
              onChange={handleFileChanged}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 fw-bold text-white"
            style={{
              backgroundColor: "#00a82d",
              border: "none",
              padding: "12px 0",
              fontSize: "17px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#1cc954";
              e.target.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#00a82d";
              e.target.style.transform = "scale(1)";
            }}
          >
            Update Products
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EditProduct;