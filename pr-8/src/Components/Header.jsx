import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch , FaShoppingCart , FaUser} from 'react-icons/fa';
import logo from '../assets/images/Logo.svg';
import strip from '../assets/images/strip.jpg'; 
import { IoMdArrowDropdown } from "react-icons/io";

const NykaaHeader = () => {
  const handleSignIn = () => {
    console.log("Add Product Is Clicked");
  };

  return (
    <>
       <div className='strip-img'>
           <img src={strip} alt="Nykaa" width={1680} height={40} />
        </div>


    <Navbar bg="white" expand="lg" sticky="top" className="py-2 border-bottom shadow-sm">
      <Container fluid style={{ maxWidth: '1300px' }}>


        <Navbar.Brand as={Link} to="/" className="me-4">
          <img src={logo} alt="Nykaa" width={94} height={45} />
        </Navbar.Brand>


        <Nav className="me-auto align-items-center gap-4">
          <Nav.Link className="text-dark fw-semibold" href="#">Categories</Nav.Link>
          <Nav.Link className="text-dark fw-semibold" href="#">Brands</Nav.Link>
          <Nav.Link className="text-dark fw-semibold" href="#">Luxe</Nav.Link>
          <Nav.Link className="text-dark fw-semibold" href="#">Nykaa Fashion</Nav.Link>
          <Nav.Link className="text-dark fw-semibold" href="#">Beauty Advice</Nav.Link>
        </Nav>


        <div className="d-flex align-items-center gap-3">
          

          <Form className="d-flex" style={{ background: '#f3f3f3', borderRadius: '5px' }}>
            <div className="input-group">
              <span className="input-group-text bg-transparent border-0">
                <FaSearch className="text-muted" />
              </span>
              <FormControl
                type="search"
                placeholder="Search on Nykaa"
                className="border-0 bg-transparent"
                style={{ width: '200px' }}
              />
            </div>
          </Form>

         
            <Nav.Link as={Link} to="/login" className="d-flex align-items-center text-dark fw-semibold">
              <FaUser className="me-1" />
              Login <IoMdArrowDropdown className="ms-1" />
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center text-dark fw-semibold">
              <FaShoppingCart className="me-1" />
              Cart
            </Nav.Link>

  
          <Link to="/add-product">
              <Button
                style={{
                  backgroundColor: "#e80071",
                  border: '1px',
                  fontWeight: "600",
                  color: "#fff",
                  padding: "6px 16px",
                  transition: "background-color 0.3s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e45e94ff";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#e80071";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Add Product
              </Button>
            </Link>

       
 
        </div>

      </Container>
    </Navbar>

          <div className="category-strip border-bottom py-2" style={{ backgroundColor: "#fff" }}>
        <Container fluid style={{ maxWidth: '1165px' }}>
          <Nav className="justify-content-start gap-4 text-nowrap overflow-auto">
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Makeup</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Skin</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Hair</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Appliances</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Bath & Body</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Natural</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Mom & Baby</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Health & Wellness</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Men</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Fragrance</Nav.Link>
            <Nav.Link className="text-muted px-0 fw-semibold" href="#">Lingerie & Accessories</Nav.Link>
          
          
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default NykaaHeader;