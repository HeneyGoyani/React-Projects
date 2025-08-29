import { Navbar, Container, Nav, Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { useEffect, useState } from "react";
import { FaEnvelope, FaUser, FaUsers, FaSearch } from "react-icons/fa";

const StudentHeader = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email) {
      setUserEmail(storedUser.email);
    } else {
      setUserEmail("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserEmail("");
    navigate("/signin");
  };

  // Dashboard Items
  const dashboardItems = [
    {
      icon: <FaEnvelope size={40} color="#fff" />,
      title: "Checking Message",
      description: "Stay updated with all your important JB messages.",
      bg: "linear-gradient(135deg, #6c63ff, #928DFF)",
    },
    {
      icon: <FaUser size={40} color="#fff" />,
      title: "Update My Information",
      description: "Keep your profile fresh and updated with new info.",
      bg: "linear-gradient(135deg, #FF6A88, #FF99AC)",
    },
    {
      icon: <FaUsers size={40} color="#fff" />,
      title: "Join with JB Daimond",
      description: "Be a part of our strong JB Daimond community.",
      bg: "linear-gradient(135deg, #00B09B, #96C93D)",
    },
    {
      icon: <FaSearch size={40} color="#fff" />,
      title: "Search Sankul Directory",
      description: "Find your peers and seniors in the Sankul directory.",
      bg: "linear-gradient(135deg, #F7971E, #FFD200)",
    },
  ];

  // Filter logic
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredItems(dashboardItems);
    } else {
      const results = dashboardItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
    }
  }, [searchTerm]);

  // Add Student handler (restrict before login)
  const handleAddStudent = () => {
    if (!userEmail) {
      navigate("/signin"); // redirect if not logged in
    } else {
      navigate("/add-student"); // allow if logged in
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #76B82A, #4E9F3D)",
          color: "#fff",
          padding: "10px 0",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <Container
          className="d-flex justify-content-between align-items-center"
          style={{ maxWidth: "1672px", height: "60px" }}
        >
          <div className="fw-bold fs-6">
            📞 Sales: <span className="fw-normal">080 47091894</span>
          </div>

          {/* Search Bar */}
          <Form className="d-flex" style={{ width: "350px" }}>
            <Form.Control
              type="search"
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: "20px",
                padding: "6px 15px",
                border: "none",
              }}
            />
          </Form>

          <div className="d-flex align-items-center gap-3">
            {userEmail ? (
              <>
                <span className="fw-semibold text-white">👋 {userEmail}</span>
                <Button
                  variant="danger"
                  className="fw-semibold shadow-sm px-3"
                  onClick={handleLogout}
                >
                  Logout 🔓
                </Button>
              </>
            ) : (
              <Button
                variant="warning"
                className="fw-semibold shadow-sm px-4"
                onClick={() => navigate("/signin")}
              >
                Login 🔐
              </Button>
            )}
          </div>
        </Container>
      </div>

      {/* Logo + Navbar */}
      <Navbar expand="lg" className="py-3 shadow-sm" style={{ background: "#fff" }}>
        <Container
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "1672px", height: "92px" }}
        >
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Logo" style={{ height: "100px" }} />
          </Link>

          <Nav className="align-items-center gap-4">
            {["HOME", "PRODUCT VIDEOS", "PRODUCTS", "SOLUTIONS", "CONTACT US"].map(
              (item, i) => (
                <Nav.Link
                  key={i}
                  as={Link}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="fw-semibold text-dark nav-hover"
                  style={{ fontSize: "16px" }}
                >
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>

          {/* Restricted Add Student */}
          <Button
            onClick={handleAddStudent}
            className="fw-semibold px-4 shadow-sm"
            style={{
              borderRadius: "40px",
              background: "linear-gradient(45deg, #ba2e7e, #af4949)",
              border: "none",
              color: "white",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "linear-gradient(45deg, #2575fc, #6a11cb)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "linear-gradient(45deg, #ba2e7e, #af4949)")
            }
          >
            ➕ Add Student
          </Button>
        </Container>
      </Navbar>

      {/* Dashboard Section */}
      <Container className="text-center my-5" style={{ maxWidth: "1250px" }}>
        <h2 className="fw-bold mb-3"> My JB & Karp Dashboard</h2>
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #6c63ff, #FF6A88)",
            margin: "0 auto 50px auto",
            borderRadius: "2px",
          }}
        ></div>

        <Row className="g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Col key={index} md={3} sm={6}>
                <div
                  className="p-4 text-white rounded-4 shadow-lg dashboard-card"
                  style={{ background: item.bg, transition: "all 0.3s ease" }}
                >
                  <div className="mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="small mt-2">{item.description}</p>
                </div>
              </Col>
            ))
          ) : (
            <p className="text-muted">No product found 🚫</p>
          )}
        </Row>
      </Container>

      <style>{`
        .nav-hover:hover {
          color: #6c63ff !important;
          transform: scale(1.05);
          transition: 0.3s;
        }
        .dashboard-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </>
  );
};

export default StudentHeader;
