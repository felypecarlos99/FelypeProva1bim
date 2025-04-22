import React from 'react';

const Banner = ({ imagem, titulo }) => {
  return (
    <div>
      <img className='imagemdobanner' src={imagem} alt={titulo} />
    </div>
  );
};

export default Banner;