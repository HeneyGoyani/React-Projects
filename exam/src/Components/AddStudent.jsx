import { Button, Container, Form, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../Services/Actions/studentAction";

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    name: "",
    rollNumber: "",
    class: "",
    section: "",
    age: "",
    address: "",
    phone: "",
    image: "", 
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputForm.age <= 0) {
      setError("Age must be greater than zero");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const id = generateUniqueId({ length: 6, useLetters: false });
      const formData = { ...inputForm, id };
      await dispatch(addStudentAsync(formData));
      navigate("/");
    } catch (err) {
      setError("Failed to add student. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fceabb, #f8b500, #fceabb, #f8b500, #c6ffdd, #fbd786, #f7797d)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container style={{ maxWidth: "750px" }}>
        <Card
          className="shadow-lg border-0"
          style={{
            borderRadius: "20px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}
        >
          <Card.Body className="p-5">
            <h2
              className="text-center fw-bold mb-4"
              style={{
                background: "linear-gradient(90deg,#ff6a00,#ee0979,#fbd786,#8fd3f4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ✨ Add New Student
            </h2>

            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}

            <Form onSubmit={handleSubmit}>
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "e.g., John Doe" },
                { label: "Roll Number", name: "rollNumber", type: "text", placeholder: "e.g., 101" },
                { label: "Class", name: "class", type: "text", placeholder: "e.g., 10th" },
                { label: "Section", name: "section", type: "text", placeholder: "e.g., A" },
                { label: "Age", name: "age", type: "number", placeholder: "e.g., 15" },
                { label: "Address", name: "address", type: "text", placeholder: "e.g., 123 Main Street" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "e.g., 9876543210" },
              ].map((field, idx) => (
                <Form.Group className="mb-3" key={idx}>
                  <Form.Label className="fw-semibold">{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={inputForm[field.name]}
                    onChange={handleChanged}
                    required
                    className="rounded-pill px-3 py-2 shadow-sm"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid #ddd",
                      transition: "0.3s",
                    }}
                    onFocus={(e) => (e.target.style.border = "2px solid #ff6a00")}
                    onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
                  />
                </Form.Group>
              ))}

              {/* ✅ New Image URL Field */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Profile Image (URL)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  name="image"
                  value={inputForm.image}
                  onChange={handleChanged}
                  className="rounded-pill px-3 py-2 shadow-sm"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid #ddd",
                  }}
                />
              </Form.Group>

              {/* Preview */}
              {inputForm.image && (
                <div className="text-center mb-3">
                  <img
                    src={inputForm.image}
                    alt="Preview"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "3px solid #ff6a00",
                    }}
                  />
                </div>
              )}

              <div className="d-grid mt-4">
                <Button
                  type="submit"
                  className="fw-bold shadow-lg"
                  style={{
                    borderRadius: "30px",
                    padding: "12px",
                    fontSize: "18px",
                    background: "linear-gradient(90deg,#ff6a00,#ee0979,#fbd786,#8fd3f4)",
                    border: "none",
                    transition: "0.4s",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  disabled={loading}
                >
                  {loading ? "Adding..." : "➕ Add Student"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddStudent;
