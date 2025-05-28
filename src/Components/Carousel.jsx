import React from 'react';

const Carousel = () => {
    return (
         <div className="carousel w-full max-h-[760px] rounded-3xl my-18
        ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="
      https://i.ibb.co/G48Mc8x9/ilyuza-mingazova-Aa-HH2-WWD7-FM-unsplash-1.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/60gZ5pK0/daniil-silantev-X-a-J5-W-l-VXs-unsp.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/4nQMVrqj/ivo-sousa-martins-Rgi-ULee-LUMQ-un.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/qMvnYgpG/ilyuza-mingazova-8-ZD0oi-Nwpto-unsplash-1.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
       </div>
    );
};

export default Carousel;