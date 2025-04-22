import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <div className='body'>
        <div className="retangulo1">


          <Header/>

          <Banner
  imagem="https://shoxstore.com.br/rev-img/banner_principal_2025.webp"
  titulo="Chuteira"
/>
</div>

<div className='retangulo2'>
  <p className='textoproduto'>PRODUTOS:</p>
</div>

 <div className="retangulo3">
 <Card imagem="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-phantom-gx-campo1-f4af38a123ef3f678a17164922163085-1024-1024.png" titulo="Phantom GX" />
  
  <Card imagem="https://tfdfjz.vtexassets.com/arquivos/ids/336779/chuteira-campo-nike-masculina-vapor-16-fq8441-400-azul-fq8441-400-6-.jpg?v=638636844561100000" titulo="Vapor 16" />
  
  <Card imagem="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-air-zoom-mercurial-vapor-pro-society-011-88b2a848e567d1675016657243210283-1024-1024.jpeg" titulo="Air Zoom Mercurial" />
  
  <Card imagem="https://acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-phantom-gx-campo1-f4af38a123ef3f678a17164922163085-1024-1024.png" titulo="Phantom GX" />

</div>
<div className="retangulo3">

<Card imagem="https://m.media-amazon.com/images/I/61Pt8iBB6VL._AC_UF894,1000_QL80_.jpg" titulo="Bolognifi Cano Alto" />
  
  <Card imagem="https://static.netshoes.com.br/produtos/chuteira-campo-puma-one-53-fgag-bdp/28/D14-8438-028/D14-8438-028_zoom1.jpg?ts=1695422136&ims=544x" titulo="Puma One 5.3" />
  
  <Card imagem="https://images.tcdn.com.br/img/img_prod/550428/chuteira_campo_penalty_k_era_8_infantil_2605_1_20190905114202.jpg" titulo="Penalty K era 8" />
  
  <Card imagem="https://acdn-us.mitiendanube.com/stores/003/160/777/products/c40ab820-3b3face7e95a24c77716976618870986-1024-1024.jpeg" titulo="Phantom GX Elite" />


</div>

<Footer/>


</div>

        
        {/*  <!--oi vc--> */}
    </>
  )
}

export default App
