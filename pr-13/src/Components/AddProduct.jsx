import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import { useDispatch , useSelector} from "react-redux";
import { addProductAsync } from "../Services/Actions/productAction";
import { uploadImage } from "../Services/imageUpload"

const AddProduct = () => {
  const { isCreated, isError} = useSelector(state => state.productReducer);
  const { user } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    productName: "",
    desc: "",
    unit: "",
    price: "",
    category: "",
    image: "",
    offer: "",
    deliveryTime: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
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
    const id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    dispatch(addProductAsync(inputForm));
    navigate("/");
  };

  useEffect(() => {
    if(isCreated){
      navigate("/")
    }
  }, [isCreated]);
  useEffect(()=> {
    if(!user){
      navigate("/signIn")
    }
  }, [user]);

  return (
    <Container style={{ maxWidth: "720px", marginTop: "50px" }}>
      <Card className="shadow p-4 border-0 rounded-4" style={{
          maxWidth: "750px",
          background: "linear-gradient(to right, #f0fff0, #d4fcd6)",
          borderRadius: "16px",
        }}>
        <h2 className="text-center mb-4 fw-bold text-success">🛒 Add Product</h2>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="e.g., Fresh Mangoes"
                value={inputForm.productName}
                onChange={handleChanged}
                required
              />
            </Col>

            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Description</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                placeholder="e.g., Juicy & Sweet"
                value={inputForm.desc}
                onChange={handleChanged}
                required
              />
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="e.g., 99"
                value={inputForm.price}
                onChange={handleChanged}
                required
              />
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Unit</Form.Label>
              <Form.Control
                type="text"
                name="unit"
                placeholder="e.g., 500g, 1L"
                value={inputForm.unit}
                onChange={handleChanged}
                required
              />
            </Col>

            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Category</Form.Label>
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChanged}
                required
              >
                <option value="" disabled hidden>Select a category</option>
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
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Offer (%)</Form.Label>
              <Form.Control
                type="text"
                name="offer"
                placeholder="e.g., 20% off"
                value={inputForm.offer}
                onChange={handleChanged}
              />
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Delivery Time</Form.Label>
              <Form.Control
                type="text"
                name="deliveryTime"
                placeholder="e.g., 15 mins"
                value={inputForm.deliveryTime}
                onChange={handleChanged}
              />
            </Col>

            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Image URL</Form.Label>
              <Form.Control
                type="file"
                name="image"
                placeholder="Paste a valid image URL"
                // value={inputForm.image}
                onChange={handleFileChanged}
                // required
              />
            </Col>
          </Row>

          <div className="d-grid mt-4">
            <Button
              type="submit"
              size="lg"
              style={{
                backgroundColor: "#16a34a",
                border: "none",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              ➕ Add Product
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AddProduct;