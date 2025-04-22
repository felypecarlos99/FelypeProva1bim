import React from 'react';


const Card = ({ imagem, titulo }) => {
            return (
              <div className="cards">
                <img className="imagemcard" src={imagem} alt={titulo} />
                <div className="partebaixocards">
                  <p className="textodocard">{titulo}</p>
                </div>
              </div>
            );
          };
          export default Card