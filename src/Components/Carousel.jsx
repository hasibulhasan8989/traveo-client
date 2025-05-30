import React from 'react';

const Carousel = () => {
    return (
         <div className="carousel w-full max-h-[760px] rounded-3xl my-18
        ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="
      
      https://image.vietnam.travel/sites/default/files/2022-12/shutterstock_1939037803_0.jpg?v=1747817729"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/18174406/bangladesh-places-to-visit-FEATURE-compressed.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://cdn.forevervacation.com/uploads/blog/where-is-ho-chi-minh-city-2554.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://cdn.britannica.com/21/94521-050-247416DA/Ho-Chi-Minh-City-Peoples-Committee-Building.jpg"
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