import './Banner.css';
import banner from '../assets/images/banner.jpg';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} className="banner-img" alt="Banner" />
      <div className="banner-overlay">
        <Container>
          <h2 className="banner-title">BLOG</h2>
          <p className="banner-p">Home / Blog Left Side Bar</p>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
