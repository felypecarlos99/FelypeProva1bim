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
            <div>
                <img className="img"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkvfhCu1f2GEDGNFuwNWCiStZcfNdLAX93w&s"
                alt="Neymar"/>
       </div>
       <div className="textos">
       <p className="texto1">NEYMAR JR</p>
       <p className="texto2">Atleta</p>
</div>
</div>

 <div className="retangulo2">
               <div className="cards">
            <img className="imagemcard"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIp07ecHgkf_8FvZDoHqFW_ZLJN0U1Nqbu2A&s"
                alt="Neymar 2022"/>
<div className="partebaixocards">
 <p className="textodocard">Neymar 2022</p>
</div>
</div>

<div className="cards">
              <img className="imagemcard"
               src="https://www.polemicaparaiba.com.br/wp-content/uploads/2016/12/figurinhas-panini-copa-07neymarjpeg.jpg"
               alt="Neymar 2014"/>
<div className="partebaixocards">
<p className="textodocard">Neymar 2014</p>
</div>
</div>

<div className="cards">
                 <img className="imagemcard"
                 src="https://ludopedio.org.br/wp-content/uploads/Neymar-Album-Copa-2018-Divulga%C3%A7%C3%A3o.jpg"
                alt="Neymar 2018"/>
<div className="partebaixocards">
<p className="textodocard">Neymar 2018</p>
</div>
</div>
</div>

</div>

        
        {/*  <!--oi vc--> */}
    </>
  )
}

export default App
