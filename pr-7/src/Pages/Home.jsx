import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/Service";
import { Badge, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    const data = getStorageData();
    const updateData = data.filter((product) => product.id !== id);
    setStorageData(updateData);
    setProductData(updateData);
  };

  useEffect(() => {
    const data = getStorageData();
    setProductData(data);
  }, []);

  return (
    <Container className="py-4">
      <h2
        className="mb-4 text-center"
        style={{
          color: "#d63384",
          fontWeight: 700,
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        💕 Nykaa Products
      </h2>
      <div className="row g-4 justify-content-center">
        {productData.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Card
              className="h-100 border-0 shadow-sm"
              style={{
                borderRadius: "1.5rem",
                backgroundColor: "#fff0f6",
                transition: "all 0.3s",
              }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.productName}
                style={{
                  height: 200,
                  objectFit: "contain",
                  backgroundColor: "#f8d7e5",
                  borderTopLeftRadius: "1.5rem",
                  borderTopRightRadius: "1.5rem",
                  padding: 24,
                }}
              />
              <Card.Body className="d-flex flex-column p-3">
                <h5
                  className="mb-1"
                  style={{ fontWeight: 600, color: "#880e4f" }}
                >
                  {product.productName}
                </h5>
                <p className="text-muted mb-2 small">{product.desc}</p>
                <Badge
                  bg="light"
                  text="dark"
                  className="mb-3"
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.4em 0.6em",
                    backgroundColor: "#f8bbd0",
                  }}
                >
                  {product.category}
                </Badge>
                <p
                  className="mb-1"
                  style={{ color: "#6a1b9a", fontWeight: 500 }}
                >
                  ₹{product.price}
                </p>
                <p
                  className="text-secondary mb-3"
                  style={{ fontSize: "0.85rem" }}
                >
                  Offer:{" "}
                  <strong style={{ color: "#c2185b" }}>
                    {product.offers || "No current offers"}
                  </strong>
                </p>

                 <p className="text-secondary mb-3" style={{ fontSize: "0.85rem" }}>
                  Delivery:{" "}
                  <strong style={{ color: "#8e24aa" }}>
                    {product.delivery || "Not available"}
                  </strong>
                </p>

                <div className="mt-auto d-flex justify-content-between">
                  <Button
                    onClick={() => handleEdit(product.id)}
                    variant="outline-dark"
                    size="sm"
                    style={{
                      borderRadius: "20px",
                      color: "#d63384",
                      borderColor: "#d63384",
                    }}
                  >
                    ✏️ Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    variant="outline-danger"
                    size="sm"
                    style={{ borderRadius: "20px" }}
                  >
                    🗑 Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
