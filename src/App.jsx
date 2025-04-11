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


            <div className="imagembanner">
                <img src="https://shoxstore.com.br/rev-img/banner_principal_2025.webp" alt="chuteira"/>
            </div>
</div>

 <div className="retangulo2">
               <div className="cards">
            <img className="imagemcard"
                src="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-phantom-gx-campo1-f4af38a123ef3f678a17164922163085-1024-1024.png"
                alt="chuteira 1"/>
<div className="partebaixocards">
 <p className="textodocard">Phantom GX</p>
</div>
</div>

<div className="cards">
              <img className="imagemcard"
               src="https://tfdfjz.vtexassets.com/arquivos/ids/336779/chuteira-campo-nike-masculina-vapor-16-fq8441-400-azul-fq8441-400-6-.jpg?v=638636844561100000"
               alt="chuteira 2"/>
<div className="partebaixocards">
<p className="textodocard">Vapor 16</p>
</div>
</div>

<div className="cards">
                 <img className="imagemcard"
                 src="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-air-zoom-mercurial-vapor-pro-society-011-88b2a848e567d1675016657243210283-1024-1024.jpeg"
                alt="chuteira 3"/>
<div className="partebaixocards">
<p className="textodocard">Air Zomm Mercurial</p>
</div>
</div>

<div className="cards">
            <img className="imagemcard"
                src="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-phantom-gx-campo1-f4af38a123ef3f678a17164922163085-1024-1024.png"
                alt="chuteira 4"/>
<div className="partebaixocards">
 <p className="textodocard">Phantom GX</p>
</div>
</div>



</div>
<div className="retangulo2">
               <div className="cards">
            <img className="imagemcard"
                src="https://m.media-amazon.com/images/I/61Pt8iBB6VL._AC_UF894,1000_QL80_.jpg"
                alt="chuteira 5"/>
<div className="partebaixocards">
 <p className="textodocard">Bolognifi Cano Alto</p>
</div>
</div>

<div className="cards">
              <img className="imagemcard"
               src="https://static.netshoes.com.br/produtos/chuteira-campo-puma-one-53-fgag-bdp/28/D14-8438-028/D14-8438-028_zoom1.jpg?ts=1695422136&ims=544x"
               alt="chuteira 6"/>
<div className="partebaixocards">
<p className="textodocard">Puma One 5.3</p>
</div>
</div>

<div className="cards">
                 <img className="imagemcard"
                 src="https://images.tcdn.com.br/img/img_prod/550428/chuteira_campo_penalty_k_era_8_infantil_2605_1_20190905114202.jpg"
                alt="chuteira 7"/>
<div className="partebaixocards">
<p className="textodocard">Penalty K era 8</p>
</div>
</div>

<div className="cards">
            <img className="imagemcard"
                src="https://acdn-us.mitiendanube.com/stores/003/160/777/products/c40ab820-3b3face7e95a24c77716976618870986-1024-1024.jpeg"
                alt="chuteira 8"/>
<div className="partebaixocards">
 <p className="textodocard">Phantom GX Elite</p>
</div>
</div>


</div>

<footer className="footer">
      <p>© 2025 Meu Site de Produtos</p>
      <p>Contato: email@exemplo.com</p>
    </footer>


</div>

        
        {/*  <!--oi vc--> */}
    </>
  )
}

export default App
