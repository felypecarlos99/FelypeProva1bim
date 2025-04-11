import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <div className='body'>
        <div className="retangulo1">
          <header className="header">
            <img className="imagemheader" src='https://th.bing.com/th/id/OIP.a8SVLn_GcB5nQ9gQ2LdgaAHaHa?rs=1&pid=ImgDetMain'></img>
            <p className='textoheader'>LOJA CHUTEIRAS</p>
          </header>
            <div>
                <img className="img"
                 src="https://shoxstore.com.br/rev-img/banner_principal_2025.webp"
                alt="Neymar"/>
       </div>
</div>

 <div className="retangulo2">
               <div className="cards">
            <img className="imagemcard"
                src="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-phantom-gx-campo1-f4af38a123ef3f678a17164922163085-1024-1024.png"
                alt="Neymar 2022"/>
<div className="partebaixocards">
 <p className="textodocard">Phantom GX</p>
</div>
</div>

<div className="cards">
              <img className="imagemcard"
               src="https://tfdfjz.vtexassets.com/arquivos/ids/336779/chuteira-campo-nike-masculina-vapor-16-fq8441-400-azul-fq8441-400-6-.jpg?v=638636844561100000"
               alt="Neymar 2014"/>
<div className="partebaixocards">
<p className="textodocard">Vapor 16</p>
</div>
</div>

<div className="cards">
                 <img className="imagemcard"
                 src="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-air-zoom-mercurial-vapor-pro-society-011-88b2a848e567d1675016657243210283-1024-1024.jpeg"
                alt="Neymar 2018"/>
<div className="partebaixocards">
<p className="textodocard">Air Zomm Mercurial</p>
</div>
</div>
</div>

</div>

        
        {/*  <!--oi vc--> */}
    </>
  )
}

export default App
