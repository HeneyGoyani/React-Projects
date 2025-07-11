import './Categories.css';
import { Col, Container, Form, Row, Badge } from 'react-bootstrap';
import serve from '../assets/images/serve.jpg'
import serve2 from '../assets/images/serve-2.jpg'
import serve3 from '../assets/images/serve-3.jpg'
import { IoSearchSharp } from "react-icons/io5";
import post1 from '../assets/images/post1.jpg'
import post2 from '../assets/images/post2.jpg'
import post3 from '../assets/images/post3.jpg'
import PaginationStatic from '../Components/Pagination.jsx'


const Category = () => {

return(
<Container fluid className="category-container" style={{ maxWidth: '1200px'}}>
    <Row>
        <Col md={3} className="leftside">
        <Form className='search-bar mb-4'>
                
                <input type="text" placeholder="search..."/>

                <IoSearchSharp className='search-icon'/>
        </Form>
        <div className="section"> 
            <h5 className="section-title">CATEGORIES</h5><hr/>
            <ul className="section-ul">
                <li>Decorate</li><hr/>
                <li>Even</li><hr/>
                <li>Gallery</li><hr/>
                <li>Recipe</li><hr/>
                <li>Resturant Food</li>
            </ul>
        </div>

        <div className="post">

            <h5 className="post-title">RECENT POST</h5><hr/>
            <div className="post-sec d-flex">
                <div className='col'>
                    <img src={post1} alt="post1"  className='post-img '/>
                </div>
                <div className="post-text col flew-wrap-col">
                   <h6>SEPTEMBER 1, 2020</h6>
                   <p className='post-p'>Possession so comparison inquietu</p>
                </div>
            </div>
            

             <div className="post-sec d-flex">
                <div className='col'>
                    <img src={post2} alt="post1"  className='post-img '/>
                </div>
                <div className="post-text col flew-wrap-col">
                <h6>SEPTEMBER 3, 2020</h6>
                <p className='post-p'>OFFERS MADE SPECIALLY FOR KIDS</p>
            </div>
            </div>


            <div className="post-sec d-flex">
                <div className='col'>
                    <img src={post3} alt="post1"  className='post-img '/>
                </div>
                <div className="post-text col flew-wrap-col">
                <h6>SEPTEMBER 10, 2020</h6>
                <p className='post-p'>OUR WONDERFULLY PIZZA NEW TASTES</p>
             </div> 
             </div> 

        </div>
       

        

        <div className="tag">
            <h5 className='tag-title'>TAGS</h5><hr/>
          <div className="tag-btn ">
            <div className="tag-btn1 d-flex ">
            <Badge className='m-1 cook'>Cooking</Badge>
            <Badge className='m-1 food'>Food</Badge>
            <Badge className='m-1 pell'>Pellentesfetque</Badge>
            </div>
            
            <div className="tag-btn2 d-flex">
            <Badge className='m-1 res'>Restaurant Food</Badge>
            <Badge className='m-1 null'>Nulla pellentesque</Badge>
            </div>

           <div className="tag-btn3 d-flex"> 
            <Badge className='m-1 cooki'>Cooking</Badge>
           </div>
        </div>
        </div>
        </Col>


        <Col md={9} className="Section-img pl-0">
        <div className="img-1 ">
             <a href="" className="img-hov ">
                <img src={serve} alt="serving"  className='img-fluid'/>
            </a>
        <div> 
            <h3 className="img-text">By John Doe <span className='img-comment'>0 Comments</span></h3>
        <h2 className="img-poss">
            <a href="">Possession so comparison inquietude he conviction</a>
        </h2>
        <p className='img-p'>There are b  variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
        <a href="" className="img-read">Read more</a>
        </div>
        </div>

        <div className="img-2">
            <a href="" className="img-hov-2">
                <img src={serve2} alt="serving"  className='img-fluid'/>
            </a>
        <h3 className="img-text">By John Doe <span className='img-comment'>0 Comments</span></h3>
        <h2 className="img-poss">
            <a href="">New Cheese Crusts On Pizzas</a>
        </h2>
        <p className='img-p'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
        <a href="" className="img-read">Read more</a>
        </div>

        <div className="img-3">
            <a href="" className="img-hov-3 ">
                <img src={serve3} alt="serving"  className='img-fluid'/>
            </a>
        <h3 className="img-text">By John Doe <span className='img-comment'>0 Comments</span></h3>
        <h2 className="img-poss">
            <a href="">PEPPE’S LAUNCHES HEALTHY PIZZA FOR KIDS</a>
        </h2>
        <p className='img-p'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
        <a href="" className="img-read">Read more</a>
        </div>

       <PaginationStatic/>
        </Col>
    </Row>
</Container>
);
};

export default Category;