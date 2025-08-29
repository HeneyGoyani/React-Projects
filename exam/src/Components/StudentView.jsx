import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Container,
  Spinner,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import { getAllStudentAsync } from "../Services/Actions/studentAction";

const StudentView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { students = [], isLoading: loading } = useSelector(
    (state) => state.student || {}
  );

  useEffect(() => {
    if (students.length === 0) {
      dispatch(getAllStudentAsync());
    }
  }, [dispatch, students]);

  const student = students.find((s) => s.id === id);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!student) {
    return <p className="text-center text-danger mt-5">❌ Student not found!</p>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0 mx-auto student-view-card">
        {/* Profile Image with gradient background */}
        <div className="profile-header text-center">
          {student.image ? (
            <img
              src={student.image}
              alt={student.name}
              className="student-profile-img"
            />
          ) : (
            <div className="placeholder-img">👤</div>
          )}
          <h3 className="student-name mt-3">🎓 {student.name}</h3>
          <p className="student-course">
            {student.course || "Not Enrolled Yet"}
          </p>
        </div>

        <Card.Body className="p-4">
          <Row className="info-row">
            <Col sm={4} className="label">
              📧 Email:
            </Col>
            <Col sm={8}>
              <Badge bg="light" text="dark" className="info-badge">
                {student.email || "N/A"}
              </Badge>
            </Col>
          </Row>

          <Row className="info-row">
            <Col sm={4} className="label">
              📞 Contact:
            </Col>
            <Col sm={8}>
              <Badge bg="secondary" className="info-badge">
                {student.phone || "Not Provided"}
              </Badge>
            </Col>
          </Row>

          <Row className="info-row">
            <Col sm={4} className="label">
              🏠 Address:
            </Col>
            <Col sm={8}>
              <span className="text-dark">{student.address || "N/A"}</span>
            </Col>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              variant="success"
              className="action-btn"
              onClick={() => navigate(`/students/edit/${student.id}`)}
            >
              ✏ Edit
            </Button>
            <Button
              variant="outline-secondary"
              className="action-btn"
              onClick={() => navigate(-1)}
            >
              ⬅ Back
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Extra Styling */}
      <style>{`
        .student-view-card {
          max-width: 650px;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          background: #fff;
        }
        .student-view-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
        }
        .profile-header {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          padding: 40px 20px;
          border-bottom-left-radius: 50% 20%;
          border-bottom-right-radius: 50% 20%;
        }
        .student-profile-img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #fff;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }
        .placeholder-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          border: 5px solid #fff;
        }
        .student-name {
          font-size: 1.6rem;
          font-weight: bold;
        }
        .student-course {
          font-size: 1rem;
          color: rgba(255,255,255,0.85);
        }
        .info-row {
          margin-bottom: 15px;
        }
        .label {
          font-weight: 600;
          color: #6c757d;
        }
        .info-badge {
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 0.95rem;
        }
        .action-btn {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 500;
          transition: 0.3s;
        }
        .action-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </Container>
  );
};

export default StudentView;
