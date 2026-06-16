import React from 'react';
import BookImages from'../../assets/books.jpg'
const Hero = () => {
    return (
<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BookImages}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-semibold my-4">Books to freshen up your bookshelf</h1>
      <button className="btn text-white bg-green-300">view the list</button>
    </div>
  </div>
</div>
    );
};

export default Hero;