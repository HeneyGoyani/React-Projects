import { Button, Container, Form, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentAsync,
  updateStudentAsync,
} from "../Services/Actions/studentAction";

const EditStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { student, isLoading } = useSelector((state) => state.student || {});

  const initialState = {
    id: "",
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

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudentAsync(inputForm));
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      dispatch(getStudentAsync(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (student && Object.keys(student).length > 0) {
      setInputForm(student);
    }
  }, [student]);

  if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <h4>Loading student...</h4>
      </Container>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        padding: "20px",
      }}
    >
      <Card
        className="shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "720px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Card.Body className="p-5">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#2c3e50" }}>
            ✏️ Edit Student
          </h2>

          <Form onSubmit={handleSubmit}>
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter full name" },
              { label: "Roll Number", name: "rollNumber", type: "text", placeholder: "Enter roll number" },
              { label: "Class", name: "class", type: "text", placeholder: "Enter class" },
              { label: "Section", name: "section", type: "text", placeholder: "Enter section" },
              { label: "Age", name: "age", type: "number", placeholder: "Enter age" },
              { label: "Address", name: "address", type: "text", placeholder: "Enter address" },
              { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter phone number" },
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
                  className="rounded-pill shadow-sm"
                />
              </Form.Group>
            ))}

            {/* Profile Image URL */}
            <Form.Group className="mb-4 text-center">
              <Form.Label className="fw-semibold">Profile Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Enter image URL"
                value={inputForm.image}
                onChange={handleChanged}
                className="shadow-sm"
                style={{ borderRadius: "15px" }}
              />
              {inputForm.image && (
                <div className="mt-3">
                  <img
                    src={inputForm.image}
                    alt="Preview"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #ff7eb3",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              )}
            </Form.Group>

            {/* Submit Button */}
            <div className="d-grid">
              <Button
                type="submit"
                className="fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
                  border: "none",
                  padding: "12px",
                  fontSize: "17px",
                  borderRadius: "50px",
                  boxShadow: "0 6px 12px rgba(255, 118, 136, 0.4)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                ✅ Update Student
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditStudent;
