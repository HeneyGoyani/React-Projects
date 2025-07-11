import { Card, Button } from "react-bootstrap";

const ProductDetail = ({ product, handleDelete, handleEdit }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.category}
        </Card.Subtitle>
        <Card.Text>{product.desc}</Card.Text>
        <Card.Text><strong>Price:</strong> ₹{product.price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" size="sm" onClick={() => handleEdit(product.id)}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductDetail;
