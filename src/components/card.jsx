import React from 'react';

function Card({ imagem, texto }) {
    return (
      <div className="cards">
        <img className="imagemcard" src={imagem} alt={texto} />
        <div className="partebaixocards">
          <p className="textodocard">{texto}</p>
        </div>
      </div>
    );
  }