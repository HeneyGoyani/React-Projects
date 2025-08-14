import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  getAllProductAsync,
} from "../Services/Actions/productAction";
import {
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Pagination,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaClock } from "react-icons/fa";

const Home = ({ searchTerm = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

// const { products = [], isLoading: loading } = useSelector(
//     (state) => state.product || {}
//   );]
const { products = [], loading = false } = useSelector((state) => state.product || {});



  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);

  const handleEdit = (id) => navigate(`/edit-product/${id}`);
  const handleDelete = (id) => dispatch(deleteProductAsync(id));

const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];

  const filteredProducts = products.filter((prod) => {
    const matchesSearch = prod.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || prod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];

    if (sortField === "offer") {
      valA = parseFloat(a.offer?.match(/\d+/)?.[0] || 0);
      valB = parseFloat(b.offer?.match(/\d+/)?.[0] || 0);
    } else if (sortField === "deliveryTime") {
      valA = parseFloat(a.deliveryTime?.match(/\d+/)?.[0] || 0);
      valB = parseFloat(b.deliveryTime?.match(/\d+/)?.[0] || 0);
    } else if (sortField === "price") {
      valA = parseFloat(a.price || 0);
      valB = parseFloat(b.price || 0);
    } else if (sortField === "unit") {
      valA = parseFloat(a.unit?.match(/\d+(\.\d+)?/)?.[0] || 0);
      valB = parseFloat(b.unit?.match(/\d+(\.\d+)?/)?.[0] || 0);
    } else {
      valA = valA?.toString().toLowerCase();
      valB = valB?.toString().toLowerCase();
    }

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#85BB65" }}>
        🛒 <span style={{ color: "#FFF000" }}>Blink</span>it Cart
      </h2>

      <Row className="mb-3">
        <Col md={4} xs={12}>
          <Form.Group>
            <Form.Label>Filter by Category</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4} xs={12}>
          <Form.Group>
            <Form.Label>Sort By</Form.Label>
            <Form.Select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
            >
              <option value="title">Product Name</option>
              <option value="price">Price</option>
              <option value="unit">Unit</option>
              <option value="offer">Offer (%)</option>
              <option value="deliveryTime">Delivery Time (mins)</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4} xs={12}>
          <Form.Group>
            <Form.Label>Order</Form.Label>
            <Form.Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {paginatedProducts.map((prod) => (
              <Col key={prod.id}>
                <Card
                  className="shadow-sm border border-warning h-100 position-relative p-2"
                  style={{ backgroundColor: "#fffde7" }}
                >
                  {prod.offer && (
                    <div
                      className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1"
                      style={{
                        fontSize: "0.75rem",
                        borderBottomRightRadius: "0.5rem",
                      }}
                    >
                      {prod.offer}
                    </div>
                  )}

                  <div
                    className="d-flex justify-content-center align-items-center bg-white"
                    style={{ height: "130px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={prod.image}
                      style={{
                        maxHeight: "100px",
                        objectFit: "contain",
                        width: "auto",
                      }}
                    />
                  </div>

                  <Card.Body className="p-2 d-flex flex-column">
                    <div className="text-muted small d-flex align-items-center mb-1">
                      <Badge bg="light" text="dark">
                        <FaClock className="me-1" size={12} />
                        <span style={{ fontSize: "0.75rem" }}>
                          {prod.deliveryTime || "15 MINS"}
                        </span>
                      </Badge>
                    </div>

                    <Card.Title className="fs-6 fw-semibold mb-1">
                      {prod.title}
                    </Card.Title>

                    <div className="text-muted small mb-2">
                      {prod.desc && <div>{prod.desc}</div>}
                      {prod.unit && (
                        <div>
                          <strong>Unit:</strong> {prod.unit}
                        </div>
                      )}
                    </div>

                    <Badge
                      bg="warning"
                      text="dark"
                      className="mb-3"
                      style={{ width: "fit-content" }}
                    >
                      {prod.category}
                    </Badge>

                    <div className="mb-2">
                      <span className="fw-bold me-2">₹{prod.price}</span>
                      <span className="text-muted text-decoration-line-through">
                        ₹80
                      </span>
                    </div>

                    <div className="d-grid gap-2">
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="w-100 fw-bold"
                        style={{ borderRadius: "0.5rem" }}
                        onClick={() => handleEdit(prod.id)}
                      >
                        ✏️Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="w-100 fw-bold"
                        style={{ borderRadius: "0.5rem" }}
                        onClick={() => handleDelete(prod.id)}
                      >
                        🗑️Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Pagination.Item
                    key={i + 1}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
