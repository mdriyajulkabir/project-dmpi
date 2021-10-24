import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sumi from '../../Images/sumi_500x300.jpg'
import munni from '../../Images/munni_500x300.jpg'
import prapty from '../../Images/prapty_500x300.jpg'
import zannat from '../../Images/zannat_500x300.jpg'
import toma from '../../Images/toma_500x300.jpg'
import badhon from '../../Images/badhon_500x300.jpg'
import { Carousel } from 'react-bootstrap';

const ProjectMembers = () => {
    return (
        <div>
            <Header></Header>
            <h1>Bitch</h1>
            

<Carousel className='container h-25 w-75'>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={sumi}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mansura Aktar</h3>
      <p>Roll: 143599</p>
      <p>Department: Computer</p>
      <p>Semester: 5th</p>
      <p>Shift: 2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={munni}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Munni Aktar</h3>
      <p>Roll: 143560</p>
      <p>Department: Computer</p>
      <p>Semester: 5th</p>
      <p>Shift: 2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={prapty}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Jannatul Ferdaus Prapty</h3>
      <p>Roll: 926284</p>
      <p>Department: Computer</p>
      <p>Semester: 5th</p>
      <p>Shift: 2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={zannat}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Bengir Zannat</h3>
      <p>Roll: 926317</p>
      <p>Department: Computer</p>
      <p>Semester: 5th</p>
      <p>Shift: 2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={badhon}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Dania Islam Badhon</h3>
      <p>Roll: 141291</p>
      <p>Department: Computer</p>
      <p>Semester: 5th</p>
      <p>Shift: 2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={toma}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Habiba Hossain Toma</h3>
      <p>Roll: 143561</p>
      <p>Department: Computer</p>
      <p>Semester: 5th</p>
      <p>Shift: 2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br /><br /><br />

{/* <img src={toma} height='300px' width='500px' alt="" /> */}




            <Footer></Footer>
        </div>
    );
};

export default ProjectMembers;